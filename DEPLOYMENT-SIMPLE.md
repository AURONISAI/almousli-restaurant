# Almousli Restaurant - Deployment Guide

## For One.com or Similar Node.js Hosting

### Prerequisites
- Node.js 18.x or higher installed on server
- SSH access to your hosting

### Quick Deployment (Using build-and-pack.ps1)

Run the PowerShell script:
```powershell
.\build-and-pack.ps1
```

This will:
1. Clean previous builds
2. Install dependencies
3. Build production version
4. Create `almousli-production.zip` with all necessary files

### Manual Deployment Steps

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Files to upload to server:**
   - `.next/` folder (entire build output)
   - `public/` folder (images, fonts, static files)
   - `node_modules/` folder (or run `npm install --production` on server)
   - `package.json`
   - `package-lock.json`
   - `next.config.mjs`
   - `.env.local` (with your production environment variables)

3. **On the server, run:**
   ```bash
   npm install --production
   npm run start
   ```

4. **Or use PM2 for process management:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "almousli" -- start
   pm2 save
   pm2 startup
   ```

### Environment Variables
Create `.env.local` on the server with:
```
NEXT_PUBLIC_PHONE=0737330513
NEXT_PUBLIC_HERO_VIDEO=/videos/hero-background.mp4
NEXT_PUBLIC_SITE_URL=https://almousli.se
# Add other production URLs as needed
```

### Important Notes
- The app runs on port 3000 by default
- Configure your hosting to proxy requests to this port
- For one.com: Use their Node.js app configuration panel
- Make sure to set the correct domain in metadata files

### Performance Optimizations Applied
- Removed heavy 3D scene (Scene3D) for faster load times
- Enabled SWC minification
- Console logs removed in production
- React strict mode enabled

### Performance Tips
- Gzip/Brotli compression should be enabled
- Use CDN for static assets if available
- Keep node_modules updated
- Monitor with Vercel Analytics or similar

### Folder Structure After Deployment
```
almousli/
├── .next/              (Build output - required)
├── public/             (Static files - required)
├── node_modules/       (Dependencies - required)
├── package.json        (required)
├── package-lock.json   (required)
├── next.config.mjs     (required)
├── .env.local          (required - environment variables)
└── start.sh            (optional - startup script)
```

### Troubleshooting
- If build fails, clear `.next` folder and rebuild
- Check Node.js version (must be 18+)
- Verify all environment variables are set
- Check server logs for errors
