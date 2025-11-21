# Backend Deployment Guide - Render

## 🚀 Deploy Backend to Render (Free & Easy)

### Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize and complete signup

---

### Step 2: Prepare Backend for Deployment

#### 2.1 Create `render.yaml` in Backend Folder

File: `backend/render.yaml`

```yaml
services:
  - type: web
    name: easypagar-backend
    env: node
    plan: free
    branch: main
    buildCommand: npm install
    startCommand: node server.js
    envVars:
      - key: MONGODB_URI
        scope: build
        value: mongodb+srv://colladome:l0hxU7Ma043TCXV5@colladome.k4sk15y.mongodb.net/easypagar?retryWrites=true&w=majority
      - key: JWT_SECRET
        scope: build
        value: 2ef235ebfb4fecf155c869d659e6431496763ab590298c57ab3ea85e2b0dec5a
      - key: NODE_ENV
        scope: build
        value: production
```

#### 2.2 Update Backend package.json

Make sure scripts are correct:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

#### 2.3 Update Backend server.js for Production

Update CORS in `backend/server.js`:

```javascript
// Add this after other imports
import cors from 'cors';

// Configure CORS
const allowedOrigins = [
  'https://yourapp.vercel.app', // Your Vercel frontend
  'http://localhost:5173',       // Local development
  'http://localhost:5174'        // Local development alternate port
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

---

### Step 3: Deploy to Render

#### 3.1 Push Code to GitHub

```bash
git add .
git commit -m "Prepare backend for Render deployment"
git push origin main
```

#### 3.2 Create New Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New" → "Web Service"
3. Click "Connect GitHub account" (if not already connected)
4. Search for your repository
5. Click "Connect"

#### 3.3 Configure Web Service

Fill in the following:

- **Name**: `easypagar-backend`
- **Environment**: `Node`
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `node backend/server.js`
- **Plan**: `Free` (or Paid if you want 24/7 uptime)

#### 3.4 Add Environment Variables

Click "Advanced" and add:

```
MONGODB_URI: mongodb+srv://colladome:l0hxU7Ma043TCXV5@colladome.k4sk15y.mongodb.net/easypagar?retryWrites=true&w=majority
JWT_SECRET: 2ef235ebfb4fecf155c869d659e6431496763ab590298c57ab3ea85e2b0dec5a
NODE_ENV: production
```

#### 3.5 Deploy

Click "Create Web Service"

⏳ Wait 3-5 minutes for deployment

---

### Step 4: Get Backend URL

After deployment completes:

1. Your service will show a URL like: `https://easypagar-backend-xxx.onrender.com`
2. Copy this URL
3. Save it for updating frontend

---

### Step 5: Update Frontend with Backend URL

Now update your frontend components with the backend URL.

**File: `src/components/LeadForm/LeadForm.jsx`**

Find this line:
```javascript
await axios.post("http://localhost:5000/api/leads/submit", {
```

Replace with:
```javascript
await axios.post("https://easypagar-backend-xxx.onrender.com/api/leads/submit", {
```

**File: `src/components/AdminLogin/AdminLogin.jsx`**

Find:
```javascript
const response = await axios.post("http://localhost:5000/api/auth/login", {
```

Replace with:
```javascript
const response = await axios.post("https://easypagar-backend-xxx.onrender.com/api/auth/login", {
```

**File: `src/components/AdminDashboard/AdminDashboard.jsx`**

Find all instances of:
```javascript
"http://localhost:5000/api/leads"
```

Replace with:
```javascript
"https://easypagar-backend-xxx.onrender.com/api/leads"
```

---

### Step 6: Redeploy Frontend to Vercel

```bash
git add .
git commit -m "Update backend API URL for production"
git push origin main
```

Vercel will auto-redeploy with the new backend URL.

---

## ✅ Verification Checklist

After deployment:

- [ ] Visit frontend URL
- [ ] Lead form appears
- [ ] Fill and submit form
- [ ] Check admin dashboard for the lead
- [ ] No CORS errors in browser console
- [ ] No network errors

---

## 🔗 Final Deployment URLs

```
Frontend: https://yourapp.vercel.app
Backend: https://easypagar-backend-xxx.onrender.com
Admin: https://yourapp.vercel.app/admin/login
Database: MongoDB Atlas
```

---

## ⚠️ Important Notes

### Free Tier Limitations

- **Render Free Tier**: Auto-spins down after 15 minutes of inactivity
- **Solution**: Upgrade to Paid ($7/month) for always-on, or accept cold starts

### MongoDB IP Whitelist

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to Security → Network Access
3. Click "Add IP Address"
4. Add Render server IP or select "Allow access from anywhere" (0.0.0.0/0)

### CORS Issues

If you see CORS errors:
1. Check backend CORS configuration
2. Verify frontend URL is whitelisted
3. Restart backend service

---

## 🚀 Troubleshooting

### Build Failed
- Check build logs in Render dashboard
- Ensure all dependencies in package.json
- Verify start command is correct

### Cannot Connect to MongoDB
- Check MONGODB_URI is correct
- Verify IP is whitelisted in MongoDB Atlas
- Check database exists

### Lead Form Not Submitting
- Check backend URL in frontend files
- Look for CORS errors in browser console
- Verify backend is running

### Admin Login Not Working
- Check JWT_SECRET matches
- Verify MongoDB connection
- Check admin user exists

---

## 📞 Resources

- [Render Documentation](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)
- [MongoDB Atlas Documentation](https://docs.mongodb.com/atlas)

---

**Total Deployment Time**: ~20-30 minutes

**Status**: ✅ Ready for Production

