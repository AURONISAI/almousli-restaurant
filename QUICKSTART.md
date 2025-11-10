# Quick Start Guide - Almousli Restaurang

Get the Almousli website up and running in 15 minutes!

## ⚡ Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git (optional)

## 🚀 Quick Installation

### 1. Install Dependencies (2 minutes)

```bash
# Install main project dependencies
npm install

# Install Sanity dependencies
cd sanity
npm install
cd ..
```

### 2. Set Up Environment (3 minutes)

Copy the environment example file:

```bash
copy .env.example .env.local
```

**For quick testing, use these values:**

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=0737330513
NEXT_PUBLIC_WHATSAPP=46737330513
NEXT_PUBLIC_SANITY_PROJECT_ID=temp_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

> **Note:** You'll need real Sanity credentials for full functionality. See [Sanity Setup](#sanity-setup) below.

### 3. Run Development Server (1 minute)

```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2: Start Sanity Studio (optional for now)
cd sanity
npm run dev
```

### 4. Open Browser

- **Website:** http://localhost:3000
- **Sanity Studio:** http://localhost:3333 (if running)

You should see the website with sample data!

---

## 🎨 Sanity Setup (5 minutes)

For full CMS functionality, set up Sanity:

### Step 1: Create Sanity Account

1. Go to https://www.sanity.io
2. Sign up for free
3. Confirm your email

### Step 2: Initialize Sanity

```bash
cd sanity

# Login to Sanity
npx sanity login

# Initialize project
npx sanity init

# Choose:
# - Create new project
# - Project name: "Almousli Restaurang"
# - Dataset: "production"
# - Use existing schema: Yes
```

### Step 3: Update Configuration

The CLI will update your config files automatically. Copy the Project ID and update `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
```

### Step 4: Start Sanity Studio

```bash
npm run dev
```

Visit http://localhost:3333 to access the CMS!

---

## 📝 Add Sample Content (5 minutes)

### Quick Content Setup

1. **Access Sanity Studio:** http://localhost:3333

2. **Create Settings:**
   - Click "Settings" (if not created)
   - Add basic site information
   - Click "Publish"

3. **Create a Category:**
   - Click "Menu Category"
   - Title (English): "Shawarma"
   - Title (Arabic): "شاورما"
   - Title (Swedish): "Shawarma"
   - Order: 1
   - Click "Publish"

4. **Create a Menu Item:**
   - Click "Menu Item"
   - Title (English): "Chicken Shawarma"
   - Title (Arabic): "شاورما دجاج"
   - Title (Swedish): "Kycklingsshawarma"
   - Category: Select "Shawarma"
   - Price: 85
   - Halal: Yes
   - Featured: Yes
   - Order: 1
   - Click "Publish"

5. **Refresh Website**
   - Your menu item should appear on the site!

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start Next.js dev server
npm run sanity          # Start Sanity Studio
npm run build           # Build for production
npm run start           # Start production server

# Deployment
vercel                  # Deploy to Vercel
npm run sanity:deploy   # Deploy Sanity Studio

# Utilities
npm run lint            # Run linter
```

---

## 📁 Project Structure Overview

```
almousli/
├── src/
│   ├── app/[locale]/      # Pages (Home, Menu, Order, etc.)
│   ├── components/        # Reusable components
│   ├── lib/              # Utilities and Sanity client
│   └── i18n/             # Internationalization
├── messages/             # Translations (ar, en, sv)
├── sanity/              # Sanity CMS configuration
├── public/              # Static assets
└── package.json
```

---

## 🌐 Available Pages

After starting the dev server:

- **Home:** http://localhost:3000/ar
- **Menu:** http://localhost:3000/ar/menu
- **Order:** http://localhost:3000/ar/order
- **Catering:** http://localhost:3000/ar/catering
- **Gallery:** http://localhost:3000/ar/gallery
- **Find Us:** http://localhost:3000/ar/find-us

**Switch Languages:**
- Arabic: /ar/...
- English: /en/...
- Swedish: /sv/...

---

## 🎯 Next Steps

1. **Populate Content:**
   - See [DATA_ENTRY_CHECKLIST.md](./DATA_ENTRY_CHECKLIST.md)
   - Add menu items, categories, and gallery images

2. **Customize Design:**
   - Colors: `tailwind.config.ts`
   - Fonts: `src/app/[locale]/layout.tsx`
   - Global styles: `src/app/globals.css`

3. **Configure Delivery Links:**
   - Update in Sanity Studio > Settings
   - Or directly in components/DeliveryPartners.tsx

4. **Deploy:**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md)
   - Deploy to Vercel in minutes

---

## 🆘 Troubleshooting

### "Module not found" errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Port already in use

```bash
# Use different port
PORT=3001 npm run dev
```

### Sanity connection issues

1. Verify Project ID in `.env.local`
2. Check internet connection
3. Try `npx sanity login` again

### TypeScript errors

These are expected before installing dependencies. Run:
```bash
npm install
```

---

## 📚 Learn More

- **Full Documentation:** [README.md](./README.md)
- **Deployment Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Content Guide:** [DATA_ENTRY_CHECKLIST.md](./DATA_ENTRY_CHECKLIST.md)

---

## 🎉 You're Ready!

The website is now running locally. Add content via Sanity Studio and see it appear instantly on the website.

**Happy coding!** 🍽️

---

## 📞 Need Help?

- **Documentation:** Check README.md
- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs

Restaurant Contact: 0737330513
