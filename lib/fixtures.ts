import fixturesJson from "@/static_data/fixtures.json";
import logosJson from "@/static_data/logos_by_abbrv.json";
import { FixturesResponse, LogosByAbbrvResponse, Fixture } from "@/lib/types";

//This will be moved in future when seasonData is also moved in the api
export async function getSeasonData(){
const fixtures: FixturesResponse = fixturesJson;
    const matches = fixtures.data.matchesForLeague.matches;


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
    return { upcomingRound , totalRounds };
}

export async function getAllFixtures(){
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


    return remapedMatches;
}
