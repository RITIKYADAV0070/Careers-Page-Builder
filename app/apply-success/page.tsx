export default function ApplySuccess({
  searchParams,
}: {
  searchParams: { company?: string; job?: string };
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-3">
          Application flow handled externally
        </h1>
        <p className="text-slate-600">
          In production, this would redirect to the company’s ATS.
        </p>
      </div>
    </main>
  );
}
