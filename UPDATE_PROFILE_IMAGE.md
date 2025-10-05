# Update Your Profile Image - Quick Guide

## 🖼️ Current Status
The profile image has been optimized with better positioning to show the full face and hair properly.

---

## 🚀 Option 1: Use Your Own Photo (Recommended)

### Step 1: Prepare Your Image
- **Size**: 800x1000px (portrait) or larger
- **Format**: JPG or PNG
- **Quality**: High resolution, good lighting
- **Composition**: Headshot or upper body, centered

### Step 2: Add Your Photo
1. Create the folder if it doesn't exist:
   ```bash
   mkdir -p client/public/images
   ```

2. Add your photo:
   - Copy your image to `client/public/images/`
   - Name it `profile.jpg` or `profile.png`

### Step 3: Update Home.jsx
Open `client/src/pages/Home.jsx` and find **line 138**:

**Change from:**
```jsx
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces"
```

**Change to:**
```jsx
src="/images/profile.jpg"
```

Also update **line 139** with your name:
```jsx
alt="Your Name - Full Stack Developer"
```

---

## 🎨 Option 2: Use a Better Unsplash Image

Browse professional developer photos and pick one that shows the full face properly:

### Professional Developer Photos:

```jsx
// Professional male developer - full face visible
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=faces"

// Professional female developer - full face visible
src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&crop=faces"

// Casual professional portrait
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop&crop=faces"

// Young professional headshot
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces"
```

---

## 🔧 Advanced: Adjust Image Position

If the face is still cut off, you can adjust the positioning in `Home.jsx` at **line 141**:

### Move image up (to show more hair):
```jsx
style={{ objectPosition: 'center 15%' }}
```

### Move image down (to show more body):
```jsx
style={{ objectPosition: 'center 30%' }}
```

### Center perfectly:
```jsx
style={{ objectPosition: 'center center' }}
```

---

## 📝 Current Image Settings (line 137-142):

```jsx
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces"
  alt="John Doe - Full Stack Developer"
  className="w-full h-full object-cover object-center"
  style={{ objectPosition: 'center 20%' }}
/>
```

**What each parameter does:**
- `w=800&h=1000` - Image dimensions
- `fit=crop` - Crops to exact size
- `crop=faces` - AI crops to focus on face
- `objectPosition: 'center 20%'` - Positions image (20% from top)

---

## ✅ Tips for Best Results

1. **Image Quality**
   - Use high-resolution photos (at least 800px wide)
   - Good lighting (natural light preferred)
   - Clear background or professional setting

2. **Composition**
   - Face should be clearly visible
   - Include head and some shoulders
   - Leave some space above the head
   - Center the face in the frame

3. **File Size**
   - Compress images before uploading
   - Use https://tinypng.com/ or similar
   - Keep under 500KB for fast loading

4. **Professional Look**
   - Solid color or blurred background
   - Professional attire (if desired)
   - Confident, friendly expression
   - Good posture

---

## 🎯 Quick Test Checklist

After updating your image, check:
- [ ] Full face visible (including hair)
- [ ] No parts cut off
- [ ] Centered properly
- [ ] Clear and high quality
- [ ] Loads quickly
- [ ] Looks good on mobile and desktop

---

## 🐛 Troubleshooting

**Image is blurry:**
- Use a higher resolution source image

**Face is cut off:**
- Adjust `objectPosition` value
- Try different crop values (15%, 20%, 25%)

**Image won't load:**
- Check file path is correct
- Ensure image is in `client/public/images/`
- Clear browser cache and refresh

**Image is too large (slow loading):**
- Compress the image
- Reduce dimensions to max 1200x1500px

---

Your portfolio now has a properly positioned profile image! 📸
