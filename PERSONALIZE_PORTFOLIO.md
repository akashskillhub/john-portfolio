# Personalize Your Portfolio

## 🎯 Files to Update with Your Information

---

## 1. Home Page - Your Details

**File:** `client/src/pages/Home.jsx`

### Update Your Name (Line 85)
```jsx
// CHANGE FROM:
<span className="text-primary">John Doe</span>

// CHANGE TO:
<span className="text-primary">Your Name</span>
```

### Update Your Title (Line 94)
```jsx
// CHANGE FROM:
Full-Stack Developer specializing in MERN Stack

// CHANGE TO:
Your Professional Title
```

### Update Your Bio (Lines 103-104)
```jsx
// CHANGE FROM:
I build modern, scalable web applications with cutting-edge technologies.
Passionate about clean code, user experience, and solving complex problems.

// CHANGE TO:
Your own bio description
Your passion and expertise
```

### Update Profile Image (Line 164)
```jsx
// CHANGE FROM:
src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=faces"
alt="John Doe - Full Stack Developer"

// CHANGE TO:
src="/images/your-photo.jpg"
alt="Your Name - Your Title"
```

**How to add your photo:**
1. Put your photo in `client/public/images/`
2. Name it `profile.jpg` or `your-photo.jpg`
3. Update the src path

---

## 2. Social Media Links

**File:** `client/src/pages/Home.jsx`

### Update Social Links (Lines 53-56)
```jsx
// CHANGE FROM:
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
];

// CHANGE TO:
const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
];
```

---

## 3. Footer Information

**File:** `client/src/components/layout/Footer.jsx`

### Update Copyright (Around Line 15)
```jsx
// CHANGE FROM:
© {currentYear} John Doe. Made with <FiHeart className="text-red-500" /> using React & Node.js

// CHANGE TO:
© {currentYear} Your Name. Made with <FiHeart className="text-red-500" /> using React & Node.js
```

---

## 4. Resume/CV Download

**File:** `client/public/resume.pdf`

1. Create your resume as PDF
2. Name it `resume.pdf`
3. Place it in `client/public/` folder
4. The download button is already linked in Navbar

**OR update the link in Navbar:**

**File:** `client/src/components/layout/Navbar.jsx`
```jsx
// Find the Download CV link and update:
href="/resume.pdf"  // Change to your resume path
```

---

## 5. Skills - Customize Your Skills

**File:** `server/seed.js`

### Update Skills Array (Lines 18-44)
```javascript
const skills = [
  // Frontend - Update with your actual skills
  { name: 'React', category: 'frontend', proficiency: 95, order: 1 },
  { name: 'Your Skill', category: 'frontend', proficiency: 85, order: 2 },

  // Add/Remove skills as needed
];
```

**After updating, run:**
```bash
npm run seed
```

---

## 6. Contact Form - Your Email

**File:** `server/.env`

### Update Email Configuration
```
FROM_EMAIL=your-email@gmail.com
FROM_PASS=your-app-password
```

**How to get Gmail App Password:**
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate password for "Mail"
4. Copy the 16-character password
5. Paste in `FROM_PASS`

---

## 7. Meta Tags & SEO (Optional)

**File:** `client/index.html`

```html
<!-- Update title -->
<title>Your Name - Portfolio</title>

<!-- Update meta description -->
<meta name="description" content="Your description here" />

<!-- Update favicon -->
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

---

## 8. What I Do Section (Optional)

**File:** `client/src/pages/Home.jsx`

### Update Features (Lines 19-50)
Customize the 6 feature cards with your specialties:
```javascript
const features = [
  {
    icon: FiCode,
    title: 'Your Specialty 1',
    description: 'Your description...',
  },
  // Update all 6 features
];
```

---

## 9. About Section Text

**File:** `client/src/pages/Home.jsx`

### Update About Section (Lines 201-207)
```jsx
// CHANGE FROM:
<h2>What I <span className="text-primary">Do</span></h2>
<p>I specialize in building high-performance, scalable web applications...</p>

// CHANGE TO:
<h2>What I <span className="text-primary">Do</span></h2>
<p>Your specialization description...</p>
```

---

## 10. Admin Credentials (Security)

**IMPORTANT:** Change default admin password!

### Method 1: Create New Admin via API
Use Postman or similar:
```
POST http://localhost:5000/api/auth/register
{
  "username": "newadmin",
  "email": "your@email.com",
  "password": "strongpassword123"
}
```

### Method 2: Update in Database
1. Login with current credentials
2. Create password change endpoint
3. Update password

---

## ✅ Quick Checklist

- [ ] Update your name
- [ ] Update your title/role
- [ ] Update bio description
- [ ] Add your profile photo
- [ ] Update social media links
- [ ] Add your resume PDF
- [ ] Update skills list
- [ ] Configure contact email
- [ ] Update footer copyright
- [ ] Change admin password
- [ ] Add your real projects via admin panel
- [ ] Update meta tags for SEO
- [ ] Test contact form
- [ ] Test on mobile/tablet
- [ ] Test dark/light mode

---

## 🚀 After Personalization

1. **Test Everything:**
   - http://localhost:5173 (Home)
   - http://localhost:5173/skills (Skills)
   - http://localhost:5173/projects (Projects)
   - http://localhost:5173/contact (Contact)
   - http://localhost:5173/admin/login (Admin)

2. **Add Real Projects:**
   - Login to admin panel
   - Add your actual projects
   - Upload project screenshots

3. **Deploy:**
   - Frontend: Vercel, Netlify, or similar
   - Backend: Railway, Render, or Heroku
   - Database: MongoDB Atlas

---

**Your portfolio will be completely personalized and ready to showcase! 🎉**

**Admin Login:** http://localhost:5173/admin/login
- Email: admin@portfolio.com
- Password: admin123
