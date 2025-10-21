import React from "react";

const educationData = [
  {
    id: 1,
    institution: "E.G.S. Pillay Engineering College - Nagapattinam",
    qualification: "B.E (Electrical And Electronics Engineering)",
    score: "8.8 CGPA",
    years: "2019 - 2023",
  },
  {
    id: 2,
    institution: "Kalaimahal Matriculation Higher Secondary School - Sembanarkoil",
    qualification: "HSC",
    score: "83%",
    years: "2018 - 2019",
  },
  {
    id: 3,
    institution: "Kalaimahal Matriculation Higher Secondary School - Sembanarkoil",
    qualification: "SSLC",
    score: "98%",
    years: "2016 - 2017",
  },
];

export default function Education() {
  return (
    <section id="education" className="mainframe py-8 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-mono text-green-400 font-bold text-center mb-6">
          Education
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* vertical line */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-1 bg-green-800/40 rounded" />

          <div className="space-y-6">
            {educationData.map((item, idx) => (
              <article
                key={item.id}
                className={`flex md:items-start md:pl-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
            
                <div className="flex-1 bg-black/40 border border-green-800 rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-mono text-lg font-semibold text-green-100">
                        {item.institution}
                      </h3>
                      <p className="text-sm text-green-300/90 mt-1">
                        {item.qualification}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-mono text-sm text-green-200">{item.score}</p>
                      <p className="text-xs text-green-400/80 mt-1">{item.years}</p>
                    </div>
                  </div>

                  {/* optional extra space or description */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
