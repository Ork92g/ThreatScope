export default function MitrePage() {

const techniques = [
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tactic: "Execution",
    description: "Attackers use command interpreters to execute malicious commands."
  },
  {
    id: "T1566",
    name: "Phishing",
    tactic: "Initial Access",
    description: "Adversaries use phishing techniques to gain access."
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tactic: "Defense Evasion",
    description: "Attackers abuse legitimate accounts to access systems."
  },
  {
    id: "T1486",
    name: "Data Encrypted for Impact",
    tactic: "Impact",
    description: "Attackers encrypt data to disrupt operations."
  }
];


return (

<main className="min-h-screen bg-black text-white p-10">

<h1 className="text-4xl font-bold text-cyan-400">
MITRE ATT&CK Mapping
</h1>

<p className="text-gray-400 mt-2">
Adversary Technique Investigation
</p>


<div className="grid gap-6 mt-8">


{techniques.map((tech)=>(

<div
key={tech.id}
className="bg-slate-900 border border-slate-700 rounded-xl p-6"
>

<h2 className="text-2xl font-bold">
{tech.id}
</h2>

<h3 className="text-cyan-400 text-xl">
{tech.name}
</h3>


<p className="mt-3">
<strong>Tactic:</strong> {tech.tactic}
</p>


<p className="mt-3 text-gray-300">
{tech.description}
</p>


</div>

))}


</div>

</main>

)

}