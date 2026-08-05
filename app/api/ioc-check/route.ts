import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const indicator = body.indicator;


  const database: Record<string, any> = {

    "185.89.45.22": {
      type: "IPv4",
      reputation: 92,
      risk: "HIGH",
      country: "Russia",
      threatActor: "APT29",
      malware: "SUNBURST"
    },

    "malicious-domain.com": {
      type: "Domain",
      reputation: 87,
      risk: "HIGH",
      country: "North Korea",
      threatActor: "Lazarus Group",
      malware: "AppleJeus"
    },

    "8.8.8.8": {
      type: "IPv4",
      reputation: 5,
      risk: "LOW",
      country: "United States",
      threatActor: "None",
      malware: "None"
    }

  };


  const result = database[indicator] || {

    type: "Unknown",
    reputation: 0,
    risk: "UNKNOWN",
    country: "Unknown",
    threatActor: "Unknown",
    malware: "Unknown"

  };


  return NextResponse.json({

    indicator,
    ...result

  });

}