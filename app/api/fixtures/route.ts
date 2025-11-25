import { NextRequest, NextResponse } from "next/server";
import { FixturesResponse, LogosByAbbrvResponse, Fixture } from "@/lib/types";


export async function GET(req: NextRequest) {
    const fixturesJson: FixturesResponse = require("@/static_data/fixtures.json");

    const matches = fixturesJson.data.matchesForLeague.matches;

    const logosJson: LogosByAbbrvResponse = require("@/static_data/logos_by_abbrv.json");

    const remapedMatches: Fixture[] = matches.map(match => {
        return {
            id: match.id,
            homeTeamId: match.homeTeamFogisId,
            homeTeamAbbrv: match.homeTeamAbbrv,
            homeTeamName: match.homeTeamName,
            homeTeamScore: match.homeTeamScore,
            homeTeamLogoUrl: logosJson.data[match.homeTeamAbbrv].logoImageUrl,
            round: match.round,
            startDate: match.startDate,
            visitingTeamId: match.visitingTeamFogisId,
            visitingTeamAbbrv: match.visitingTeamAbbrv,
            visitingTeamName: match.visitingTeamName,
            visitingTeamScore: match.visitingTeamScore,
            visitingTeamLogoUrl: logosJson.data[match.visitingTeamAbbrv].logoImageUrl,
            status: match.status,
            events: []
        }
    })

    return NextResponse.json({ remapedMatches });
}