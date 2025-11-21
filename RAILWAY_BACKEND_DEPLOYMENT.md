# Backend Deployment Guide - Railway

## 🚀 Deploy Backend to Railway (Alternative Option)

**Note**: Railway is another great option. Choose either Render OR Railway (not both).

### Comparison: Render vs Railway

| Feature | Render | Railway |
|---------|--------|---------|
| Free Tier | Yes (with spin-down) | Yes (limited) |
| Always-On | Paid $7/month | Paid $5/month |
| Build Time | Good | Fast |
| Community | Large | Growing |
| Deployment | Push-to-Deploy | Web Interface |

---

## Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click "Start Project"
3. Choose "Deploy from GitHub"
4. Authorize Railway with GitHub

---

## Step 2: Prepare Backend for Railway

#### 2.1 Create `Procfile` in Backend Folder

File: `backend/Procfile`

```
web: node server.js
```

#### 2.2 Update Backend package.json

Ensure start script exists:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

#### 2.3 Update CORS in backend/server.js

```javascript
import cors from 'cors';

const allowedOrigins = [
  'https://yourapp.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174'
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

## Step 3: Deploy to Railway

#### 3.1 Connect GitHub Repository

1. In Railway dashboard, click "New Project"
2. Click "Deploy from GitHub repo"
3. Select your repository
4. Click "Deploy Now"

#### 3.2 Add Environment Variables

1. Go to your project in Railway
2. Click "Variables"
3. Add these:

```
MONGODB_URI: mongodb+srv://colladome:l0hxU7Ma043TCXV5@colladome.k4sk15y.mongodb.net/easypagar?retryWrites=true&w=majority
JWT_SECRET: 2ef235ebfb4fecf155c869d659e6431496763ab590298c57ab3ea85e2b0dec5a
NODE_ENV: production
```

#### 3.3 Configure Deployment Settings

1. Click "Settings"
2. Ensure "Root Directory" is set to `backend`
3. Check "Start Command" is `npm start`

#### 3.4 Deploy

Click "Deploy" button

⏳ Wait 2-4 minutes for deployment

---

## Step 4: Get Backend URL

After deployment:

1. Go to "Settings" → "Environment"
2. Railway will generate a URL like: `https://your-backend-xxx.railway.app`
3. Copy this URL
4. Use for updating frontend

---

## Step 5: Update Frontend API URLs

Same as Render deployment.

**File: `src/components/LeadForm/LeadForm.jsx`**

```javascript
// Change from:
await axios.post("http://localhost:5000/api/leads/submit", {

// To:
await axios.post("https://your-backend-xxx.railway.app/api/leads/submit", {
```

**File: `src/components/AdminLogin/AdminLogin.jsx`**

```javascript
// Change from:
const response = await axios.post("http://localhost:5000/api/auth/login", {

// To:
const response = await axios.post("https://your-backend-xxx.railway.app/api/auth/login", {
```

**File: `src/components/AdminDashboard/AdminDashboard.jsx`**

```javascript
// Replace all:
"http://localhost:5000/api/leads"

// With:
"https://your-backend-xxx.railway.app/api/leads"
```

---

## Step 6: Redeploy Frontend

```bash
git add .
git commit -m "Update backend URL for Railway deployment"
git push origin main
```

Vercel will auto-redeploy.

---

## ✅ Verification Checklist

- [ ] Backend deployed to Railway
- [ ] Frontend updated with backend URL
- [ ] Frontend redeployed to Vercel
- [ ] Lead form appears on homepage
- [ ] Form submits successfully
- [ ] Admin dashboard loads leads
- [ ] No CORS errors in console

---

## ⚠️ Important Notes

### Railway Free Tier

- Limited to $5 credit monthly
- Great for testing/small projects
- Paid plan: $5+/month for dedicated resources

### MongoDB Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Network Access → "Add IP Address"
3. Add Railway server IP or "Allow from anywhere"

---

## 🚀 Deployment URLs

```
Frontend: https://yourapp.vercel.app
Backend: https://your-backend-xxx.railway.app
Admin: https://yourapp.vercel.app/admin/login
```

---

## 📞 Resources

- [Railway Documentation](https://docs.railway.app)
- [Railway Node Deployment](https://docs.railway.app/deploy/deployments)
- [MongoDB Atlas Guide](https://docs.mongodb.com/atlas)

---

**Which Should You Choose?**

- **Choose Render** if: You want simple deployment & don't mind occasional spin-downs
- **Choose Railway** if: You prefer a modern interface & faster builds

**Recommendation**: Start with Render (simpler), upgrade to paid later if needed.

