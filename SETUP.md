# Portfolio Website Setup Guide

## Quick Start Checklist

- [ ] Add profile photo
- [ ] Add project GitHub URLs
- [ ] Configure AI API (optional)
- [ ] Add project screenshots (optional)
- [ ] Set up Google Analytics (optional)
- [ ] Add favicon files (optional)

---

## 1. Add Profile Photo

**Priority: HIGH**

### Current Status
The website expects a profile photo at: `img/profile.jpg`

### Steps
1. Prepare your professional photo (headshot recommended)
2. Resize to 400x400px (square) for best results
3. Save as `profile.jpg` in the `img/` directory
4. If using PNG, update line 59 in `index.html` to use `.png` extension

### Specifications
- **Format:** JPG or PNG
- **Dimensions:** 400x400px (square, will be displayed as circle)
- **File size:** < 200KB
- **File name:** `profile.jpg` or `profile.png`

---

## 2. Update Project Links

**Priority: CRITICAL**

### Current Status
All project GitHub links are currently placeholders ("#")

### Steps
1. Open `js/main.js`
2. Find the `projectsData` array (starts around line 5)
3. For each project, update the `links` object:

```javascript
links: {
    github: 'https://github.com/yourusername/project-repo', // Replace with actual URL
    demo: 'https://project-demo.com' // Add if you have a live demo, or keep as null
}
```

### Projects to Update
- YAAKE
- Over-save
- Microservices E-Commerce
- Data Validation ML System
- BookHub
- LinkedLeads Automation
- Journal System
- Housing Prices Visualization
- Crypto Price Prediction

---

## 3. Configure AI Chatbot API (Optional)

**Priority: MEDIUM**

### Current Status
- Currently using rule-based pattern matching
- API integration code is ready but disabled
- Works well without API, but real AI provides better responses

### Option A: Use OpenAI (GPT-4/GPT-3.5)

1. Get API key from https://platform.openai.com/api-keys
2. Open `js/main.js`
3. Find `AI_CONFIG` object (around line 665)
4. Update:

```javascript
const AI_CONFIG = {
    useAPI: true,  // Change from false to true
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    apiKey: 'sk-your-openai-api-key-here',
    model: 'gpt-4' // or 'gpt-3.5-turbo' for lower cost
};
```

### Option B: Use Anthropic Claude

1. Get API key from https://console.anthropic.com/
2. Update `AI_CONFIG`:

```javascript
const AI_CONFIG = {
    useAPI: true,
    apiEndpoint: 'https://api.anthropic.com/v1/messages',
    apiKey: 'sk-ant-your-claude-api-key-here',
    model: 'claude-3-opus-20240229' // or claude-3-sonnet-20240229
};
```

3. Update the `getAIResponse` function to match Claude's API format

### Option C: Backend Proxy (Recommended for Production)

For security, create a backend proxy to hide your API key:

1. Create a simple Node.js/Express backend
2. Store API key in environment variables
3. Update `apiEndpoint` to point to your backend
4. Example backend endpoint: `https://yoursite.com/api/chat`

**Note:** Keeping the API key in frontend code exposes it to users. Only do this for testing.

---

## 4. Add Project Screenshots (Optional)

**Priority: LOW**

### Current Status
Screenshots section shows "📸 Screenshots coming soon" placeholder

### Steps

1. **Prepare Screenshots**
   - Take screenshots of your projects
   - Recommended: 3-5 screenshots per project
   - Format: JPG or PNG
   - Dimensions: 1920x1080 or 1600x900 (16:9)
   - Optimize file size (< 500KB each)

2. **Organize Files**
   ```
   img/projects/
   ├── yaake/
   │   ├── screenshot-1.jpg
   │   ├── screenshot-2.jpg
   │   └── screenshot-3.jpg
   ├── oversave/
   │   └── screenshot-1.jpg
   └── ...
   ```

3. **Update JavaScript**

   In `js/main.js`, add `screenshots` array to each project:

   ```javascript
   {
       id: 'yaake',
       title: 'YAAKE - AI-Powered Career Platform',
       // ... other fields ...
       screenshots: [
           'img/projects/yaake/screenshot-1.jpg',
           'img/projects/yaake/screenshot-2.jpg',
           'img/projects/yaake/screenshot-3.jpg'
       ]
   }
   ```

4. **Update Rendering Function**

   In `createProjectCard` function, replace the placeholder:

   ```javascript
   // Replace this section:
   <div class="project-screenshots-placeholder">
       <p class="screenshot-note">📸 Screenshots coming soon</p>
   </div>

   // With:
   ${project.screenshots && project.screenshots.length > 0 ? `
       <div class="project-screenshots">
           <h4>Screenshots:</h4>
           <div class="screenshot-gallery">
               ${project.screenshots.map(img =>
                   `<img src="${img}" alt="${project.title} screenshot"
                        class="project-screenshot" loading="lazy">`
               ).join('')}
           </div>
       </div>
   ` : `
       <div class="project-screenshots-placeholder">
           <p class="screenshot-note">📸 Screenshots coming soon</p>
       </div>
   `}
   ```

5. **Add CSS for Gallery** (in `css/main.css`):

   ```css
   .project-screenshots {
       margin-top: 1.5rem;
   }

   .project-screenshots h4 {
       color: var(--primary);
       margin-bottom: 1rem;
   }

   .screenshot-gallery {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
       gap: 1rem;
   }

   .project-screenshot {
       width: 100%;
       height: auto;
       border-radius: 10px;
       border: 1px solid rgba(99, 102, 241, 0.3);
       transition: transform 0.3s ease;
       cursor: pointer;
   }

   .project-screenshot:hover {
       transform: scale(1.05);
   }
   ```

---

## 5. Update OpenGraph Images

**Priority: MEDIUM**

### Current Status
Meta tags reference `img/profile.jpg` which doesn't exist yet

### Steps

1. After adding your profile photo, the OpenGraph tags will work automatically
2. OR create a custom social media preview image:
   - Dimensions: 1200x630px
   - Save as `img/og-image.jpg`
   - Update lines 16 and 23 in `index.html` to use `og-image.jpg`

### Testing
Use these tools to preview social media cards:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## 6. Add Favicon (Optional)

**Priority: LOW**

### Generate Favicons

1. Create a square logo (512x512px recommended)
2. Use a favicon generator:
   - https://realfavicongenerator.net/
   - https://favicon.io/

3. Download the generated files

### Add to Website

1. Place files in root directory:
   - `favicon.ico`
   - `img/apple-touch-icon.png`

2. HTML already references these files (lines 26-27)

---

## 7. Add Google Analytics (Optional)

**Priority: LOW**

### Steps

1. Create Google Analytics account: https://analytics.google.com/
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to `index.html` in the `<head>` section before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 8. Testing Your Changes

### Local Testing

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Then visit: http://localhost:8000
   ```

### Test Checklist

- [ ] Profile photo displays correctly
- [ ] All 9 projects appear in Projects section
- [ ] Click "View Details" to expand project cards
- [ ] Project links work (GitHub, demo)
- [ ] AI chatbot responds to questions
- [ ] Contact form works
- [ ] Resume download button works
- [ ] Mobile menu works
- [ ] Smooth scrolling navigation works
- [ ] Check all sections on mobile (< 768px width)

### Browser Testing

Test on:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Android)

---

## 9. Deployment

### GitHub Pages (Already Configured)

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Update portfolio with new projects and features"
   git push origin main
   ```

2. Your site will be live at: `https://aryan-adhikari.github.io/`
   (It may take 1-2 minutes to update)

### Custom Domain (Optional)

1. Add `CNAME` file in root with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS records with your domain provider:
   - Type: CNAME
   - Name: www (or @)
   - Value: aryan-adhikari.github.io

---

## 10. Security Considerations

### API Keys
- **NEVER** commit real API keys to GitHub
- Use environment variables or backend proxy
- Rotate keys if accidentally exposed

### Form Spam
- Consider adding reCAPTCHA to contact form
- Formspree (current solution) has built-in spam protection

---

## Need Help?

### Resources
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **OpenAI API Docs**: https://platform.openai.com/docs
- **Claude API Docs**: https://docs.anthropic.com/

### Issues

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all file paths are correct
3. Check that JavaScript is enabled
4. Clear browser cache and reload

---

## What's Next?

After completing this setup:

1. **Content Updates**: Keep projects updated with new work
2. **Blog Section**: Consider adding a blog for technical articles
3. **Testimonials**: Add recommendations from colleagues
4. **Certifications**: Link to verified credentials
5. **Performance**: Optimize images, add lazy loading
6. **Accessibility**: Add ARIA labels, keyboard navigation

---

**Last Updated:** January 2026
**Version:** 2.0
