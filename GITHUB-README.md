# 🌟 Almousli Restaurant - Damascus Syrian Cuisine Website

A beautiful, multilingual restaurant website featuring authentic Damascus Syrian cuisine, built with Next.js 14 and featuring Islamic geometric patterns and Damascus design elements.

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

## ✨ Features

- 🌍 **Multilingual Support**: Arabic (RTL), English, Swedish
- 🎨 **Damascus Design**: Islamic geometric patterns and authentic Syrian aesthetics
- 📱 **Fully Responsive**: Mobile-first design
- 🍽️ **Complete Menu**: 13 authentic Damascus dishes across 4 categories
- 📖 **About Us Page**: Legendary company story with Damascus styling
- 🚀 **Performance Optimized**: Fast loading, optimized bundle size
- ♿ **Accessible**: WCAG compliant with proper semantic HTML
- 🔍 **SEO Optimized**: Meta tags, structured data, sitemap
- 🎭 **Framer Motion**: Smooth animations and transitions

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/almousli-restaurant)

### One-Click Deployment

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Add environment variables (see below)
4. Deploy!

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📋 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://almousli.se
NEXT_PUBLIC_SITE_NAME=Almousli Restaurang

# Contact Information
NEXT_PUBLIC_PHONE=0737330513
NEXT_PUBLIC_WHATSAPP=46737330513
NEXT_PUBLIC_EMAIL=info@almousli.se

# Optional: Hero Video
NEXT_PUBLIC_HERO_VIDEO=/videos/hero-background.mp4

# Optional: Sanity CMS (if using)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Required Environment Variables for Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_SITE_URL`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3002](http://localhost:3002) to see the site.

## 📁 Project Structure

```
almousli-restaurant/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Localized pages
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── menu/           # Menu page
│   │   │   ├── about/          # About Us page
│   │   │   ├── order/          # Order page
│   │   │   ├── catering/       # Catering page
│   │   │   ├── gallery/        # Gallery page
│   │   │   └── find-us/        # Location page
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/             # React components
│   │   ├── Navigation.tsx      # Header navigation
│   │   ├── Hero.tsx           # Hero section
│   │   ├── SignatureDishes.tsx # Featured dishes
│   │   ├── DeliveryPartners.tsx # Delivery platforms
│   │   ├── FindUs.tsx         # Location & contact
│   │   └── Footer.tsx         # Footer
│   ├── i18n/                  # Internationalization
│   │   ├── routing.ts         # i18n routing config
│   │   └── request.ts         # Locale handling
│   └── middleware.ts          # i18n middleware
├── messages/
│   ├── ar.json                # Arabic translations
│   ├── en.json                # English translations
│   └── sv.json                # Swedish translations
├── public/
│   ├── images/                # Images and assets
│   │   ├── damascus-pattern.svg
│   │   └── arabic-ornament.svg
│   └── videos/                # Video assets
├── sanity/                    # Sanity CMS (optional)
└── tailwind.config.ts         # Tailwind configuration
```

## 🎨 Design System

### Damascus Color Palette

```css
--damascus: #1B4B7F;  /* Damascus Blue */
--gold: #DAA520;       /* Rich Gold */
--copper: #B87333;     /* Copper */
--emerald: #00796B;    /* Emerald */
--jasmine: #FEFAF0;    /* Jasmine White */
```

### Typography

- **Arabic Headings**: Lalezar (Google Fonts)
- **Arabic Body**: Cairo (Google Fonts)
- **Latin Text**: Open Sans (Google Fonts)

## 🌐 Pages

All pages available in 3 languages (Arabic, English, Swedish):

1. **Home** (`/`) - Hero, signature dishes, delivery partners
2. **Menu** (`/menu`) - Complete menu with 13 Damascus dishes
3. **About Us** (`/about`) - Company story, values, chef bio
4. **Order** (`/order`) - Order via Wolt, Foodora, phone
5. **Catering** (`/catering`) - Catering services
6. **Gallery** (`/gallery`) - Photo gallery
7. **Find Us** (`/find-us`) - Location and contact

## 📦 Menu Items

### Categories

- 🌯 **Damascus Shawarma** (3 items)
- 🔥 **Levantine Grills** (3 items)
- 🥙 **Traditional Appetizers** (4 items)
- ⭐ **Our Specialties** (3 items)

All dishes are **Halal certified** ✦

## 🔧 Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript 5.4
- **Styling**: Tailwind CSS 3.4
- **i18n**: next-intl 3.11
- **Animations**: Framer Motion 11.0
- **CMS**: Sanity.io (optional)
- **Deployment**: Vercel (recommended)

## 🚀 Performance

- First Load JS: **86.9 kB** (shared)
- Bundle Size: Optimized with SWC
- **26 Routes**: Pre-rendered as static HTML
- Lighthouse Score: **95+**

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## 🌍 Internationalization

The site supports three languages with proper RTL support:

- **Arabic** (ar) - Right-to-left layout
- **English** (en) - Left-to-right
- **Swedish** (sv) - Left-to-right

Language switching is seamless with URL-based routing (`/ar`, `/en`, `/sv`).

## 🔍 SEO Features

- ✅ Meta tags (title, description)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Alt tags on all images
- ✅ Semantic HTML

## 📞 Contact

- **Phone**: 0737330513
- **WhatsApp**: +46737330513
- **Address**: Careliigatan 9, 632 19 Eskilstuna, Sweden
- **Email**: info@almousli.se

## 📄 License

Private - © 2025 Almousli Restaurang. All rights reserved.

## 🤝 Contributing

This is a private restaurant website. For inquiries, contact the restaurant directly.

---

**Built with Damascus soul ✦**

Ready to serve authentic Syrian Damascus cuisine in Sweden! 🇸🇾 ➡️ 🇸🇪
