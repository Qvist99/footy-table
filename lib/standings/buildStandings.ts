import { updateStandings } from "@/lib/standings/updateStandings";
import { createTieBreakerHandlers } from "./createTieBreakerHandlers";
import { sortStandings } from "./sortStandings";
import type { FixtureStorage } from "@/lib/hooks/useFixtureStorage";
import { TeamInStandings, TeamStandings } from "@/lib/types";

export function buildStandings( leagueData : FixtureStorage[number], tieBreakers: string[] ) {

    let standings: TeamStandings = {}

    for (const roundKey in leagueData) {
            const roundFixtures = leagueData[roundKey].fixtures;
    
            for (const fixture of roundFixtures) {
            standings = initializeTeamIfNeeded(standings, fixture.homeTeamId, {
                name: fixture.homeTeamName,
                abbrv: fixture.homeTeamAbbrv,
                logoUrl: fixture.homeTeamLogoUrl,
            });

            standings = initializeTeamIfNeeded(standings, fixture.visitingTeamId, {
                name: fixture.visitingTeamName,
                abbrv: fixture.visitingTeamAbbrv,
                logoUrl: fixture.visitingTeamLogoUrl,
            });

            standings = updateStandings(standings, fixture);
        }

        }


        const standingsArray: TeamInStandings[] = Object.values(standings);
        const tieBreakerHandlers = createTieBreakerHandlers(leagueData);

    return sortStandings(standingsArray, tieBreakers, tieBreakerHandlers);
}


function initializeTeamIfNeeded(standings: TeamStandings, teamId: number, info: { name: string; abbrv: string; logoUrl: string }) {

    if(standings[teamId]) return standings

    standings[teamId] = {
        id: teamId,
        name: info.name,
        abbrv: info.abbrv,
        logoUrl: info.logoUrl,
        playedGames: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0,
    }; 
    return standings;
}