import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://colladome:l0hxU7Ma043TCXV5@colladome.k4sk15y.mongodb.net/easypagar?retryWrites=true&w=majority';

// Admin Schema
const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
});

const Admin = mongoose.model('Admin', adminSchema);

async function createAdmin() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
    });
    console.log('✅ MongoDB connected');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admineasy' });
    
    if (existingAdmin) {
      console.log('ℹ️  Admin user already exists');
      await mongoose.disconnect();
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash('ADMINeasy@2025', 10);

    // Create admin
    const admin = new Admin({
      username: 'admineasy',
      password: hashedPassword,
      email: 'admin@easypagar.com'
    });

    await admin.save();
    console.log('✅ Admin user created successfully');
    console.log('Username: admineasy');
    console.log('Password: ADMINeasy@2025');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n📝 NOTE: If you see "IP not whitelisted" error:');
    console.log('1. Go to MongoDB Atlas: https://cloud.mongodb.com');
    console.log('2. Navigate to Security > Network Access');
    console.log('3. Add your IP address or allow 0.0.0.0/0 (for development)');
    console.log('4. Then run: node init-admin.js again');
    process.exit(1);
  }
}

createAdmin();
