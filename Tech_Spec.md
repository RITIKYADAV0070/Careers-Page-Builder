# Tech Spec – Careers Page Builder

## 1. Overview

This project is a Careers Page Builder built for an ATS-style platform.
The goal was to allow recruiters to create branded Careers pages for their companies,
while enabling candidates to easily explore open job roles.

The focus of the implementation was on:
- Recruiter customization
- Candidate discoverability
- Mobile-first UX
- SEO readiness
- Production-aware design choices

---

## 2. Assumptions

To deliver a realistic MVP within the assignment timeline, the following assumptions were made:

- Each company is uniquely identified by a company slug
- Authentication is mocked and assumed to be handled by the ATS in production
- Job application flows are external and out of scope
- Data persistence is simulated using static JSON files
- Only job discovery and browsing are required for candidates

These assumptions helped keep the scope focused while still reflecting real-world ATS behavior.

---

## 3. Architecture

The application is built using **Next.js 14 with the App Router**.

### Why Next.js?
- Enables server-rendered pages for SEO and crawlability
- Clean file-based routing that maps well to product flows
- Matches how modern production ATS platforms are structured

### High-Level Structure
- Recruiter-facing routes:
  - `/login`
  - `/:company/edit`
  - `/:company/preview`
- Candidate-facing routes:
  - `/:company/careers`

Static JSON files act as a mock data layer, allowing easy replacement with a database later.

---

## 4. Data Model

### Company
- name
- slug
- brand color
- salary visibility flag

### Page Sections
- title
- content
- display order

### Jobs
- id
- company slug
- job type
- location

This data model keeps company configuration, content, and jobs clearly separated.

---

## 5. User Flows

### Recruiter Flow
1. Login (mocked)
2. Customize brand and page content
3. Preview Careers page
4. Share public Careers link

### Candidate Flow
1. Visit public Careers page
2. Learn about the company
3. Browse and filter job listings
4. Expand job details
5. Apply via external redirect

---

## 6. SEO & Accessibility

SEO and accessibility were considered core requirements:

- Server-rendered HTML for crawlability
- Schema.org `JobPosting` structured data for job listings
- Keyboard-accessible interactions
- Mobile-first, responsive layout

---

## 7. Testing Plan

Testing was performed manually:

- Verified recruiter edit and preview flows
- Tested job filtering by type and location
- Validated expand/collapse job interactions
- Checked mobile responsiveness
- Verified production build and deployment on Vercel

---

## 8. Scalability Considerations

If extended further, the system could scale by:

- Replacing JSON with a database (Supabase/Postgres)
- Adding authentication and role-based access
- Introducing caching or ISR for performance
- Adding analytics for recruiter insights

---

## 9. Conclusion

This project demonstrates a production-aware MVP that balances usability,
clarity, and extensibility while staying aligned with the assignment scope.
