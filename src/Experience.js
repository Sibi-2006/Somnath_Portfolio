import React from 'react';
import experiences from './data/experienceData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-3xl mx-auto p-4 text-blue-400"
    >
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>

      {experiences.map((exp) => (
        <article
          key={exp.id}
          className="mb-6 bg-blue-950/10 p-4 rounded-xl border border-blue-800 shadow-md"
        >
          <header>
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-400">
              {exp.company} — {exp.date}
            </p>
          </header>

          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
            {exp.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>

          <p className="mt-3 text-gray-400">
            <strong className="text-blue-300">Key technologies:</strong>{' '}
            {exp.technologies.join(', ')}.
          </p>
        </article>
      ))}
    </section>
  );
}
