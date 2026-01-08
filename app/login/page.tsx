export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <h1 className="text-3xl font-bold">Recruiter Login</h1>

        <p className="text-slate-500 text-sm">
          Access your company’s careers page builder and preview changes
          before publishing.
        </p>

        <a
          href="/dashboard"
          className="block w-full bg-indigo-600 text-white py-3 rounded-xl
                     hover:bg-indigo-700 transition font-medium"
        >
          Continue to Dashboard →
        </a>

        <p className="text-xs text-slate-400">
          Demo login — authentication handled by ATS in production
        </p>
      </div>
    </main>
  );
}
