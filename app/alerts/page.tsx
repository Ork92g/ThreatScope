export default function AlertsPage() {


  const alerts = [

    {
      id: "ALR-001",
      severity: "Critical",
      source: "185.89.45.22",
      technique: "T1566 - Phishing",
      actor: "APT29",
      status: "Open"
    },

    {
      id: "ALR-002",
      severity: "High",
      source: "malicious-domain.com",
      technique: "T1059 - Command Shell",
      actor: "Lazarus Group",
      status: "Investigating"
    },

    {
      id: "ALR-003",
      severity: "Medium",
      source: "8.8.8.8",
      technique: "T1078 - Valid Accounts",
      actor: "Unknown",
      status: "Closed"
    }

  ];



  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      p-10
    ">


      <h1 className="
        text-4xl
        font-bold
        text-cyan-400
      ">
        Security Alerts
      </h1>


      <p className="
        text-slate-400
        mt-3
      ">
        SOC alert monitoring and investigation center
      </p>



      <div className="
        mt-10
        overflow-x-auto
      ">


        <table className="
          w-full
          bg-slate-900
          rounded-xl
          overflow-hidden
        ">


          <thead className="bg-slate-800">


            <tr>

              <th className="p-4 text-left">
                Alert ID
              </th>

              <th className="p-4 text-left">
                Severity
              </th>

              <th className="p-4 text-left">
                Source
              </th>

              <th className="p-4 text-left">
                MITRE Technique
              </th>

              <th className="p-4 text-left">
                Threat Actor
              </th>

              <th className="p-4 text-left">
                Status
              </th>


            </tr>


          </thead>



          <tbody>


            {alerts.map((alert)=>(


              <tr
                key={alert.id}
                className="
                  border-t
                  border-slate-700
                "
              >


                <td className="p-4">
                  {alert.id}
                </td>


                <td className="
                  p-4
                  text-red-400
                  font-bold
                ">
                  {alert.severity}
                </td>


                <td className="p-4">
                  {alert.source}
                </td>


                <td className="p-4">
                  {alert.technique}
                </td>


                <td className="p-4">
                  {alert.actor}
                </td>


                <td className="
                  p-4
                  text-cyan-400
                ">
                  {alert.status}
                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>


    </main>

  );

}