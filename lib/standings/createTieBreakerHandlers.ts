import { TeamInStandings } from "../types";
import type { FixtureStorage } from "../hooks/useFixtureStorage";

export type TieBreakerHandler = (a: TeamInStandings, b: TeamInStandings) => number;
export type TieBreakerHandlerMap = Record<string, TieBreakerHandler>;

export function createTieBreakerHandlers(leagueData: FixtureStorage[number]): TieBreakerHandlerMap {
    return {
        goalDifference: (a: TeamInStandings, b: TeamInStandings) =>
            b.goalDifference - a.goalDifference,

        goalsFor: (a: TeamInStandings, b: TeamInStandings) =>
            b.goalsFor - a.goalsFor,

        headToHeadPoints: (a: TeamInStandings, b: TeamInStandings) => {
            let aPoints = 0;
            let bPoints = 0;

            for (const roundKey in leagueData) {
                for (const fixture of leagueData[roundKey].fixtures) {
                    const isMatch =
                        (fixture.homeTeamId === a.id && fixture.visitingTeamId === b.id) ||
                        (fixture.homeTeamId === b.id && fixture.visitingTeamId === a.id);

                    if (!isMatch) continue;

                    const homeScore = fixture.homeTeamScore;
                    const awayScore = fixture.visitingTeamScore;

                    if (homeScore > awayScore) {
                        fixture.homeTeamId === a.id ? (aPoints += 3) : (bPoints += 3);
                    } else if (homeScore < awayScore) {
                        fixture.homeTeamId === a.id ? (bPoints += 3) : (aPoints += 3);
                    } else {
                        aPoints += 1;
                        bPoints += 1;
                    }
                }
            }

            return bPoints - aPoints;
        },
    };
}

