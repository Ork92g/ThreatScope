"use client";

import { useState } from "react";

const iocs = [
  {
    indicator: "185.89.45.22",
    type: "IPv4",
    reputation: 92,
    risk: "HIGH",
    country: "Russia",
    actor: "APT29",
    malware: "SUNBURST",
  },
  {
    indicator: "malicious-domain.com",
    type: "Domain",
    reputation: 87,
    risk: "HIGH",
    country: "North Korea",
    actor: "Lazarus Group",
    malware: "AppleJeus",
  },
  {
    indicator: "8.8.8.8",
    type: "IPv4",
    reputation: 5,
    risk: "LOW",
    country: "United States",
    actor: "None",
    malware: "None",
  },
];

export default function IOCInvestigation() {

  const [search, setSearch] = useState("");

  const result = iocs.find((ioc) =>
    ioc.indicator.toLowerCase() === search.toLowerCase()
  );


  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400">
        IOC Investigation
      </h1>

      <p className="text-gray-400 mt-2">
        Indicator of Compromise Analysis
      </p>


      <input

        className="mt-8 w-full max-w-xl bg-slate-900 border border-slate-700 rounded-lg p-4"

        placeholder="Search IP / Domain"

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

      />


      {
        result && (

          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-xl">

            <h2 className="text-2xl font-bold">
              {result.indicator}
            </h2>


            <div className="mt-5 space-y-3">

              <p>
                <b>Type:</b> {result.type}
              </p>

              <p>
                <b>Reputation Score:</b> {result.reputation}/100
              </p>

              <p>
                <b>Risk:</b> {result.risk}
              </p>

              <p>
                <b>Country:</b> {result.country}
              </p>

              <p>
                <b>Threat Actor:</b> {result.actor}
              </p>

              <p>
                <b>Malware:</b> {result.malware}
              </p>

            </div>

          </div>

        )
      }


    </main>
  );
}