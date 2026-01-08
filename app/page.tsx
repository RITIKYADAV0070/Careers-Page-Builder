export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-12 text-center animate-fade-in">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Careers Page Builder
        </h1>

        <p className="text-slate-600 text-lg mb-10">
          Create beautiful, branded careers pages that candidates love.
        </p>

        <div className="space-y-4">
          <a
            href="/login"
            className="block w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-medium
                       hover:bg-indigo-700 hover:scale-[1.02] transition-all duration-300"
          >
            Recruiter Login
          </a>

          <a
            href="/sample-company/careers"
            className="block w-full bg-white border border-slate-300 py-4 rounded-xl text-lg
                       hover:bg-slate-100 transition-all duration-300"
          >
            View Careers Page
          </a>
        </div>
      </div>
    </main>
  );
}
