# Almousli Restaurant Website - Production Package

## ✅ What's Included

This package contains everything needed to deploy the Almousli Restaurant website:

- ✓ Built Next.js production files (`.next/`)
- ✓ Static assets (images, fonts, patterns) (`public/`)
- ✓ Configuration files
- ✓ Start scripts for Linux and Windows
- ✓ Deployment instructions

## 🚀 Quick Start (On Your Server)

### Step 1: Upload and Extract
```bash
# Upload almousli-production.zip to your server
# Extract it
unzip almousli-production.zip
cd almousli-production
```

### Step 2: Install Dependencies
```bash
npm install --production
```

### Step 3: Start the Application
```bash
# Option A: Direct start
npm start

# Option B: With PM2 (recommended for production)
npm install -g pm2
pm2 start npm --name "almousli" -- start
pm2 save
pm2 startup
```

The website will run on **port 3000** by default.

## 🔧 Configuration

### Environment Variables
Create or edit `.env.local`:
```
NEXT_PUBLIC_PHONE=0737330513
NEXT_PUBLIC_HERO_VIDEO=/videos/hero-background.mp4
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Port Configuration
To change the port, edit `package.json`:
```json
"scripts": {
  "start": "next start -p 8080"
}
```

## 📦 What's Fixed

### Performance Improvements
- ✓ Removed heavy 3D scene (Scene3D) for faster loading
- ✓ Enabled SWC minification
- ✓ Console logs removed in production
- ✓ Optimized bundle size: ~87kB shared JS

### Bug Fixes
- ✓ Fixed Navigation header not clickable
- ✓ Added About Us page with Navigation/Footer
- ✓ Fixed duplicate @id in StructuredData
- ✓ Removed React hooks error in server components
- ✓ Fixed framer-motion module issues

### Features Added
- ✓ All navigation buttons working
- ✓ About Us link added to navigation (Arabic: من نحن, English: About Us, Swedish: Om Oss)
- ✓ Complete menu page with 13 dishes in 3 languages
- ✓ Legendary About Us page with Damascus styling
- ✓ All pages have professional Damascus-themed content

## 📄 Pages Included

All pages in 3 languages (Arabic, English, Swedish):

1. **Home** (`/`) - Hero, signature dishes, delivery partners
2. **Menu** (`/menu`) - 4 categories, 13 dishes, all halal
3. **About Us** (`/about`) - Story, values, chef bio
4. **Order** (`/order`) - Order via Wolt, Foodora, phone
5. **Catering** (`/catering`) - Catering services
6. **Gallery** (`/gallery`) - Photo gallery
7. **Find Us** (`/find-us`) - Location and contact

## 🌐 For One.com Hosting

1. Upload files via FTP or cPanel File Manager
2. In cPanel, go to "Node.js App"
3. Set:
   - Application Root: `/path/to/your/folder`
   - Application URL: your domain
   - Application Startup File: `node_modules/next/dist/bin/next`
   - Arguments: `start`
4. Click "Restart"

## 📊 Build Information

- Build Date: November 6, 2025
- Next.js Version: 14.2.3
- Package Size: 11.75 MB (without node_modules)
- Total Routes: 26 (9 pages × 3 languages)
- First Load JS: 86.9 kB shared
- Middleware Size: 50.1 kB

## 🆘 Troubleshooting

### Site won't start
- Check Node.js version: `node --version` (must be 18+)
- Run: `npm install --production`
- Check logs: `npm start` or `pm2 logs almousli`

### Port already in use
- Change port in package.json or use: `PORT=8080 npm start`

### Images not loading
- Verify `public/` folder was uploaded
- Check file permissions

### Slow performance
- Enable gzip/brotli compression on your server
- Use a CDN for static assets
- Ensure Node.js process has enough memory

## 📞 Support

For technical issues, refer to `DEPLOYMENT.md` included in this package.

---

**Built with Damascus soul ✦**
