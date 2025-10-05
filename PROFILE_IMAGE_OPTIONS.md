# Profile Image Options - Different People

## 🎯 Quick Change Guide

To change the profile image, edit `client/src/pages/Home.jsx` at **line 164**.

---

## 👨‍💼 Professional Male Developers

### Option 1: Young Professional (Current)
```jsx
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Professional headshot, friendly smile, casual business

### Option 2: Experienced Developer
```jsx
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Mature professional, confident, business casual

### Option 3: Casual Tech Professional
```jsx
src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Casual, modern, friendly vibe

### Option 4: Corporate Developer
```jsx
src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Professional suit, corporate environment

### Option 5: Modern Tech Lead
```jsx
src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Contemporary, innovative, startup vibe

---

## 👩‍💼 Professional Female Developers

### Option 1: Professional Portrait
```jsx
src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Professional, confident, modern

### Option 2: Tech Professional
```jsx
src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Coding environment, tech-focused

### Option 3: Business Professional
```jsx
src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Corporate, professional headshot

### Option 4: Creative Developer
```jsx
src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Creative, modern, approachable

### Option 5: Young Professional
```jsx
src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=faces"
```
**Style:** Fresh, energetic, professional

---

## 🎨 Diverse Professional Options

### Option 1: Diverse Professional 1
```jsx
src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&h=1000&fit=crop&crop=faces"
```

### Option 2: Diverse Professional 2
```jsx
src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&h=1000&fit=crop&crop=faces"
```

### Option 3: Diverse Professional 3
```jsx
src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&h=1000&fit=crop&crop=faces"
```

---

## 🔧 How to Change

1. Open `client/src/pages/Home.jsx`
2. Go to **line 164**
3. Replace the entire `src` value with one of the options above
4. Save the file
5. The page will auto-refresh with the new image!

**Example:**
```jsx
// FROM:
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop&crop=faces"

// TO:
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop&crop=faces"
```

---

## 💡 Pro Tips

1. **Keep the parameters:**
   - `w=800&h=1000` - Image dimensions
   - `fit=crop` - Crops to exact size
   - `crop=faces` - AI focuses on face

2. **Adjust positioning if needed:**
   Change `objectPosition` at line 167:
   ```jsx
   style={{ objectPosition: 'center 20%' }}  // Current
   style={{ objectPosition: 'center 15%' }}  // Show more hair
   style={{ objectPosition: 'center 25%' }}  // Show more body
   ```

3. **Use your own photo:**
   ```jsx
   src="/images/your-photo.jpg"
   ```

---

## 🎯 Current Selection

**Currently using:** Option 1 - Young Professional Male Developer
- Professional headshot
- Friendly and approachable
- Modern tech professional vibe

**To preview different options, just paste the URL and save!**

---

## 📱 Test Your Choice

After changing:
1. Save the file
2. Go to http://localhost:5173
3. Check how it looks on:
   - Desktop
   - Tablet
   - Mobile
4. Verify full face is visible
5. Ensure it matches your portfolio tone

---

**Choose the image that best represents your professional brand! 📸**
