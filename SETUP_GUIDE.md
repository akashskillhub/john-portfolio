# 🚀 Quick Setup Guide

This guide will help you get your portfolio up and running in minutes.

## Prerequisites

Before you begin, make sure you have:
- ✅ Node.js installed (v16 or higher) - [Download here](https://nodejs.org/)
- ✅ MongoDB installed locally OR a MongoDB Atlas account - [Get MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- ✅ A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Install Dependencies

Open two terminal windows in the project root directory.

**Terminal 1 - Install Server Dependencies:**
```bash
cd server
npm install
```

**Terminal 2 - Install Client Dependencies:**
```bash
cd client
npm install
```

### 2. Configure Environment Variables

The `.env` files are already created with your MongoDB credentials. Verify they are correct:

**Server (.env)** - Located in `server/.env`
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://komal:itmTklEoGE6ASZIP@cluster0.g5tlf77.mongodb.net/john
JWT_SECRET=secret@key
```

**Client (.env)** - Located in `client/.env`
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start the Application

Keep both terminals open.

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

**Terminal 2 - Start Frontend:**
```bash
cd client
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

### 4. Access Your Portfolio

Open your browser and go to:
- **Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/admin/login

## 🔐 Create Your First Admin Account

To access the admin panel, you need to create an admin account first.

### Option 1: Using Postman or Thunder Client

1. Open Postman or Thunder Client (VS Code extension)
2. Create a new POST request to: `http://localhost:5000/api/auth/register`
3. Set Headers:
   ```
   Content-Type: application/json
   ```
4. Set Body (raw JSON):
   ```json
   {
     "username": "admin",
     "email": "admin@example.com",
     "password": "Admin@123"
   }
   ```
5. Send the request
6. You should get a success response with your admin token

### Option 2: Using curl (Command Line)

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "Admin@123"
  }'
```

### Option 3: Using Browser Console

1. Open http://localhost:5173 in your browser
2. Open Developer Console (F12)
3. Paste this code:
```javascript
fetch('http://localhost:5000/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'admin',
    email: 'admin@example.com',
    password: 'Admin@123'
  })
})
.then(res => res.json())
.then(data => console.log(data))
```

## 📝 Login to Admin Panel

1. Go to http://localhost:5173/admin/login
2. Use your credentials:
   - Email: `admin@example.com`
   - Password: `Admin@123`
3. You'll be redirected to the dashboard

## ✨ Add Your First Project

1. Login to the admin dashboard
2. Click "Add New Project"
3. Fill in the form:
   - **Title**: E-Commerce Platform
   - **Description**: A full-featured e-commerce platform...
   - **Image URL**: https://images.unsplash.com/photo-1557821552-17105176677c?w=500
   - **Technologies**: React, Node.js, MongoDB, Express
   - **Category**: fullstack
   - **GitHub URL**: https://github.com/yourusername/project
   - **Live URL**: https://yourproject.com
4. Click "Create"

Your project will now appear on the Projects page!

## 🎨 Customize Your Portfolio

### Update Personal Information

1. **Name and Title**
   - Edit `client/src/pages/Home.jsx` (lines with "John Doe")
   - Edit `client/src/components/layout/Navbar.jsx`
   - Edit `client/src/components/layout/Footer.jsx`

2. **Contact Information**
   - Edit `client/src/pages/Contact.jsx`
   - Update email, phone, and location

3. **Social Links**
   - Edit `client/src/pages/Home.jsx` (socialLinks array)
   - Edit `client/src/components/layout/Footer.jsx`

4. **Resume/CV**
   - Replace `client/public/resume.pdf` with your actual resume

5. **Add Your Photo**
   - Add your photo to `client/public/`
   - Update the image in `Home.jsx`

## 🐛 Troubleshooting

### Port Already in Use

If you see "Port 5000 is already in use":
```bash
# Find and kill the process (Mac/Linux)
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Error

If you can't connect to MongoDB:
1. Check your internet connection (for MongoDB Atlas)
2. Verify the MONGO_URI in `server/.env`
3. Make sure your IP is whitelisted in MongoDB Atlas
4. Try using a local MongoDB: `mongodb://localhost:27017/portfolio`

### React Icons Not Showing

If icons don't appear:
```bash
cd client
npm install react-icons
```

### Module Not Found Errors

Clear node_modules and reinstall:
```bash
# In server directory
rm -rf node_modules package-lock.json
npm install

# In client directory
rm -rf node_modules package-lock.json
npm install
```

## 📱 Test Your Portfolio

### Pages to Check:
- ✅ Home Page: http://localhost:5173/
- ✅ Skills Page: http://localhost:5173/skills
- ✅ Projects Page: http://localhost:5173/projects
- ✅ Contact Page: http://localhost:5173/contact
- ✅ Admin Login: http://localhost:5173/admin/login
- ✅ Admin Dashboard: http://localhost:5173/admin/dashboard

### Features to Test:
- ✅ Dark/Light mode toggle
- ✅ Responsive design (resize browser)
- ✅ Navigation links
- ✅ Contact form submission
- ✅ Project filtering
- ✅ Download CV button
- ✅ Admin CRUD operations

## 🚀 Next Steps

1. Add your real projects via the admin panel
2. Update your skills and proficiency levels
3. Replace dummy content with your information
4. Add your actual resume PDF
5. Test all features thoroughly
6. Deploy to production (see README.md for deployment guide)

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MongoDB Atlas Tutorial](https://www.mongodb.com/docs/atlas/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## 💡 Tips

- Keep both servers running while developing
- Use the admin panel to manage content instead of editing code
- Test dark mode and light mode for all pages
- Make sure all forms validate properly
- Check mobile responsiveness on real devices

## ✅ You're All Set!

Your portfolio is now running! 🎉

If you encounter any issues, check the troubleshooting section or create an issue on GitHub.

Happy coding! 💻
