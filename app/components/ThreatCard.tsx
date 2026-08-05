import ThreatTimeline from "./ThreatTimeline";


interface ThreatCardProps {

  name: string;

  aliases: readonly string[];

  origin: string;

  risk: string;

  description: string;

  techniques: readonly string[];

  malware: readonly string[];

  iocs: readonly string[];

  timeline: readonly string[];

}



export default function ThreatCard({
  name,
  aliases,
  origin,
  risk,
  description,
  techniques,
  malware,
  iocs,
  timeline,
}: ThreatCardProps) {


  return (

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-xl
      p-6
    ">


      <h3 className="
        text-2xl
        font-bold
        text-cyan-400
      ">
        {name}
      </h3>


      <p className="text-slate-400 mt-2">
        {description}
      </p>


      <div className="mt-4 space-y-2">

        <p>
          <span className="text-slate-400">
            Origin:
          </span>{" "}
          {origin}
        </p>


        <p>
          <span className="text-slate-400">
            Risk:
          </span>{" "}
          <span className="text-red-400 font-bold">
            {risk}
          </span>
        </p>


        <p>
          <span className="text-slate-400">
            Aliases:
          </span>{" "}
          {aliases.join(", ")}
        </p>

      </div>



      <div className="mt-5">

        <h4 className="font-bold text-white">
          Malware
        </h4>

        <p className="text-slate-300">
          {malware.join(", ")}
        </p>

      </div>



      <div className="mt-5">

        <h4 className="font-bold text-white">
          MITRE Techniques
        </h4>

        <p className="text-slate-300">
          {techniques.join(", ")}
        </p>

      </div>



      <div className="mt-5">

        <h4 className="font-bold text-white">
          IOCs
        </h4>

        <p className="text-slate-300">
          {iocs.join(", ")}
        </p>

      </div>



      <ThreatTimeline events={timeline} />


    </div>

  );

}