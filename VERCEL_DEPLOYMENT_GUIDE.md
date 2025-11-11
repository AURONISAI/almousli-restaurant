# Almousli Restaurant Vercel Deployment Guide

This document outlines the steps taken to resolve a persistent 404 error on Vercel for a Next.js 14 application using `next-intl` for internationalization.

## The Problem: 404 Errors on Vercel

Despite working perfectly locally, the deployed Vercel site consistently returned 404 errors for all routes. The root cause was a misconfiguration between Next.js, `next-intl`, and Vercel's deployment environment.

The key issue was that the `next-intl` middleware, which handles locale-based routing, was not executing correctly on Vercel's infrastructure. This resulted in Vercel being unable to find the requested pages, leading to the 404 errors.

## The Solution: Correct Middleware Configuration

The fix involved ensuring the `next-intl` middleware was correctly configured to handle all relevant routes. Here’s a step-by-step guide to the solution:

### 1. Revert to a Known Good State

We started by reverting the project to a previous commit (`1213c08`) where the site was known to be functional, even if behind password protection. This provided a stable base to work from.

### 2. Correct the Middleware `matcher`

The most critical change was updating the `matcher` in `src/middleware.ts`. The original matcher was too broad and was likely being bypassed by Vercel's routing.

The corrected `matcher` ensures that the middleware intercepts all relevant requests, allowing `next-intl` to handle the locale routing correctly.

**`src/middleware.ts`:**
```typescript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ar', 'en', 'sv'],
  defaultLocale: 'ar',
  localePrefix: 'as-needed'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
```

This configuration tells the middleware to run on all paths *except* for API routes, static files, images, and the favicon. This is the recommended configuration for `next-intl` with Next.js App Router.

### 3. Clean and Redeploy

After correcting the middleware, we performed a clean build and redeployed to Vercel:

```bash
npm run build
npx vercel --prod
```

This ensured that the latest changes were correctly built and deployed to production.

## Key Takeaways

- **Middleware is Crucial for i18n Routing:** When using a library like `next-intl`, the middleware is the backbone of your routing. If it's not configured correctly for your deployment environment, your site will not work.
- **Vercel and `next-intl` require a specific `matcher`:** The `matcher` configuration is not just for Next.js, but also for Vercel's infrastructure. Using the recommended `matcher` from the `next-intl` documentation is essential.
- **404s can be a routing issue, not a missing page:** The 404 errors were not because the pages didn't exist, but because the routing logic to get to them was failing.

By following these steps, we were able to resolve the 404 errors and get the site working correctly on Vercel with full internationalization support.
