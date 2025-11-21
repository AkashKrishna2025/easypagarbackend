# Vercel Deployment Guide for EasyPagar

## 📋 Pre-Deployment Checklist

Before deploying, make sure:
- ✅ All features tested locally
- ✅ Backend and frontend running without errors
- ✅ Admin user created
- ✅ Lead form working 
- ✅ MongoDB connection stable

---

## 🚀 STEP 1: Prepare Backend for Deployment

### 1.1 Update Backend Environment Variables

The backend needs to be deployed separately. We'll use a service like Render or Railway.

**For now, let's focus on Frontend deployment to Vercel.**

---

## 🚀 STEP 2: Frontend Deployment to Vercel

### 2.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize and complete signup

### 2.2 Prepare Frontend for Deployment

First, update the backend API URL in your frontend files:

**File: `src/components/LeadForm/LeadForm.jsx`**
- Change `http://localhost:5000` to your deployed backend URL

**File: `src/components/AdminLogin/AdminLogin.jsx`**
- Change `http://localhost:5000` to your deployed backend URL

**File: `src/components/AdminDashboard/AdminDashboard.jsx`**
- Change `http://localhost:5000` to your deployed backend URL

Create a `.env.production` file in root:
```
VITE_API_URL=https://your-backend-url.com
```

### 2.3 Create `vercel.json` Configuration

Create a file named `vercel.json` in the root directory with:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_URL": "@vite_api_url"
  }
}
```

### 2.4 Update `vite.config.js` to Use Environment Variables

Update your Vite config if needed to include environment variables.

---

## 🚀 STEP 3: Deploy Frontend to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Click "Import Git Repository"
   - Paste your GitHub URL
   - Select the repository
   - Click "Import"

3. **Configure Project**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Leave other settings as default
   - Click "Deploy"

### Option B: Deploy via CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts

4. **For Production**
   ```bash
   vercel --prod
   ```

---

## 🚀 STEP 4: Backend Deployment (Choose One)

### Option A: Deploy to Render (Recommended)

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select backend folder (if monorepo) or main repo
   - Name: `easypagar-backend`
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node backend/server.js`

3. **Add Environment Variables**
   - MONGODB_URI: `mongodb+srv://...` (your MongoDB connection)
   - JWT_SECRET: `2ef235ebfb4fecf155c869d659e6431496763ab590298c57ab3ea85e2b0dec5a`
   - NODE_ENV: `production`

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy the URL (e.g., https://easypagar-backend.onrender.com)

### Option B: Deploy to Railway

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add Services**
   - Add MongoDB (optional if using Atlas)
   - Add Node.js service
   - Configure variables same as Render

4. **Deploy**
   - Railway will auto-deploy

### Option C: Deploy to Heroku (Free tier ended - Paid only)

---

## 🚀 STEP 5: Update Frontend with Backend URL

Once backend is deployed, update all API URLs:

**File: `src/components/LeadForm/LeadForm.jsx`**
```javascript
const response = await axios.post("https://your-backend-url.com/api/leads/submit", {
```

**File: `src/components/AdminLogin/AdminLogin.jsx`**
```javascript
const response = await axios.post("https://your-backend-url.com/api/auth/login", {
```

**File: `src/components/AdminDashboard/AdminDashboard.jsx`**
```javascript
const response = await axios.get("https://your-backend-url.com/api/leads", {
```

Then redeploy frontend to Vercel.

---

## 📝 Complete Deployment URLs

After deployment, you'll have:

```
Frontend: https://your-project.vercel.app
Backend: https://your-backend-url.com (Render/Railway)
Admin: https://your-project.vercel.app/admin/login
```

---

## 🔐 Important Security Notes

1. **Update CORS in Backend**
   
   File: `backend/server.js`
   ```javascript
   app.use(cors({
     origin: ['https://your-project.vercel.app', 'http://localhost:5173'],
     credentials: true
   }));
   ```

2. **Never commit .env files**
   - Add `.env` to `.gitignore`
   - Use Vercel/Render environment variables

3. **Update MongoDB IP Whitelist**
   - Go to MongoDB Atlas → Security → Network Access
   - Add backend server IP or allow 0.0.0.0/0

4. **Use HTTPS**
   - All API calls should use HTTPS
   - Vercel and Render provide free HTTPS

---

## ✅ Deployment Verification Checklist

After deployment:

- [ ] Frontend loads without errors
- [ ] Lead form appears after 1.5 seconds
- [ ] Form submits successfully
- [ ] Data appears in admin dashboard
- [ ] Admin login works
- [ ] No CORS errors in console
- [ ] MongoDB connection working
- [ ] All API endpoints responding

---

## 🐛 Troubleshooting

### CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Update CORS in backend server.js

### Lead Form Not Submitting
```
Network error / 404
```
**Solution**: Check backend URL in frontend components

### Admin Login Fails
```
401 Unauthorized
```
**Solution**: Check JWT_SECRET and MongoDB connection

### Database Connection Error
```
Cannot connect to MongoDB
```
**Solution**: Whitelist your IP in MongoDB Atlas

### Build Failed on Vercel
```
Build error
```
**Solution**: Check build logs in Vercel dashboard

---

## 📊 Expected URLs After Deployment

```
🌐 Website: https://yourapp.vercel.app
📝 Admin Login: https://yourapp.vercel.app/admin/login
🔌 API Backend: https://yourbackend.onrender.com
🗄️ Database: MongoDB Atlas (cloud.mongodb.com)
```

---

## 🎯 Quick Summary

1. **Frontend**: Deploy to Vercel (5 minutes)
2. **Backend**: Deploy to Render (10 minutes)
3. **Update URLs**: Connect frontend to backend (2 minutes)
4. **Test**: Verify everything works (5 minutes)

**Total Time**: ~20 minutes

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- MongoDB Docs: https://docs.mongodb.com/atlas

