# Tech Spec – Careers Page Builder

## 1. Overview
This project is a multi-tenant Careers Page Builder for an ATS platform.

## 2. Assumptions
- Each company has a unique slug
- Authentication is mocked
- Applications redirect externally
- JSON used as mock persistence

## 3. Architecture
- Next.js 14 (App Router)
- Tailwind CSS
- Deployed on Vercel

## 4. Data Model
Company, Page Sections, Jobs

## 5. Recruiter Flow
Login → Edit → Preview → Share

## 6. Candidate Flow
Browse → Filter → View → Apply

## 7. SEO
- Server-rendered HTML
- Schema.org JobPosting

## 8. Testing
Manual UI and build validation

## 9. Scalability
Replace JSON with DB, add auth and caching
