# EasyPagar Lead Management System - Setup Guide

## 🚀 Quick Start

### Frontend Setup (Already Done)
The lead form is integrated into your existing React application. No additional setup needed for the frontend.

### Backend Setup

#### 1. Navigate to Backend Directory
```bash
cd backend
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start the Backend Server
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## 📱 Features

### Lead Form (Frontend)
- **Auto-popup**: Appears 1.5 seconds after page load
- **Recurring**: Shows every 10 seconds if user doesn't submit
- **IP Capture**: Automatically captures user's IP address
- **Smart Storage**: Only shows once per user (localStorage)
- **Fields**:
  - Full Name
  - Mobile Number
  - Company Name
  - Email ID
  - CAPTCHA Verification

### Admin Dashboard
- **Login**: `/admin/login`
- **Dashboard**: `/admin/dashboard`
- **Credentials**:
  - Username: `admineasy`
  - Password: `ADMINeasy@2025`

### Admin Features
- ✅ View all leads in real-time
- ✅ Search leads by name, email, company, or phone
- ✅ View IP addresses of leads
- ✅ Export leads as CSV
- ✅ Delete leads
- ✅ Real-time statistics (total leads, today's leads)
- ✅ Auto-refresh every 30 seconds

## 🔌 API Endpoints

### Authentication
```
POST /api/auth/login
- Body: { username: string, password: string }
- Response: { token: string, username: string }
```

### Lead Submission
```
POST /api/leads/submit
- Body: {
    fullName: string,
    mobileNumber: string,
    companyName: string,
    email: string,
    ipAddress: string
  }
```

### Get All Leads (Protected)
```
GET /api/leads
- Headers: Authorization: Bearer <token>
```

### Get Statistics (Protected)
```
GET /api/leads/stats
- Headers: Authorization: Bearer <token>
- Response: { totalLeads: number, todayLeads: number }
```

### Delete Lead (Protected)
```
DELETE /api/leads/:id
- Headers: Authorization: Bearer <token>
```

## 🗄️ MongoDB Collections

### Leads Collection
```javascript
{
  _id: ObjectId,
  fullName: String,
  mobileNumber: String,
  companyName: String,
  email: String,
  ipAddress: String,
  createdAt: Date
}
```

### Admin Collection
```javascript
{
  _id: ObjectId,
  username: String,
  password: String (hashed),
  email: String,
  createdAt: Date
}
```

## 🔒 Security Notes

- ✅ Passwords are hashed using bcryptjs
- ✅ JWT tokens are used for authentication
- ✅ Tokens expire after 24 hours
- ✅ Protected routes require valid JWT token

## 📊 Usage Flow

1. **User lands on website** → Lead form popup appears after 1.5 seconds
2. **User closes form** → Form reappears every 10 seconds
3. **User submits form** → Data is stored in MongoDB with IP address
4. **Admin logs in** → `/admin/login`
5. **Admin views leads** → `/admin/dashboard`
6. **Admin can search, export, or delete leads**

## ⚙️ Troubleshooting

### Backend won't start?
- Check if port 5000 is available
- Verify MongoDB connection string
- Check if all dependencies are installed

### Lead form not submitting?
- Check if backend server is running
- Verify backend URL in LeadForm.jsx (http://localhost:5000)
- Check browser console for errors

### Admin login not working?
- Verify credentials: `admineasy` / `ADMINeasy@2025`
- Check if backend is running
- Check browser console for errors

### CORS errors?
- Backend CORS is configured to accept requests from localhost
- For production, update CORS settings in server.js

## 🚀 Production Deployment

1. Update backend URL in LeadForm.jsx and AdminLogin.jsx (change from localhost:5000)
2. Set NODE_ENV=production
3. Update MongoDB credentials if needed
4. Deploy backend to a server (Heroku, Railway, Render, etc.)
5. Deploy frontend to hosting service (Vercel, Netlify, etc.)

## 📝 Notes

- Default admin credentials should be changed in production
- IP address is captured from ipify.org API
- All lead data is stored in MongoDB
- Admin dashboard auto-refreshes every 30 seconds
