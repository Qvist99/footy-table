import { NextRequest, NextResponse } from "next/server";

import { Fixture, FixturesResponse } from "@/lib/types";
import fixturesJson from "@/static_data/fixtures.json";

// Not used, only for learning purposes
export async function GET(req: NextRequest, {params}: {params: Promise<{round: string}>}) {

    const { round } = await params

    const fixtures: FixturesResponse = fixturesJson;

    const matches = fixtures.data.matchesForLeague.matches.filter(match => match.round.toString() === round);

    return NextResponse.json({ matches });


}



