# 🎯 Quick Reference - EasyPagar Lead System

## 🌐 Frontend URLs
- **Website**: `http://localhost:5173` (or your dev server)
- **Admin Login**: `/admin/login`
- **Admin Dashboard**: `/admin/dashboard`

## 🔧 Backend URLs
- **Server**: `http://localhost:5000`
- **Base API**: `http://localhost:5000/api`

## 👤 Admin Credentials
```
Username: admineasy
Password: ADMINeasy@2025
```

## 📦 Database Connection
```
MongoDB URL: mongodb+srv://colladome:l0hxU7Ma043TCXV5@colladome.k4sk15y.mongodb.net/easypagar
Database: easypagar
```

## 🗝️ JWT Secret
```
2ef235ebfb4fecf155c869d659e6431496763ab590298c57ab3ea85e2b0dec5a
```

## 📋 Starting Services

### 1. Start Backend (Terminal 1)
```bash
cd backend
npm install
npm start
```

### 2. Start Frontend (Terminal 2)
```bash
npm run dev
```

### 3. Create Admin User (First time only)
```bash
cd backend
node init-admin.js
```

## 📊 Admin Dashboard Features

| Feature | Details |
|---------|---------|
| View Leads | See all submitted leads in a table |
| Search | Filter by name, email, company, phone |
| Export | Download leads as CSV file |
| Statistics | Total leads and today's leads count |
| Delete | Remove leads from database |
| Auto-refresh | Updates every 30 seconds |

## 🔄 Lead Form Behavior

| Scenario | Behavior |
|----------|----------|
| User lands on site | Form appears after 1.5 seconds |
| User closes form | Form reappears every 10 seconds |
| User submits form | Form stops appearing (stored in localStorage) |
| Page refresh | Form won't appear if already submitted |
| New browser/Incognito | Form appears again |

## 📱 Lead Form Fields
- Full Name (required)
- Mobile Number (required, 10+ digits)
- Company Name (required)
- Email ID (required, email format)
- CAPTCHA (required, 6 character code)
- IP Address (captured automatically)

## 🗄️ Lead Information Captured
- ✅ Full Name
- ✅ Mobile Number
- ✅ Company Name
- ✅ Email ID
- ✅ IP Address
- ✅ Submission Date & Time

## 🔐 Security Features
- Password hashing (bcryptjs)
- JWT authentication
- Protected API routes
- CORS configured
- Input validation

## 🚨 Common Issues & Solutions

### Backend won't connect to MongoDB?
- Check internet connection
- Verify MongoDB credentials
- Check if IP is whitelisted in MongoDB Atlas

### Lead form not submitting?
- Check if backend is running on port 5000
- Check browser console for error messages
- Verify backend URL is correct

### Admin login failing?
- Double-check credentials
- Clear browser cache/cookies
- Check if backend is running

### CSV export not working?
- Check browser's download settings
- Ensure pop-ups are not blocked
- Try a different browser

## 📞 Support Components

### Frontend Components Created
1. `LeadForm.jsx` - Popup lead capture form
2. `AdminLogin.jsx` - Admin login page
3. `AdminDashboard.jsx` - Lead management dashboard

### Backend Files Created
1. `server.js` - Express API server
2. `init-admin.js` - Admin user initialization
3. `.env` - Environment variables
4. `package.json` - Backend dependencies

## 🎨 Brand Colors Used
- Primary Purple: `#3801b6`
- Secondary Blue: `#2504bc`
- Accent Blue: `#1e3a8a`
- Light Blue: `#B9D9EB`

## 📈 Next Steps
1. Install backend dependencies
2. Start backend server
3. Initialize admin user
4. Start frontend server
5. Test lead form submission
6. Access admin dashboard
7. Deploy to production when ready
