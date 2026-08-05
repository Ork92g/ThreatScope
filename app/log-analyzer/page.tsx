"use client";

import { useState } from "react";

const logs = [
  {
    eventId: "4625",
    title: "Failed Logon Attempt",
    user: "administrator",
    computer: "DC01",
    sourceIp: "185.89.45.22",
    severity: "HIGH",
    time: "2026-08-05 21:30",
  },
  {
    eventId: "4688",
    title: "Suspicious Process Creation",
    user: "john.doe",
    computer: "WORKSTATION-01",
    sourceIp: "10.0.0.25",
    severity: "MEDIUM",
    time: "2026-08-05 20:15",
  },
  {
    eventId: "7045",
    title: "New Service Created",
    user: "SYSTEM",
    computer: "SERVER01",
    sourceIp: "192.168.1.15",
    severity: "HIGH",
    time: "2026-08-05 19:42",
  },
];

export default function LogAnalyzer() {
  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter((log) =>
    `${log.eventId} ${log.user} ${log.sourceIp}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400">
        Log Analyzer
      </h1>

      <p className="text-gray-400 mt-2">
        Windows Security Event Investigation
      </p>

      <input
        className="mt-8 w-full max-w-xl bg-slate-900 border border-slate-700 rounded-lg p-4"
        placeholder="Search Event ID / User / IP"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-8 space-y-6">

        {filteredLogs.map((log) => (

          <div
            key={log.eventId}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6"
          >

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Event ID: {log.eventId}
              </h2>

              <span className="bg-red-600 px-4 py-2 rounded-lg font-bold">
                {log.severity}
              </span>

            </div>

            <div className="mt-5 space-y-2">

              <p>
                <b>Detection:</b> {log.title}
              </p>

              <p>
                <b>User:</b> {log.user}
              </p>

              <p>
                <b>Computer:</b> {log.computer}
              </p>

              <p>
                <b>Source IP:</b> {log.sourceIp}
              </p>

              <p>
                <b>Timestamp:</b> {log.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}