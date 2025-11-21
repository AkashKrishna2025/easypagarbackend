import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

dotenv.config();

const app = express();

// Middleware
// Configure CORS to allow requests from your frontend (add other origins as needed)
const allowedOrigins = (process.env.ALLOWED_ORIGINS && process.env.ALLOWED_ORIGINS.split(',')) || [
  'https://easyfrontend-seven.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow server-to-server or curl requests with no origin
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // enable preflight for all routes
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = 'mongodb+srv://colladome:l0hxU7Ma043TCXV5@colladome.k4sk15y.mongodb.net/easypagar?retryWrites=true&w=majority';
const JWT_SECRET = '2ef235ebfb4fecf155c869d659e6431496763ab590298c57ab3ea85e2b0dec5a';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Schemas
const leadSchema = new mongoose.Schema({
  fullName: String,
  mobileNumber: String,
  companyName: String,
  email: String,
  ipAddress: String,
  createdAt: { type: Date, default: Date.now },
});

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

// Models
const Lead = mongoose.model('Lead', leadSchema);
const Admin = mongoose.model('Admin', adminSchema);

// Routes

// Create admin (run once)
app.post('/api/auth/create-admin', async (req, res) => {
  try {
    const hashedPassword = await bcryptjs.hash('ADMINeasy@2025', 10);
    
    const admin = new Admin({
      username: 'admineasy',
      password: hashedPassword,
      email: 'admin@easypagar.com'
    });

    await admin.save();
    res.json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcryptjs.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, {
      expiresIn: '24h'
    });

    res.json({ token, username: admin.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit Lead
app.post('/api/leads/submit', async (req, res) => {
  try {
    const { fullName, mobileNumber, companyName, email, ipAddress } = req.body;

    const lead = new Lead({
      fullName,
      mobileNumber,
      companyName,
      email,
      ipAddress
    });

    await lead.save();
    res.json({ message: 'Lead submitted successfully', lead });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Get all leads (protected route)
app.get('/api/leads', verifyToken, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get lead stats
app.get('/api/leads/stats', verifyToken, async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const todayLeads = await Lead.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0)),
        $lt: new Date(new Date().setHours(23, 59, 59, 999))
      }
    });

    res.json({ totalLeads, todayLeads });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete lead
app.delete('/api/leads/:id', verifyToken, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
