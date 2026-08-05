"use client";

const events = [
  {
    year: "2024",
    title: "MITRE ATT&CK techniques updated",
    severity: "MEDIUM"
  },
  {
    year: "2025",
    title: "SUNBURST malware campaign analyzed",
    severity: "HIGH"
  },
  {
    year: "2026",
    title: "New IOC discovered",
    severity: "CRITICAL"
  }
];


export default function ThreatTimeline() {


  return (

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-xl
      p-6
      mt-10
    ">


      <h2 className="
        text-2xl
        font-bold
        text-cyan-400
        mb-6
      ">
        Threat Activity Timeline
      </h2>



      <div className="space-y-4">


        {events.map((event, index)=>(


          <div
            key={index}
            className="
              bg-slate-800
              rounded-lg
              p-4
            "
          >


            <div className="flex justify-between">


              <span className="font-bold text-xl">
                {event.year}
              </span>


              <span className="
                text-red-400
                font-bold
              ">
                {event.severity}
              </span>


            </div>



            <p className="mt-2 text-slate-300">
              {event.title}
            </p>


          </div>


        ))}


      </div>


    </div>

  );

}