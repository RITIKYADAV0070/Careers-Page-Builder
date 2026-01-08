import { companies } from "../../lib/data";
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Recruiter Dashboard
          </h1>
          <p className="text-slate-500">
            Manage your company careers pages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(companies).map(([slug, company]: any) => (
            <div
              key={slug}
              className="bg-white rounded-2xl shadow p-6 space-y-4"
            >
              <h2 className="text-xl font-semibold">
                {company.name}
              </h2>

              <p className="text-sm text-slate-500">
                Public careers page and customization settings
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`/${slug}/edit`}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
                >
                  Edit Page
                </a>

                <a
                  href={`/${slug}/preview`}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Preview
                </a>

                <a
                  href={`/${slug}/careers`}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  View Public
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
