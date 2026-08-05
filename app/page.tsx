import Header from "./components/Header";
import ThreatSearch from "./components/ThreatSearch";
import ThreatCard from "./components/ThreatCard";
import { threatActors } from "./data/threat-actors";


export default function Home() {


  const actors = Object.values(threatActors);


  const totalMalware = actors.reduce(
    (sum, actor) => sum + actor.malware.length,
    0
  );


  const totalIocs = actors.reduce(
    (sum, actor) => sum + actor.iocs.length,
    0
  );


  const totalTechniques = actors.reduce(
    (sum, actor) => sum + actor.techniques.length,
    0
  );


  const criticalThreats = actors.filter(
    actor =>
      actor.risk === "Critical" ||
      actor.risk === "High"
  ).length;



  return (

    <main className="
      min-h-screen
      bg-black
      text-white
    ">


      <Header />


      <section className="p-10">


        <div className="mb-10">


          <h2 className="
            text-4xl
            font-bold
          ">
            Threat Intelligence Center
          </h2>


          <p className="
            mt-3
            text-slate-400
          ">
            SOC monitoring platform for threat actors, malware campaigns, IOC investigation and MITRE ATT&CK analysis.
          </p>


        </div>



        <div className="
          grid
          md:grid-cols-4
          gap-6
          mb-10
        ">



          <DashboardCard
            title="Threat Actors"
            value={actors.length}
            color="text-cyan-400"
          />


          <DashboardCard
            title="Critical Threats"
            value={criticalThreats}
            color="text-red-400"
          />


          <DashboardCard
            title="Malware Families"
            value={totalMalware}
            color="text-orange-400"
          />


          <DashboardCard
            title="Tracked IOCs"
            value={totalIocs}
            color="text-yellow-400"
          />


        </div>



        <div className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          p-6
          mb-10
        ">


          <h2 className="
            text-2xl
            font-bold
            text-cyan-400
          ">
            Intelligence Overview
          </h2>


          <div className="mt-5 grid md:grid-cols-3 gap-4">


            <p>
              MITRE Techniques:
              <b className="ml-2">
                {totalTechniques}
              </b>
            </p>


            <p>
              Active Campaigns:
              <b className="ml-2">
                {actors.length}
              </b>
            </p>


            <p>
              Risk Monitoring:
              <b className="ml-2 text-red-400">
                Enabled
              </b>
            </p>


          </div>


        </div>



        <ThreatSearch />



        <h2 className="
          text-3xl
          font-bold
          mt-12
          mb-6
        ">
          Threat Actor Database
        </h2>



        <div className="
          grid
          md:grid-cols-3
          gap-6
        ">


          {actors.map((actor)=>(

            <ThreatCard

              key={actor.name}

              {...actor}

            />

          ))}


        </div>



      </section>


    </main>

  );

}



function DashboardCard({
  title,
  value,
  color
}: {
  title:string;
  value:number;
  color:string;
}) {


  return (

    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-xl
      p-6
    ">

      <p className="text-slate-400">
        {title}
      </p>


      <h3 className={`
        text-4xl
        font-bold
        ${color}
      `}>
        {value}
      </h3>


    </div>

  );

}