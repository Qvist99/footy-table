import { NextRequest, NextResponse } from "next/server";
import { FixturesResponse } from "@/lib/types";

//We will probably move this whole route in the future to a more general api route for season data
export async function GET(req: NextRequest) {
    const fixturesJson: FixturesResponse = require("@/static_data/fixtures.json");

    const matches = fixturesJson.data.matchesForLeague.matches;


    const matchesByRound = matches.reduce((acc, match) => {
        const round = match.round;
        if (!acc[round]) {
            acc[round] = [];
        }
        acc[round].push(match);
        return acc;
    }, {} as { [key: number]: typeof matches });


    // Find the first round with more than 0 upcoming matches
    // Maybe have to adjust in future as games can be postponed in a round
    // Works with the data from the json for now.
    let upcomingRound: number = Number(Object.keys(matchesByRound).find(round => {
        const roundMatches = matchesByRound[Number(round)];
        return roundMatches.some(match => match.status === "UPCOMING");
    }));

    const totalRounds = Object.keys(matchesByRound).length;

    if (!upcomingRound) {
        upcomingRound = totalRounds      
    }



    return NextResponse.json({ upcomingRound , totalRounds });

}