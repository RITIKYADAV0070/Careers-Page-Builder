# 🚀 Careers Page Builder (ATS Prototype)

A multi-company Careers Page Builder that enables recruiters to create branded careers pages and allows candidates to browse open roles through a clean, mobile-first interface.

This project focuses on **career page customization and job discovery**, which are core responsibilities of an ATS platform.

---

## 🧠 Problem Statement

Companies using an ATS need careers pages that:
- Match their brand identity
- Tell their company story
- Make it easy for candidates to discover open roles (especially on mobile)

Recruiters should be able to build these pages easily, while candidates should have a simple, accessible browsing experience.

---

## 👥 Users & Flows

### Recruiter
- Logs in
- Customizes company brand (color, content)
- Edits careers page sections
- Previews the careers page
- Shares a public careers page link

### Candidate
- Visits a public careers page
- Learns about the company
- Browses open jobs
- Filters jobs by location and job type
- Expands job details
- Clicks **Apply**, which redirects to the company’s ATS

> ⚠️ Job application submission is intentionally excluded.  
> In real systems, applications are handled by external ATS tools (Ashby, Greenhouse, Lever, etc.).

---

## 🌐 Routes

| Route | Description |
|------|------------|
| `/login` | Recruiter login (demo) |
| `/dashboard` | Recruiter landing page |
| `/[company]/edit` | Recruiter careers page editor |
| `/[company]/preview` | Preview careers page |
| `/[company]/careers` | Public careers page |
| `/apply-redirect` | External ATS redirect |

---

## ✨ Features

### Recruiter Features
- Brand customization (company color)
- Editable content sections (About, Life at Company, etc.)
- Careers page preview before publishing
- Company-scoped data separation
- Shareable public careers link

### Candidate Features
- Branded careers page per company
- Job listings with:
  - Location filter
  - Job type filter
  - Search
- Expandable job cards
- Mobile-first responsive UI
- Accessible layout (clear spacing, contrast, hierarchy)

### SEO Considerations
- Crawlable HTML
- Semantic structure
- Job listing structured data intent

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data:** JSON-based mock data
- **Routing:** Dynamic company-based routing
- **Deployment:** Vercel-ready

---

## 🧩 Data Model (Simplified)

- **companies**
  - name
  - brandColor
- **pages**
  - company-specific content sections
- **jobs**
  - company
  - location
  - job type

Each company’s data is stored and rendered independently, simulating a multi-tenant ATS.

---

## 🚫 Out of Scope (Intentional)

- Job application form
- Resume uploads
- Real authentication providers
- Backend persistence (database)

---

## 🚀 How to Run Locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

---

Built for the **Whitecarrot – Careers Page Builder assignment**.
