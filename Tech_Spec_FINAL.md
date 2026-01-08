# Tech Spec – Careers Page Builder

## 1. Overview
This project is a Careers Page Builder designed for an ATS platform.
It enables recruiters to configure branded Careers pages and candidates to browse open roles.

## 2. Assumptions
- Unique company slug
- Mocked authentication
- External application flow
- JSON-based mock persistence

## 3. Architecture
- Next.js 14 (App Router)
- Tailwind CSS
- Vercel deployment

## 4. Data Model
Company, Page Sections, Jobs

## 5. Recruiter Flow
Login → Edit → Preview → Share

## 6. Candidate Flow
Browse → Filter → View → Apply

## 7. SEO & Accessibility
Server-rendered HTML, JobPosting schema, mobile-first layout

## 8. Testing
Manual UI and build testing

## 9. Scalability
Database, auth, caching, analytics
