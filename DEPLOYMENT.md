# DataVruti Website - Deployment Guide

## Quick Start

### Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Build for Production
```bash
npm run build
npm start
```

## Deployment to Vercel

### Method 1: Deploy via Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

### Method 2: Deploy via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Environment Variables
Currently, no environment variables are required for basic functionality.

### Optional: Email Integration
To enable contact form email functionality, add one of these:

**Option 1: Formspree**
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `/app/api/contact/route.ts` with your Formspree endpoint

**Option 2: SendGrid**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Add to Vercel environment variables:
   ```
   SENDGRID_API_KEY=your_key_here
   ```
4. Update `/app/api/contact/route.ts` to use SendGrid

## Custom Domain
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add `www.datavruti.com`
4. Update DNS records as instructed

## SEO Configuration
1. Update `utils/seo-config.ts` with actual:
   - Social media handles
   - Contact information
   - Address details

2. Update Google Analytics:
   - Add tracking ID to `/app/layout.tsx`

3. Submit sitemap to Google Search Console:
   - URL: `https://www.datavruti.com/sitemap.xml`

## Content Updates

### Services
Edit `/content/services.json`

### Testimonials
Edit `/content/testimonials.json`

### Case Studies
Edit `/content/case-studies.json`

### About Page
Edit `/content/about.json`

## Performance Optimization
- Images: Add optimized images to `/public/images/`
- Use Next.js Image component for automatic optimization
- Enable Vercel Analytics in dashboard

## Support
For issues, check:
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
