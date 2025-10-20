# DataVruti Website Revamp (Next.js Project)

## 📌 Overview
DataVruti (https://www.datavruti.com) is a **hiring and recruitment agency** focused on data, analytics, and technology talent.  
This project revamps the current site into a **modern, SEO-optimized, and conversion-driven** website using **Next.js**.

The new site will:
- Align with the target audience (businesses hiring data talent)
- Include case studies and testimonials
- Be optimized for SEO & ChatGPT discovery
- Drive candidate sign-ups and client inquiries

---

## 🎯 Goals
1. **Customer Alignment**  
   Clearly target companies and startups looking to hire data professionals.  
   Tone: professional, confident, and approachable.

2. **Credibility & Proof**  
   Add sections for **case studies**, **testimonials**, and **client logos**.

3. **SEO & Discoverability**  
   Ensure DataVruti ranks for:  
   - “Data hiring agency”  
   - “Hire data engineers”  
   - “AI recruitment partner”  
   Include local GEO keywords (e.g. “Data hiring agency in India”).

4. **Conversion Focus**  
   Prominent CTAs for:
   - “Hire Talent” (for clients)
   - “Join as Candidate” (for job seekers)

---

## 🧱 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Forms:** Formspree / Next.js API Route
- **Analytics:** Google Analytics + Search Console
- **SEO:** next-seo, sitemap.xml, robots.txt
- **Optional CMS:** Sanity / Contentful / Markdown files

---

## 📁 Folder Structure
datavruti/
│
├── app/
│ ├── page.tsx # Home
│ ├── about/page.tsx
│ ├── services/
│ │ ├── page.tsx
│ │ ├── data-engineers.tsx
│ │ ├── data-scientists.tsx
│ │ └── analytics-consulting.tsx
│ ├── case-studies/page.tsx
│ ├── candidates/page.tsx
│ ├── contact/page.tsx
│ └── api/contact/route.ts # API route for form submission
│
├── components/
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ ├── Hero.tsx
│ ├── CTAButton.tsx
│ ├── ServiceCard.tsx
│ ├── TestimonialCard.tsx
│ ├── CaseStudyCard.tsx
│ └── ContactForm.tsx
│
├── content/
│ ├── services.json
│ ├── testimonials.json
│ ├── case-studies.json
│ └── about.json
│
├── public/
│ ├── images/
│ │ ├── logo.png
│ │ ├── hero.jpg
│ │ ├── team/
│ │ └── clients/
│ └── favicon.ico
│
├── styles/globals.css
├── utils/seo-config.ts
├── next-seo.config.js
├── package.json
└── README.md

yaml
Copy code

---

## 🧠 Design System
**Look & Feel**
- Minimal, modern, clean.
- Plenty of white space.
- Professional and trustworthy vibe.

**Colors**
- Base: White / Neutral Gray
- Accent: Blue or Indigo (modern tech tone)
- Text: Dark Gray / Black

**Typography**
- Font: Inter / Poppins / Lato
- Consistent heading hierarchy (H1 → H6)

**Imagery**
- Real workplace or professional photos.
- Abstract visuals for data & analytics.

---

## 🗺️ Sitemap / Pages

### 1. Home
- Hero section: tagline, short intro, CTA buttons.
- Who We Are summary.
- Services preview (cards).
- Testimonials slider.
- CTA banner (“Hire Talent / Join as Candidate”).
- Footer with contact + social.

### 2. About
- Company story & mission.
- Values and vision.
- Photos / leadership section.

### 3. Services
- Hire Data Engineers  
- Hire Data Scientists  
- Hire Analytics Consultants  
Each service with short description and benefits.

### 4. Case Studies
- 3–5 case studies with client name, challenge, and result.

### 5. Candidates
- Why join DataVruti.
- Simple registration form (name, email, skills, resume upload).

### 6. Contact
- Form for business inquiries.
- Email, phone, and office address.

---

## ✍️ Content Strategy
Use and adapt existing website content for:
- About Us
- Services
- Contact info
- Taglines / Descriptions

Add new content for:
- Testimonials
- Case Studies
- Candidate sign-up section

### Example CTA Copy
> “Connecting companies with top data talent — fast.”  
> “Join our network of exceptional data professionals.”  

---

## 🔍 SEO Setup
- Use **next-seo** for meta titles/descriptions.
- Include OG/Twitter meta tags.
- Generate sitemap.xml & robots.txt.
- Use semantic HTML (H1, H2, etc.).
- Add JSON-LD schema:
  - Organization
  - LocalBusiness
  - JobPosting (optional)

Example config:
```ts
// utils/seo-config.ts
export const defaultSEO = {
  title: "DataVruti | Hire Data & Analytics Talent",
  description: "Leading recruitment agency connecting businesses with data, analytics, and AI professionals.",
  openGraph: {
    type: "website",
    url: "https://www.datavruti.com",
    site_name: "DataVruti",
  },
};