# 🚀 Full-Stack Portfolio Website - MERN Stack

A modern, dynamic portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring admin panel, dark/light mode, smooth animations, and fully responsive design.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#️-configuration)
- [Database Setup](#️-database-setup)
- [Email Configuration](#-email-configuration)
- [Running the Application](#-running-the-application)
- [Admin Panel](#-admin-panel)
- [How to Add Projects](#-how-to-add-projects)
- [Customization](#-customization)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

### 🎨 Frontend Features
- ✅ Modern, responsive UI with Tailwind CSS & Shadcn UI components
- ✅ Dark/Light mode toggle with persistent theme (localStorage)
- ✅ Smooth page transitions and animations with Framer Motion
- ✅ Dynamic routing with React Router v6
- ✅ Project filtering by category (Frontend, Backend, Fullstack, Mobile)
- ✅ Skills display grouped by category with progress bars
- ✅ Contact form with validation and toast notifications
- ✅ Mobile-first responsive design
- ✅ Download CV/Resume button
- ✅ SEO optimized
- ✅ Scroll to top on route change

### 🔧 Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ JWT authentication with bcryptjs password hashing
- ✅ Image upload support with Multer
- ✅ Email integration with Nodemailer
- ✅ CORS enabled for cross-origin requests
- ✅ Environment variables with dotenv
- ✅ Error handling middleware
- ✅ Protected routes with JWT middleware
- ✅ Database seeding script

### 👨‍💼 Admin Panel Features
- ✅ Secure admin authentication with JWT
- ✅ Add/Edit/Delete projects dynamically
- ✅ Manage skills by category
- ✅ View contact form submissions
- ✅ Image upload for projects
- ✅ Featured project toggle
- ✅ Project ordering
- ✅ Protected dashboard routes

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Description |
|------------|---------|-------------|
| **React** | 18.x | UI Library |
| **Vite** | 5.x | Build tool & dev server |
| **Redux Toolkit** | 2.x | State management |
| **RTK Query** | - | Data fetching & caching |
| **React Router** | 6.x | Client-side routing |
| **Tailwind CSS** | 3.4.0 | Utility-first CSS |
| **Shadcn UI** | - | Component library |
| **Framer Motion** | 11.x | Animation library |
| **React Hot Toast** | 2.x | Toast notifications |
| **React Icons** | 5.x | Icon library |

### Backend
| Technology | Version | Description |
|------------|---------|-------------|
| **Node.js** | 18+ | JavaScript runtime |
| **Express.js** | 4.x | Web framework |
| **MongoDB** | 6+ | NoSQL database |
| **Mongoose** | 8.x | MongoDB ODM |
| **JWT** | 9.x | JSON Web Tokens |
| **Bcryptjs** | 2.x | Password hashing |
| **Multer** | 1.x | File upload handling |
| **Nodemailer** | 6.x | Email service |
| **CORS** | 2.x | Cross-origin requests |
| **Dotenv** | 16.x | Environment variables |

---

## 📁 Project Structure

```
portfolio/
│
├── client/                          # Frontend (React + Vite)
│   ├── public/
│   │   ├── images/                 # Static images folder
│   │   └── resume.pdf              # Your resume/CV
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx     # Navigation bar
│   │   │   │   └── Footer.jsx     # Footer component
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx     # Button component
│   │   │   │   ├── Card.jsx       # Card component
│   │   │   │   ├── Input.jsx      # Input component
│   │   │   │   └── Textarea.jsx   # Textarea component
│   │   │   └── ScrollToTop.jsx    # Scroll to top on route change
│   │   │
│   │   ├── features/
│   │   │   ├── api/
│   │   │   │   ├── apiSlice.js    # RTK Query base
│   │   │   │   ├── authApi.js     # Auth endpoints
│   │   │   │   ├── projectsApi.js # Projects endpoints
│   │   │   │   ├── skillsApi.js   # Skills endpoints
│   │   │   │   └── contactApi.js  # Contact endpoints
│   │   │   ├── auth/
│   │   │   │   └── authSlice.js   # Auth state
│   │   │   └── theme/
│   │   │       └── ThemeProvider.jsx # Dark/Light mode
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Home page
│   │   │   ├── Skills.jsx         # Skills page
│   │   │   ├── Projects.jsx       # Projects page
│   │   │   ├── Contact.jsx        # Contact page
│   │   │   └── admin/
│   │   │       ├── Login.jsx      # Admin login
│   │   │       └── Dashboard.jsx  # Admin dashboard
│   │   │
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # Entry point
│   │   ├── store.js               # Redux store
│   │   └── index.css              # Global styles
│   │
│   ├── .env                        # Environment variables
│   ├── package.json
│   ├── vite.config.js             # Vite configuration
│   ├── tailwind.config.js         # Tailwind CSS config
│   └── postcss.config.js          # PostCSS config
│
├── server/                         # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   │
│   ├── controllers/
│   │   ├── authController.js      # Auth logic
│   │   ├── projectController.js   # Projects CRUD
│   │   ├── skillController.js     # Skills CRUD
│   │   └── contactController.js   # Contact form logic
│   │
│   ├── models/
│   │   ├── Admin.js               # Admin model
│   │   ├── Project.js             # Project model
│   │   ├── Skill.js               # Skill model
│   │   └── Contact.js             # Contact model
│   │
│   ├── routes/
│   │   ├── authRoutes.js          # Auth routes
│   │   ├── projectRoutes.js       # Project routes
│   │   ├── skillRoutes.js         # Skill routes
│   │   └── contactRoutes.js       # Contact routes
│   │
│   ├── middleware/
│   │   └── auth.js                # JWT authentication middleware
│   │
│   ├── util/
│   │   └── email.js               # Email utility (Nodemailer)
│   │
│   ├── uploads/                   # Uploaded images folder
│   │
│   ├── .env                       # Environment variables
│   ├── index.js                   # Server entry point
│   ├── seed.js                    # Database seeding script
│   └── package.json
│
├── HOW_TO_ADD_PROJECTS.md         # Project guide
├── PERSONALIZE_PORTFOLIO.md       # Customization guide
├── SETUP_COMPLETE.md              # Setup summary
├── PROFILE_IMAGE_OPTIONS.md       # Profile image guide
├── UPDATE_PROFILE_IMAGE.md        # Image update guide
└── README.md                      # This file
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)
- **npm** or **yarn** (comes with Node.js)
- **Code Editor** (VS Code recommended) - [Download](https://code.visualstudio.com/)

### Step-by-Step Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

#### Step 2: Install Backend Dependencies

```bash
cd server
npm install
```

**Installed packages:**
- express
- mongoose
- dotenv
- cors
- bcryptjs
- jsonwebtoken
- multer
- nodemailer

#### Step 3: Install Frontend Dependencies

```bash
cd ../client
npm install
```

**Installed packages:**
- react
- react-dom
- react-router-dom
- @reduxjs/toolkit
- react-redux
- framer-motion
- react-hot-toast
- react-icons
- tailwindcss
- and more...

---

## ⚙️ Configuration

### Backend Environment Variables

1. **Create `.env` file in `server/` folder:**

```bash
cd server
touch .env
```

2. **Add the following configuration:**

```env
# ===================================
# SERVER CONFIGURATION
# ===================================
NODE_ENV=development
PORT=5000

# ===================================
# DATABASE CONFIGURATION
# ===================================
# For Local MongoDB:
MONGO_URI=mongodb://localhost:27017/portfolio

# For MongoDB Atlas (Cloud):
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# ===================================
# JWT CONFIGURATION
# ===================================
# Generate a random secret key (change this!)
JWT_SECRET=your_super_secret_jwt_key_change_this_to_random_string

# ===================================
# EMAIL CONFIGURATION (Gmail)
# ===================================
FROM_EMAIL=your-email@gmail.com
FROM_PASS=your-16-character-app-password

# ===================================
# CLIENT CONFIGURATION
# ===================================
CLIENT_URL=http://localhost:5173
```

### Frontend Environment Variables

1. **Create `.env` file in `client/` folder:**

```bash
cd client
touch .env
```

2. **Add the following:**

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
```

---

## 🗄️ Database Setup

### Option 1: Local MongoDB

#### Install MongoDB Locally

**For macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
```

**For Ubuntu/Linux:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

**For Windows:**
- Download installer from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
- Run installer and follow instructions
- Start MongoDB as a service

#### Configure Local MongoDB

Update `server/.env`:
```env
MONGO_URI=mongodb://localhost:27017/portfolio
```

### Option 2: MongoDB Atlas (Cloud - Recommended)

#### 1. Create MongoDB Atlas Account

- Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Click "Try Free" and create account
- Verify email

#### 2. Create a Cluster

- Click "Build a Database"
- Choose "FREE" tier (M0)
- Select your region
- Click "Create Cluster"
- Wait 3-5 minutes for cluster creation

#### 3. Create Database User

- Click "Database Access" (left sidebar)
- Click "Add New Database User"
- Choose "Password" authentication
- Username: `portfolioAdmin`
- Password: Generate a secure password (save it!)
- Database User Privileges: "Atlas admin"
- Click "Add User"

#### 4. Whitelist IP Address

- Click "Network Access" (left sidebar)
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (for development)
- Click "Confirm"

**⚠️ Note:** For production, add specific IP addresses only.

#### 5. Get Connection String

- Click "Database" (left sidebar)
- Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string
- It looks like: `mongodb+srv://portfolioAdmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

#### 6. Update `.env` File

Replace `<password>` with your database user password:

```env
MONGO_URI=mongodb+srv://portfolioAdmin:YourPassword123@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## 📧 Email Configuration

### Setup Gmail for Contact Form

#### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click "2-Step Verification"
3. Follow the setup process
4. Enable 2FA

#### Step 2: Generate App Password

1. Visit [App Passwords](https://myaccount.google.com/apppasswords)
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
4. Enter name: **Portfolio Contact Form**
5. Click "Generate"
6. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)
7. Save this password - you won't see it again!

#### Step 3: Update `.env` File

```env
FROM_EMAIL=youremail@gmail.com
FROM_PASS=abcdefghijklmnop
```

**⚠️ Important:**
- Remove spaces from app password
- Don't use your Gmail account password
- Use the 16-character app password only

#### Alternative Email Providers

**For Outlook/Hotmail:**
```env
FROM_EMAIL=youremail@outlook.com
FROM_PASS=your_password
```

Update `server/util/email.js`:
```javascript
service: 'hotmail' // instead of 'gmail'
```

---

## 🎯 Running the Application

### Step 1: Seed the Database

**⚠️ IMPORTANT:** Run this first to create admin user and initial data.

```bash
cd server
npm run seed
```

**Expected Output:**
```
[dotenv@17.2.3] injecting env (12) from .env
✅ MongoDB Connected
🗑️  Clearing existing data...
🌱 Creating admin user...
✅ Admin user created
📧 Email: admin@portfolio.com
🔑 Password: admin123
🌱 Seeding skills...
✅ 18 skills created
🌱 Seeding projects...
✅ 0 projects created

✅ Database seeded successfully!
🚀 Login at: http://localhost:5173/admin/login
📧 Email: admin@portfolio.com
🔑 Password: admin123
```

**⚠️ Save These Credentials:**
- **Email:** `admin@portfolio.com`
- **Password:** `admin123`

### Step 2: Start Backend Server

```bash
cd server
npm run dev
```

**Expected Output:**
```
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server running on port 5000
✅ MongoDB Connected Successfully
```

**Backend is now running at:** `http://localhost:5000`

### Step 3: Start Frontend (New Terminal)

Open a **NEW terminal window** and run:

```bash
cd client
npm run dev
```

**Expected Output:**
```
VITE v5.x.x  ready in 1234 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**Frontend is now running at:** `http://localhost:5173`

### Step 4: Access the Application

Open your browser and visit:

| Page | URL |
|------|-----|
| **Home Page** | http://localhost:5173 |
| **Skills Page** | http://localhost:5173/skills |
| **Projects Page** | http://localhost:5173/projects |
| **Contact Page** | http://localhost:5173/contact |
| **Admin Login** | http://localhost:5173/admin/login |
| **Admin Dashboard** | http://localhost:5173/admin/dashboard |

---

## 🔐 Admin Panel

### Admin Login Credentials

**⚠️ DEFAULT ADMIN CREDENTIALS:**

| Field | Value |
|-------|-------|
| **Email** | `admin@portfolio.com` |
| **Password** | `admin123` |
| **Login URL** | http://localhost:5173/admin/login |

### Accessing Admin Dashboard

#### Step 1: Navigate to Login Page

Open: http://localhost:5173/admin/login

#### Step 2: Enter Credentials

- Email: `admin@portfolio.com`
- Password: `admin123`

#### Step 3: Click "Sign In"

You'll be redirected to: http://localhost:5173/admin/dashboard

### Admin Dashboard Features

Once logged in, you can:

1. **Add New Projects**
   - Fill project form
   - Upload images
   - Set category
   - Mark as featured
   - Set display order

2. **Edit Existing Projects**
   - Click "Edit" on any project card
   - Update details
   - Click "Update Project"

3. **Delete Projects**
   - Click "Delete" on project card
   - Confirm deletion

4. **View Analytics**
   - Total projects count
   - Total skills count
   - Contact messages count

### 🔒 Change Admin Password (IMPORTANT!)

**Method 1: Create New Admin User via API**

```bash
# Use Postman, Insomnia, or curl
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "newadmin",
  "email": "your-email@gmail.com",
  "password": "YourStrongPassword123!"
}
```

**Method 2: Update Seed File**

Edit `server/seed.js` (lines 62-67):

```javascript
await Admin.create({
  username: 'yourusername',
  email: 'your-email@gmail.com',
  password: 'YourStrongPassword123!',
  role: 'admin'
});
```

Then run:
```bash
npm run seed
```

---

## 📝 How to Add Projects

### Method 1: Using Admin Panel (Recommended)

#### Step 1: Login to Admin Dashboard

- URL: http://localhost:5173/admin/login
- Email: `admin@portfolio.com`
- Password: `admin123`

#### Step 2: Scroll to "Add New Project" Form

#### Step 3: Fill in Project Details

| Field | Description | Example | Required |
|-------|-------------|---------|----------|
| **Title** | Project name | E-Commerce Platform | ✅ Yes |
| **Description** | Detailed description (100-500 words) | A full-featured online shopping platform with cart, checkout, and payment integration... | ✅ Yes |
| **Image URL** | Screenshot URL or path | https://images.unsplash.com/photo-id?w=500 | ✅ Yes |
| **Technologies** | Comma-separated list | React, Node.js, MongoDB, Express, Stripe | ✅ Yes |
| **Category** | Project type | `fullstack`, `frontend`, `backend`, or `mobile` | ✅ Yes |
| **GitHub URL** | Repository link | https://github.com/yourusername/project | ❌ No |
| **Live URL** | Deployed project URL | https://myproject.vercel.app | ❌ No |
| **Featured** | Highlight project | Check for yes, uncheck for no | ❌ No |
| **Order** | Display position | 1, 2, 3, 4... (lower numbers appear first) | ❌ No |

#### Step 4: Click "Add Project" Button

The project will immediately appear on the Projects page!

### Method 2: Using API (Advanced)

#### Step 1: Get Authentication Token

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@portfolio.com",
    "password": "admin123"
  }'
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

Copy the `token` value.

#### Step 2: Add Project

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "E-Commerce Platform",
    "description": "A full-featured online shopping platform...",
    "image": "https://images.unsplash.com/photo-id?w=500",
    "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
    "category": "fullstack",
    "githubUrl": "https://github.com/username/ecommerce",
    "liveUrl": "https://myecommerce.vercel.app",
    "featured": true,
    "order": 1
  }'
```

### Project Categories Explained

| Category | Description | Example Projects |
|----------|-------------|------------------|
| **fullstack** | Full-stack applications | E-Commerce, Blog Platform, Social Media App |
| **frontend** | Frontend-only projects | Weather App, Portfolio Template, Dashboard |
| **backend** | Backend/API projects | REST API, Authentication Service, Payment Gateway |
| **mobile** | Mobile applications | React Native App, Fitness Tracker, News App |

### Where to Get Project Images

#### Option 1: Use Unsplash (Free Stock Photos)

1. Visit [Unsplash](https://unsplash.com)
2. Search for relevant images
3. Click on image
4. Click "Copy image address"
5. Paste URL in Image field

**Example URL:**
```
https://images.unsplash.com/photo-1557821552-17105176677c?w=500
```

#### Option 2: Use Your Own Screenshots

1. Take screenshot of your project
2. Save as JPG or PNG
3. Place in `client/public/images/projects/`
4. Use path: `/images/projects/your-screenshot.jpg`

#### Option 3: Upload via Admin Panel (Coming Soon)

Currently supports URL-based images. Local upload feature available in code.

---

## 🎨 Customization

### 1. Update Personal Information

#### Update Your Name

**File:** `client/src/pages/Home.jsx`

```jsx
// Line 85
<span className="text-primary">Your Name</span>
```

#### Update Your Title/Role

```jsx
// Line 94
Full-Stack Developer specializing in MERN Stack
// Change to your title
```

#### Update Your Bio

```jsx
// Lines 103-104
I build modern, scalable web applications with cutting-edge technologies.
Passionate about clean code, user experience, and solving complex problems.
// Change to your bio
```

### 2. Add Your Profile Photo

**Option 1: Use Your Own Photo**

```bash
# 1. Add photo to public folder
cp /path/to/your-photo.jpg client/public/images/profile.jpg

# 2. Update Home.jsx (line 164)
src="/images/profile.jpg"
alt="Your Name - Full Stack Developer"
```

**Option 2: Use Unsplash**

See `PROFILE_IMAGE_OPTIONS.md` for 15+ professional options.

### 3. Update Social Media Links

**File:** `client/src/pages/Home.jsx` (Lines 53-56)

```jsx
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];
```

### 4. Add Your Resume/CV

```bash
# 1. Replace resume PDF
cp /path/to/your-resume.pdf client/public/resume.pdf
```

The "Download CV" button in navbar will automatically work!

### 5. Customize Skills

**File:** `server/seed.js` (Lines 18-44)

```javascript
const skills = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 95, order: 1 },
  { name: 'Next.js', category: 'frontend', proficiency: 90, order: 2 },

  // Add your skills here
  { name: 'Your Skill', category: 'backend', proficiency: 85, order: 3 },
];
```

After editing, run:
```bash
cd server
npm run seed
```

### 6. Update Footer

**File:** `client/src/components/layout/Footer.jsx`

```jsx
// Update copyright and name
© {currentYear} Your Name. Made with ❤️ using React & Node.js
```

### 7. Change Theme Colors

**File:** `client/src/index.css`

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* Customize colors */
}
```

---

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Authentication Endpoints

#### 1. Register Admin

```http
POST /api/auth/register
Content-Type: application/json

Request Body:
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "password123"
}

Response (201):
{
  "success": true,
  "message": "Admin registered successfully",
  "data": {
    "_id": "...",
    "username": "admin",
    "email": "admin@example.com",
    "role": "admin",
    "token": "eyJhbGc..."
  }
}
```

#### 2. Login

```http
POST /api/auth/login
Content-Type: application/json

Request Body:
{
  "email": "admin@portfolio.com",
  "password": "admin123"
}

Response (200):
{
  "success": true,
  "message": "Login successful",
  "data": {
    "_id": "...",
    "username": "admin",
    "email": "admin@portfolio.com",
    "role": "admin",
    "token": "eyJhbGc..."
  }
}
```

#### 3. Get Current Admin (Protected)

```http
GET /api/auth/me
Authorization: Bearer YOUR_TOKEN

Response (200):
{
  "success": true,
  "data": {
    "_id": "...",
    "username": "admin",
    "email": "admin@portfolio.com",
    "role": "admin"
  }
}
```

### Projects Endpoints

#### 1. Get All Projects

```http
GET /api/projects

Response (200):
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

#### 2. Get Single Project

```http
GET /api/projects/:id

Response (200):
{
  "success": true,
  "data": {...}
}
```

#### 3. Create Project (Protected)

```http
POST /api/projects
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

Request Body:
{
  "title": "Project Name",
  "description": "Description",
  "image": "image-url",
  "technologies": ["React", "Node.js"],
  "category": "fullstack",
  "githubUrl": "github-url",
  "liveUrl": "live-url",
  "featured": true,
  "order": 1
}

Response (201):
{
  "success": true,
  "message": "Project created successfully",
  "data": {...}
}
```

#### 4. Update Project (Protected)

```http
PUT /api/projects/:id
Authorization: Bearer YOUR_TOKEN
Content-Type: application/json

Request Body: (same as create)

Response (200):
{
  "success": true,
  "message": "Project updated successfully",
  "data": {...}
}
```

#### 5. Delete Project (Protected)

```http
DELETE /api/projects/:id
Authorization: Bearer YOUR_TOKEN

Response (200):
{
  "success": true,
  "message": "Project deleted successfully"
}
```

### Skills Endpoints

#### 1. Get All Skills

```http
GET /api/skills

Response (200):
{
  "success": true,
  "count": 18,
  "data": [...]
}
```

#### 2. Get Skills Grouped by Category

```http
GET /api/skills/grouped

Response (200):
{
  "success": true,
  "data": {
    "frontend": [...],
    "backend": [...],
    "database": [...],
    "tools": [...]
  }
}
```

### Contact Endpoints

#### 1. Send Contact Message

```http
POST /api/contact
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss..."
}

Response (201):
{
  "success": true,
  "message": "Message sent successfully"
}
```

#### 2. Get All Contacts (Protected)

```http
GET /api/contact
Authorization: Bearer YOUR_TOKEN

Response (200):
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

#### 1. Install Vercel CLI

```bash
npm install -g vercel
```

#### 2. Build Project

```bash
cd client
npm run build
```

#### 3. Deploy to Vercel

```bash
vercel
```

#### 4. Add Environment Variable

In Vercel Dashboard:
- Go to Project Settings
- Click "Environment Variables"
- Add: `VITE_API_URL` = `https://your-backend-url.com/api`

#### 5. Redeploy

```bash
vercel --prod
```

### Backend Deployment (Railway)

#### 1. Create Account

- Visit [Railway.app](https://railway.app)
- Sign up with GitHub

#### 2. Create New Project

- Click "New Project"
- Choose "Deploy from GitHub repo"
- Select your repository
- Choose `server` folder as root

#### 3. Add Environment Variables

Add all variables from `server/.env`:

```
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret
FROM_EMAIL=your_email
FROM_PASS=your_app_password
CLIENT_URL=https://your-frontend-url.vercel.app
```

#### 4. Deploy

Railway will automatically deploy your backend!

### Database (MongoDB Atlas)

Already covered in [Database Setup](#️-database-setup)

Update `MONGO_URI` in production to use MongoDB Atlas connection string.

---

## 🐛 Troubleshooting

### MongoDB Connection Error

**Error:**
```
❌ MongoDB Connection Error: connect ECONNREFUSED
```

**Solutions:**
1. Check if MongoDB is running locally: `brew services list`
2. Verify `MONGO_URI` in `.env`
3. For Atlas: Check IP whitelist in Network Access
4. Verify database user credentials

### Admin Login Not Working

**Error:**
```
{"success":false,"message":"Invalid credentials"}
```

**Solutions:**
1. Verify you ran `npm run seed`
2. Use exact credentials:
   - Email: `admin@portfolio.com`
   - Password: `admin123`
3. Clear browser cache and cookies
4. Check browser console for errors

### Email Not Sending

**Problem:** Contact form submits but no email received

**Solutions:**
1. Verify Gmail App Password (not account password)
2. Check `FROM_EMAIL` and `FROM_PASS` in `.env`
3. Ensure 2FA is enabled on Gmail
4. Check spam/junk folder
5. Verify Nodemailer configuration in `server/util/email.js`

### CORS Error

**Error:**
```
Access to fetch at 'http://localhost:5000/api/...' has been blocked by CORS policy
```

**Solutions:**
1. Verify backend is running: `http://localhost:5000`
2. Check `VITE_API_URL` in `client/.env`
3. Ensure CORS is enabled in `server/index.js`
4. Restart both servers

### Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solutions:**

**macOS/Linux:**
```bash
lsof -ti:5000 | xargs kill -9
```

**Windows:**
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Or use different port:**
```env
PORT=5001
```

### Images Not Loading

**Problem:** Project images not displaying

**Solutions:**
1. Verify image URL is accessible
2. For local images: Place in `client/public/images/`
3. Use correct path: `/images/filename.jpg`
4. Check uploads folder exists: `server/uploads/`
5. Verify Multer configuration

### Build Errors

**Error:**
```
[vite] Internal server error: Failed to resolve import
```

**Solutions:**
1. Delete `node_modules`: `rm -rf node_modules`
2. Clear cache: `npm cache clean --force`
3. Reinstall: `npm install`
4. Check imports for typos

---

## 📚 Additional Documentation

### Included Documentation Files

1. **SETUP_COMPLETE.md** - Complete setup overview and summary
2. **HOW_TO_ADD_PROJECTS.md** - Detailed guide for adding projects
3. **PERSONALIZE_PORTFOLIO.md** - Complete customization guide
4. **PROFILE_IMAGE_OPTIONS.md** - 15+ profile image options
5. **UPDATE_PROFILE_IMAGE.md** - How to change profile images

### Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Docs](https://mongoosejs.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Framer Motion](https://www.framer.com/motion/)

---

## ✅ Features Checklist

- ✅ Dynamic project management via admin panel
- ✅ JWT authentication with secure password hashing
- ✅ Dark/Light theme with localStorage persistence
- ✅ Fully responsive design (mobile/tablet/desktop)
- ✅ Contact form with email integration
- ✅ Image upload support with Multer
- ✅ Skill management by category
- ✅ Project filtering (Frontend, Backend, Fullstack, Mobile)
- ✅ Smooth animations with Framer Motion
- ✅ Toast notifications
- ✅ Resume/CV download
- ✅ SEO optimized
- ✅ Protected admin routes
- ✅ Database seeding script
- ✅ Error handling middleware
- ✅ CORS enabled
- ✅ Environment variables
- ✅ RTK Query for efficient data fetching
- ✅ Scroll to top on route change

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Your Name**
- Portfolio: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

## 🙏 Acknowledgments

- Design & Development by [MaticUI](https://maticui.com)
- UI Components by [Shadcn UI](https://ui.shadcn.com)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

## 📞 Support

For support or questions:
- Email: admin@portfolio.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/portfolio/issues)

---

## ⚡ Quick Start Summary

```bash
# 1. Clone and install
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install

# 4. Setup environment variables
# Create .env files in server/ and client/
# Copy variables from Configuration section above

# 5. Seed database (creates admin user)
cd server
npm run seed

# 6. Start backend
npm run dev

# 7. Start frontend (new terminal)
cd client
npm run dev

# 8. Access application
# Frontend: http://localhost:5173
# Admin: http://localhost:5173/admin/login
# Email: admin@portfolio.com
# Password: admin123
```

---

## 🎯 Admin Login Credentials (After Seeding)

| Field | Value |
|-------|-------|
| **Email** | `admin@portfolio.com` |
| **Password** | `admin123` |
| **Login URL** | http://localhost:5173/admin/login |

**⚠️ IMPORTANT:** Change these credentials after first login!

---

## 📊 Current Database Status

After running `npm run seed`:

- ✅ **Admin User:** 1 admin account created
- ✅ **Skills:** 18 skills seeded across 4 categories
- ✅ **Projects:** 0 projects (ready for your content)
- ✅ **Database:** Connected and ready

---

## 🎉 You're All Set!

Your portfolio is now 100% configured with **no dummy data** - ready for your original content!

**Next Steps:**
1. ✅ Login to admin panel: http://localhost:5173/admin/login
2. ✅ Add your first project
3. ✅ Customize with your information
4. ✅ Add your profile photo and resume
5. ✅ Deploy to production!

**Good luck with your portfolio! 🚀**

---

**Made with ❤️ using the MERN Stack**

**React • Node.js • Express • MongoDB • Tailwind CSS • Redux Toolkit**
