# Almousli Restaurang - Installation Instructions

## System Requirements

- Node.js 18.x or higher
- npm 9.x or higher
- Git (optional but recommended)
- Modern web browser
- Code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to Project Directory

```powershell
cd c:\Users\samij\Desktop\ALmousli
```

### 2. Install Dependencies

Install main project dependencies:

```powershell
npm install
```

Install Sanity dependencies:

```powershell
cd sanity
npm install
cd ..
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js & React Three Fiber
- next-intl
- Sanity
- And all their dependencies

**Expected time:** 3-5 minutes

### 3. Set Up Environment Variables

Copy the example environment file:

```powershell
copy .env.example .env.local
```

Open `.env.local` and update the placeholders with your actual values.

**For development, you can use these temporary values:**

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=0737330513
NEXT_PUBLIC_WHATSAPP=46737330513
NEXT_PUBLIC_SANITY_PROJECT_ID=temp_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Start Development Server

Open two terminal windows:

**Terminal 1 - Next.js:**
```powershell
npm run dev
```

**Terminal 2 - Sanity Studio (optional):**
```powershell
cd sanity
npm run dev
```

### 5. Open in Browser

- **Website:** http://localhost:3000
- **Sanity Studio:** http://localhost:3333 (if running)

You should see the website loading!

## Common Installation Issues

### Issue: "Module not found" errors

**Solution:**
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force .next
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```powershell
# Use a different port
$env:PORT=3001; npm run dev
```

### Issue: PowerShell script execution disabled

**Solution:**
```powershell
# Run PowerShell as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue: TypeScript errors

**Solution:**
TypeScript errors are expected before dependencies are installed. After running `npm install`, they should resolve.

## Next Steps

After installation:

1. **Set up Sanity (if you haven't):**
   - See QUICKSTART.md for Sanity setup
   - Or continue with temporary data

2. **Explore the website:**
   - Navigate through all pages
   - Test language switcher (Arabic/English/Swedish)
   - Check mobile responsiveness

3. **Read documentation:**
   - README.md - Full documentation
   - QUICKSTART.md - Quick start guide
   - DEPLOYMENT.md - Deployment instructions

## Verify Installation

Run these commands to verify everything is working:

```powershell
# Build the project
npm run build

# Run linter
npm run lint

# Start production mode
npm run start
```

If all commands complete without errors, your installation is successful!

## Development Commands

```powershell
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

cd sanity
npm run dev              # Start Sanity Studio
npm run build            # Build Sanity Studio
npm run deploy           # Deploy Sanity Studio
```

## Need Help?

- Check QUICKSTART.md for setup guide
- Check README.md for full documentation
- Check TROUBLESHOOTING section in README.md

---

**Installation complete!** You're ready to develop. 🚀
