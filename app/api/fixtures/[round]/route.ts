import { NextRequest, NextResponse } from "next/server";

import { Fixture, FixturesResponse } from "@/lib/types";

// not being used 
export async function GET(req: NextRequest, {params}: {params: Promise<{round: string}>}) {

    const { round } = await params

    const fixturesJson: FixturesResponse = require("@/static_data/fixtures.json");

    const matches = fixturesJson.data.matchesForLeague.matches.filter(match => match.round.toString() === round);

    return NextResponse.json({ matches });


}



