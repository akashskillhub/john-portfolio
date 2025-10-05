# How to Add Your Own Projects Dynamically

## ✅ Setup Complete!

All dummy data has been removed. Your portfolio is ready for your original content.

---

## 🔐 Admin Login Credentials

**Login URL:** http://localhost:5173/admin/login

- **Email:** admin@portfolio.com
- **Password:** admin123

**⚠️ IMPORTANT:** Change these credentials after first login!

---

## 📝 How to Add Your Projects

### Step 1: Login to Admin Dashboard
1. Go to http://localhost:5173/admin/login
2. Enter admin credentials above
3. Click "Login"

### Step 2: Add New Project
1. In the dashboard, find "Add New Project" section
2. Fill in project details:
   - **Title:** Your project name
   - **Description:** Detailed project description
   - **Image URL:** Project screenshot/image URL
   - **Technologies:** Comma-separated (e.g., React, Node.js, MongoDB)
   - **Category:** Choose from:
     - `fullstack` - Full Stack projects
     - `frontend` - Frontend projects
     - `backend` - Backend projects
     - `mobile` - Mobile app projects
     - `other` - Other projects
   - **GitHub URL:** Link to your GitHub repository
   - **Live URL:** Link to deployed project (optional)
   - **Featured:** Check if this is a featured project
   - **Order:** Display order (1, 2, 3, etc.)

3. Click "Add Project"

### Step 3: View Your Projects
- Go to http://localhost:5173/projects
- Use filters to view by category

---

## 🎨 Where to Get Project Images

### Option 1: Use Your Own Screenshots
```
Upload to: client/public/images/projects/
URL: /images/projects/your-screenshot.jpg
```

### Option 2: Use Unsplash (Temporary)
```
https://images.unsplash.com/photo-[photo-id]?w=500
```

### Option 3: Use Placeholder Images (Temporary)
```
https://via.placeholder.com/500x300
```

---

## 📋 Project Examples

### Full Stack Project
```
Title: E-Commerce Platform
Description: Complete online shopping platform with user authentication, product catalog, cart, and payment integration
Image: /images/projects/ecommerce.jpg
Technologies: React, Node.js, MongoDB, Express, Stripe
Category: fullstack
GitHub: https://github.com/yourusername/ecommerce
Live URL: https://myecommerce.com
Featured: Yes
Order: 1
```

### Frontend Project
```
Title: Weather Dashboard
Description: Real-time weather application with beautiful UI and location-based forecasts
Image: /images/projects/weather.jpg
Technologies: React, TypeScript, Tailwind CSS, OpenWeather API
Category: frontend
GitHub: https://github.com/yourusername/weather-app
Live URL: https://myweather.app
Featured: No
Order: 2
```

### Backend Project
```
Title: Authentication API
Description: Secure REST API with JWT authentication, role-based access, and email verification
Image: /images/projects/auth-api.jpg
Technologies: Node.js, Express, MongoDB, JWT, Nodemailer
Category: backend
GitHub: https://github.com/yourusername/auth-api
Live URL: (leave empty for API projects)
Featured: No
Order: 3
```

### Mobile Project
```
Title: Fitness Tracker App
Description: Cross-platform mobile app for tracking workouts, calories, and fitness goals
Image: /images/projects/fitness-app.jpg
Technologies: React Native, Expo, Firebase, AsyncStorage
Category: mobile
GitHub: https://github.com/yourusername/fitness-tracker
Live URL: https://play.google.com/store/apps/...
Featured: Yes
Order: 4
```

---

## ✏️ How to Edit/Delete Projects

### Edit Project
1. In Admin Dashboard, find the project card
2. Click "Edit" button
3. Modify project details
4. Click "Update Project"

### Delete Project
1. In Admin Dashboard, find the project card
2. Click "Delete" button
3. Confirm deletion

---

## 🛠️ Update Your Skills

The skills are already seeded with common MERN stack skills. To customize:

1. Edit `server/seed.js`
2. Modify the `skills` array with your actual skills
3. Run `npm run seed` to update

**Current Skills Categories:**
- Frontend: React, Next.js, JavaScript, TypeScript, Tailwind CSS, Redux
- Backend: Node.js, Express, REST APIs, GraphQL
- Database: MongoDB, PostgreSQL, Redis
- Tools: Git, Docker, VS Code, HTML5, CSS3

---

## 🔒 Security Tips

1. **Change Admin Password:**
   - Create a new admin endpoint to update password
   - Use a strong password

2. **Update .env:**
   ```
   JWT_SECRET=your-super-secret-key-here
   MONGO_URI=your-mongodb-connection-string
   ```

3. **Image Uploads:**
   - Currently supports URL-based images
   - For local uploads, images are saved in `server/uploads/`
   - Make sure to add proper validation

---

## 🚀 Current Status

- ✅ Admin user created
- ✅ Skills database populated (18 skills)
- ✅ Projects database cleared (ready for your content)
- ✅ Contact form working
- ✅ Dark/Light mode enabled
- ✅ Responsive design ready
- ✅ All API endpoints working

---

## 📱 Next Steps

1. Login to admin panel
2. Add your real projects
3. Update home page with your name and info
4. Add your profile photo
5. Update social media links
6. Test all features
7. Deploy to production!

---

**Your portfolio is now ready for original content! 🎉**

**Start here:** http://localhost:5173/admin/login
