import { NextRequest, NextResponse } from "next/server";
import { FixturesResponse, LogosByAbbrvResponse, Fixture } from "@/lib/types";
import fixturesJson from "@/static_data/fixtures.json";
import logosJson from "@/static_data/logos_by_abbrv.json";

// Not used, only for learning purposes
export async function GET(req: NextRequest) {
    const fixtures: FixturesResponse = fixturesJson;

    const matches = fixtures.data.matchesForLeague.matches;

    const logos: LogosByAbbrvResponse = logosJson;

    const remapedMatches: Fixture[] = matches.map(match => {
        return {
            id: match.id,
            homeTeamId: match.homeTeamFogisId,
            homeTeamAbbrv: match.homeTeamAbbrv,
            homeTeamName: match.homeTeamName,
            homeTeamScore: match.homeTeamScore,
            homeTeamLogoUrl: logos.data[match.homeTeamAbbrv].logoImageUrl,
            round: match.round,
            startDate: match.startDate,
            visitingTeamId: match.visitingTeamFogisId,
            visitingTeamAbbrv: match.visitingTeamAbbrv,
            visitingTeamName: match.visitingTeamName,
            visitingTeamScore: match.visitingTeamScore,
            visitingTeamLogoUrl: logos.data[match.visitingTeamAbbrv].logoImageUrl,
            status: match.status,
            events: []
        }
    })

    return NextResponse.json({ remapedMatches });
}