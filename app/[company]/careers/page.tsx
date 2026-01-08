"use client";

import { companies, jobs, pages } from "@/lib/data";
import { useEffect, useMemo, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";

/* ---------------- SALARY LOGIC ---------------- */

const CURRENCY_BY_COUNTRY: Record<string, string> = {
  India: "INR",
  Germany: "EUR",
  Egypt: "EGP",
  Saudi: "SAR",
  Greece: "EUR",
  Turkey: "TRY",
  "United States": "USD",
  "United Kingdom": "GBP",
};

const SALARY_BY_TYPE: Record<string, [number, number, string]> = {
  Internship: [1000, 2000, "month"],
  Temporary: [3000, 5000, "month"],
  Permanent: [60000, 90000, "year"],
};

function getSalary(job: any) {
  const country = job.location.split(",").pop()?.trim() || "";
  const currency =
    Object.entries(CURRENCY_BY_COUNTRY).find(([k]) =>
      country.includes(k)
    )?.[1] || "USD";

  const base = SALARY_BY_TYPE[job.type];
  if (!base) return null;

  const [min, max, unit] = base;
  return `${currency}${min.toLocaleString()} – ${currency}${max.toLocaleString()} / ${unit}`;
}

/* ---------------- PAGE ---------------- */

export default function Careers({ params }: any) {
  const company = companies[params.company];
  if (!company) return notFound();

  const page = pages[params.company];
  const allJobs = jobs.filter((j: any) => j.company === params.company);

  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [activeJobId, setActiveJobId] = useState<number | null>(null);

  /* ---------------- URL DEEP LINK ---------------- */

  useEffect(() => {
    const jobRef = searchParams.get("job");
    if (jobRef) {
      const id = Number(jobRef.replace("JOB-", ""));
      setActiveJobId(id);
    }
  }, [searchParams]);

  /* ---------------- FILTER ---------------- */

  const filteredJobs = useMemo(() => {
    return allJobs.filter(
      (j: any) =>
        `${j.type} ${j.location}`
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        (type ? j.type === type : true) &&
        (location ? j.location === location : true)
    );
  }, [allJobs, search, type, location]);

  /* ---------------- SEO STRUCTURED DATA ---------------- */

  const structuredData = filteredJobs.map((job: any) => {
    const salary = getSalary(job);
    return {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: `${job.type} Opportunity`,
      employmentType: job.type,
      hiringOrganization: {
        "@type": "Organization",
        name: company.name,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: job.location,
        },
      },
      ...(salary && {
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: salary.slice(0, 3),
        },
      }),
    };
  });

  return (
    <main className="bg-slate-50">
      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* HERO */}
      <section
        style={{ backgroundColor: company.brandColor }}
        className="text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            Careers at {company.name}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Explore opportunities across our global teams.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">
        {page.sections.map((section: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {section.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </section>

      {/* JOBS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h3 className="text-3xl font-semibold mb-8">
            Open Roles ({filteredJobs.length})
          </h3>

          {/* FILTERS */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <input
              placeholder="Search by location or type"
              className="px-4 py-3 border rounded-xl"
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="px-4 py-3 border rounded-xl"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">All job types</option>
              {[...new Set(allJobs.map((j: any) => j.type))].map(
                (t) => (
                  <option key={t}>{t}</option>
                )
              )}
            </select>

            <select
              className="px-4 py-3 border rounded-xl"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All locations</option>
              {[...new Set(allJobs.map((j: any) => j.location))].map(
                (loc) => (
                  <option key={loc}>{loc}</option>
                )
              )}
            </select>
          </div>

          {/* JOB LIST */}
          <div className="space-y-6">
            {filteredJobs.map((job: any) => {
              const isOpen = activeJobId === job.id;
              const jobRef = `JOB-${job.id
                .toString()
                .padStart(4, "0")}`;
              const salary = getSalary(job);

              return (
                <div
                  key={job.id}
                  className="border rounded-3xl p-8 hover:shadow-md transition cursor-pointer"
                  onClick={() => {
                    const next = isOpen ? null : job.id;
                    setActiveJobId(next);
                    window.history.replaceState(
                      {},
                      "",
                      next ? `?job=${jobRef}` : "?"
                    );
                  }}
                >
                  {/* HEADER */}
                  <div className="flex justify-between items-start gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {job.type} Opportunity
                      </h4>
                      <p className="text-slate-500">
                        {company.name} · {job.location}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {jobRef}
                      </p>

                      {salary && (
                        <p className="mt-2 text-emerald-600 font-medium">
                          💰 {salary}
                        </p>
                      )}
                    </div>

                    <span
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▲
                    </span>
                  </div>

                  {/* BODY */}
                  {isOpen && (
                    <div className="mt-6 pt-6 border-t text-slate-600 space-y-5">
                      <p>
                        This role is part of our global hiring
                        initiative. More details will be shared
                        during the application process.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm">
                          {job.type}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm">
                          {job.location}
                        </span>
                        {salary && (
                          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm">
                            {salary}
                          </span>
                        )}
                      </div>

                      {/* APPLY */}
                      <button
                        className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            `/apply-redirect?company=${params.company}&job=${jobRef}`,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        Apply for this role →
                      </button>

                      <p className="text-xs text-slate-400">
                        Applications are handled via our ATS.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredJobs.length === 0 && (
              <p className="text-slate-500">
                No roles match your filters.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
