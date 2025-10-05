# How to Add Your Profile Image

## Option 1: Use Your Own Image (Recommended)

### Step 1: Add Your Image
1. Add your profile photo to `client/public/images/`
2. Name it something like `profile.jpg` or `profile.png`
3. Recommended size: 600x600px (square) or 600x800px (portrait)

### Step 2: Update Home.jsx

Open `client/src/pages/Home.jsx` and find line 138:

**Change from:**
```jsx
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
```

**Change to:**
```jsx
src="/images/profile.jpg"
```

### Step 3: Update Alt Text

Also update the alt text on line 139 to your name:

```jsx
alt="Your Name - Full Stack Developer"
```

---

## Option 2: Use a Different Unsplash Image

You can browse professional photos on [Unsplash](https://unsplash.com/) and use their URL directly.

### Find an Image:
1. Go to https://unsplash.com/s/photos/developer
2. Find a photo you like
3. Right-click → Copy Image Address
4. Replace the URL in line 138 of `Home.jsx`

### Example Unsplash URLs:

**Professional Developer Photos:**
```jsx
// Male developer with laptop
src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&h=600&fit=crop"

// Female developer coding
src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"

// Casual developer portrait
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"

// Professional headshot
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop"
```

---

## Option 3: Use Your GitHub/LinkedIn Avatar

If you have a professional photo on GitHub or LinkedIn:

1. Open your GitHub/LinkedIn profile
2. Right-click your profile picture → Copy Image Address
3. Use that URL in `Home.jsx`

---

## Customizing the Image Style

You can adjust the image appearance by modifying these classes in `Home.jsx`:

### Make it circular:
```jsx
className="w-full h-full object-cover rounded-full"
```

### Adjust height:
```jsx
className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
```

### Remove gradient overlay:
Comment out or delete lines 133-134:
```jsx
{/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10"></div> */}
```

---

## Tips for Best Results

✅ **Image Quality:**
- Use high-resolution images (at least 600px wide)
- PNG or JPG format
- Professional lighting and background

✅ **Image Optimization:**
- Compress images before uploading (use https://tinypng.com/)
- Keep file size under 500KB for fast loading

✅ **Profile Photo Ideas:**
- Professional headshot with solid background
- Coding at your workspace
- Presenting or teaching
- Casual but professional portrait

---

## Current Image Location

The image is currently set in:
- **File:** `client/src/pages/Home.jsx`
- **Line:** 138
- **Current URL:** Unsplash placeholder image

Replace it with your own photo to personalize your portfolio! 📸
