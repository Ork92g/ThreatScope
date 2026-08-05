interface ThreatTimelineProps {
  events?: readonly string[];
}

export default function ThreatTimeline({
  events = [
    "Threat intelligence data collected",
    "IOC analysis completed",
    "MITRE ATT&CK mapping updated"
  ],
}: ThreatTimelineProps) {
  return (
    <div className="mt-6">

      <h3 className="
        text-xl
        font-bold
        text-cyan-400
        mb-4
      ">
        Threat Activity Timeline
      </h3>


      <div className="space-y-3">

        {events.map((event, index) => (

          <div
            key={index}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-lg
              p-4
            "
          >

            <div className="text-sm text-slate-500">
              Event #{index + 1}
            </div>

            <div className="text-slate-200 mt-1">
              {event}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}