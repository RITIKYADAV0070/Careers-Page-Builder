"use client";

import { companies, pages } from "../../../lib/data";
import { useState } from "react";
import { notFound } from "next/navigation";

export default function Edit({ params }: any) {
  const company = companies[params.company];
  const page = pages[params.company];
  if (!company || !page) return notFound();

  const [brandColor, setBrandColor] = useState(company.brandColor);
  const [sections, setSections] = useState(page.sections);

  function moveUp(index: number) {
    if (index === 0) return;
    const updated = [...sections];
    [updated[index - 1], updated[index]] = [
      updated[index],
      updated[index - 1],
    ];
    setSections(updated);
  }

  function remove(index: number) {
    setSections(sections.filter((_, i) => i !== index));
  }

  function addSection() {
    setSections([
      ...sections,
      {
        id: Date.now(),
        title: "New Section",
        content: "",
      },
    ]);
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <h1 className="text-4xl font-bold">Careers Page Settings</h1>
      <p className="text-slate-500">
        Customize your employer brand and story.
      </p>

      {/* BRAND */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-2">
        <label className="text-sm font-medium">Brand Color</label>
        <input
          type="color"
          value={brandColor}
          onChange={(e) => setBrandColor(e.target.value)}
        />
      </div>

      {/* SECTIONS */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Content Sections</h2>

        {sections.map((section, index) => (
          <div
            key={section.id}
            className="bg-white rounded-xl shadow p-5 space-y-3"
          >
            <input
              className="w-full font-semibold text-lg border rounded px-3 py-2"
              value={section.title}
              onChange={(e) => {
                const updated = [...sections];
                updated[index].title = e.target.value;
                setSections(updated);
              }}
            />

            <textarea
              className="w-full min-h-[120px] border rounded-xl p-3"
              value={section.content}
              onChange={(e) => {
                const updated = [...sections];
                updated[index].content = e.target.value;
                setSections(updated);
              }}
            />

            <div className="flex gap-3 text-sm">
              <button onClick={() => moveUp(index)}>↑ Move up</button>
              <button onClick={() => remove(index)}>🗑 Remove</button>
            </div>
          </div>
        ))}

        <button
          onClick={addSection}
          className="px-4 py-2 border rounded-lg"
        >
          + Add Section
        </button>
      </div>

      {/* PREVIEW */}
      <a
        href={`/${params.company}/preview`}
        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl"
      >
        Preview Careers Page →
      </a>

      {/* SHARE */}
      <p className="text-sm text-slate-500">
        Public link:{" "}
        <span className="font-mono">
          /{params.company}/careers
        </span>
      </p>
    </main>
  );
}
