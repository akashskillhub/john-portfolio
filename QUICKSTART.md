# ⚡ Quick Start - Get Running in 3 Minutes!

## 🚀 Super Fast Setup

### Step 1: Install Dependencies (2 minutes)

Open TWO terminal windows in the project root:

**Terminal 1:**
```bash
cd server && npm install
```

**Terminal 2:**
```bash
cd client && npm install
```

### Step 2: Start Everything (30 seconds)

**Terminal 1:**
```bash
npm run dev
```

**Terminal 2:**
```bash
npm run dev
```

### Step 3: Open Your Portfolio!

Go to: **http://localhost:5173**

## 🎯 What You'll See

✅ **Home Page** - Beautiful hero section with animations
✅ **Skills Page** - Your tech stack with progress bars
✅ **Projects Page** - Sample projects with filtering
✅ **Contact Page** - Working contact form
✅ **Dark/Light Mode** - Toggle in the navbar
✅ **Download CV** - Button in navbar (demo PDF)

## 🔐 Access Admin Panel (Optional)

### Create Admin Account:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@example.com","password":"Admin@123"}'
```

### Login:
1. Go to: http://localhost:5173/admin/login
2. Email: `admin@example.com`
3. Password: `Admin@123`

## 🌱 Add Sample Data

Want to populate the database with sample projects and skills?

```bash
cd server
npm run seed
```

## ✨ You're Done!

Your portfolio is now running with:
- ✅ Frontend on http://localhost:5173
- ✅ Backend API on http://localhost:5000
- ✅ Dark/Light mode working
- ✅ All pages responsive
- ✅ Admin panel ready
- ✅ Database connected

## 📝 Next Steps

1. **Customize your info**: Edit `client/src/pages/Home.jsx`
2. **Add your projects**: Use the admin panel
3. **Update your resume**: Replace `client/public/resume.pdf`
4. **Change colors**: Edit `client/src/index.css`

## ❓ Issues?

- **Port in use?** Kill the process: `lsof -ti:5000 | xargs kill -9`
- **Module errors?** Delete `node_modules` and run `npm install` again
- **Can't connect to DB?** Check `server/.env` has correct MONGO_URI

For detailed help, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

---

**Happy Coding! 🎉**
