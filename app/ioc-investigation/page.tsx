"use client";

import { useState } from "react";


export default function IOCInvestigation() {


  const [indicator, setIndicator] = useState("");

  const [result, setResult] = useState<any>(null);

  const [loading, setLoading] = useState(false);



  async function searchIOC() {


    setLoading(true);


    const response = await fetch("/api/ioc-check", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        indicator

      })

    });


    const data = await response.json();


    setResult(data);

    setLoading(false);

  }



  return (

    <main className="min-h-screen bg-black text-white p-10">


      <h1 className="text-4xl font-bold text-cyan-400">

        IOC Investigation

      </h1>


      <p className="text-gray-400 mt-2">

        Indicator of Compromise Analysis

      </p>



      <div className="mt-8 flex gap-3">


        <input

          className="bg-slate-900 border border-slate-700 rounded-lg p-4 w-full max-w-xl"

          placeholder="Enter IP or Domain"

          value={indicator}

          onChange={(e)=>setIndicator(e.target.value)}

        />



        <button

          onClick={searchIOC}

          className="bg-cyan-600 px-6 rounded-lg font-bold"

        >

          {loading ? "Scanning..." : "Search"}

        </button>


      </div>




      {result && (

        <div className="mt-8 bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-xl">


          <h2 className="text-2xl font-bold">

            {result.indicator}

          </h2>



          <div className="mt-5 space-y-3">


            <p>
              <b>Type:</b> {result.type}
            </p>


            <p>
              <b>Reputation:</b> {result.reputation}/100
            </p>


            <p>
              <b>Risk:</b> {result.risk}
            </p>


            <p>
              <b>Country:</b> {result.country}
            </p>


            <p>
              <b>Threat Actor:</b> {result.threatActor}
            </p>


            <p>
              <b>Malware:</b> {result.malware}
            </p>


          </div>


        </div>

      )}



    </main>

  );

}