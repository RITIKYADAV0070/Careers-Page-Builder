export default function ApplyRedirect({
  searchParams,
}: {
  searchParams: { company?: string; job?: string };
}) {
  const company = searchParams.company;
  const job = searchParams.job;

  const applyUrl = `https://apply.example-ats.com/${company}/${job}`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-3">
          Continue to application
        </h1>

        <p className="text-slate-600 mb-6">
          You’re being redirected to our Applicant Tracking System.
        </p>

        {/* ✅ NO onClick, NO JS */}
        <a
          href={applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          Continue →
        </a>

        <p className="text-xs text-slate-400 mt-4">
          Applications are managed externally via our ATS.
        </p>
      </div>
    </main>
  );
}
