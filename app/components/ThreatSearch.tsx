"use client";

import { useState } from "react";
import { threatActors } from "../data/threat-actors";


export default function ThreatSearch(){

const [search,setSearch]=useState("");
const [found,setFound]=useState<any>(null);



function handleSearch(){

const query = search.toLowerCase().trim();


let result = null;



Object.values(threatActors).forEach((actor)=>{


if(

actor.name.toLowerCase() === query ||

actor.aliases.some(
(alias)=>alias.toLowerCase() === query
)

||

actor.iocs.some(
(ioc)=>ioc.toLowerCase() === query
)


){

result = actor;

}


});


setFound(result);


}





return (

<div className="bg-slate-900 p-6 rounded-xl">


<h2 className="text-2xl text-cyan-400 font-bold">

Threat Actor Search

</h2>



<input

className="mt-5 w-full bg-slate-800 p-3 rounded"

placeholder="Search IOC / Threat Actor..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter"){
handleSearch();
}

}}

/>



<button

onClick={handleSearch}

className="mt-4 bg-cyan-600 px-5 py-2 rounded font-bold"

>

Search

</button>





{
found &&

<div className="mt-5 bg-slate-800 p-5 rounded">


<h3 className="text-xl font-bold text-red-400">

{found.name}

</h3>



<p className="mt-3">

Risk:
{" "}
{found.risk}

</p>



<p>

Origin:
{" "}
{found.origin}

</p>



<p className="mt-3">

Malware:

{" "}
{found.malware.join(", ")}

</p>



<p className="mt-3">

MITRE:

{" "}
{found.techniques.join(", ")}

</p>



<p className="mt-3">

IOC:

{" "}
{found.iocs.join(", ")}

</p>



<p className="mt-3">

{found.description}

</p>



</div>

}




{
search && !found &&

<div className="mt-5 bg-slate-800 p-4 rounded text-gray-400">

No threat intelligence found.

</div>

}




</div>


);


}