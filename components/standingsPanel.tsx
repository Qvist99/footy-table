"use client"
import { standingsConfig } from "@/utils/standingsConfig"
import { useFixtureStorageContext } from "@/lib/providers/fixture-storage-provider";

import { updateStandingsWithFixture } from "@/utils/helpers";
import type { TeamStandings, TeamInStandings } from "@/lib/types";


export function StandingsPanel({ leagueId }: { leagueId: number }) {
    const config = standingsConfig[leagueId]
    // Calculate the standings for all the teams with the localstorage data
    const { storedData } = useFixtureStorageContext();

    if (!storedData) {
        console.log("No stored data available in context.");
        return <div>Loading...</div>;
    }

    const leagueData = storedData[leagueId];

    if (!leagueData) {
        console.log(`No data found for league ID: ${leagueId}`);
        return <div>No data available for this league.</div>;
    }

    let standings: TeamStandings = {}

    // go through all rounds and gather all the data for each team
    for (const roundKey in leagueData) {
        const roundFixtures = leagueData[roundKey].fixtures;


        roundFixtures.forEach(fixture => {
            // Initialize home team in standings if not already present
            if (!standings[fixture.homeTeamId]) {
                standings[fixture.homeTeamId] = {
                    id: fixture.homeTeamId,
                    name: fixture.homeTeamName,
                    abbrv: fixture.homeTeamAbbrv,
                    logoUrl: fixture.homeTeamLogoUrl,
                    playedGames: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    goalDifference: 0,
                    points: 0,
                };
            }


            // Initialize visiting team in standings if not already present
            if (!standings[fixture.visitingTeamId]) {
                standings[fixture.visitingTeamId] = {
                    id: fixture.visitingTeamId,
                    name: fixture.visitingTeamName,
                    abbrv: fixture.visitingTeamAbbrv,
                    logoUrl: fixture.visitingTeamLogoUrl,
                    playedGames: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    goalsFor: 0,
                    goalsAgainst: 0,
                    goalDifference: 0,
                    points: 0,
                };
            }

            // Update standings with the fixture result
            standings = updateStandingsWithFixture(standings, fixture);
        })

    }




    // when we got all points, goals, wins, losses, draws etc we can sort our array of team objects acording to the config for the league
    // Convert standings object to an array for sorting
    const standingsArray: TeamInStandings[] = Object.values(standings);

    // Sort the standings array based on point and tie breakers

    const tieBreakerHandlers: Record<string, (a: TeamInStandings, b: TeamInStandings) => number> = {
        goalDifference: (a, b) => b.goalDifference - a.goalDifference,
        goalsFor: (a, b) => b.goalsFor - a.goalsFor,
        headToHeadPoints: (a, b) => {
            let aPoints = 0;
            let bPoints = 0;

            for (const roundKey in leagueData) {
                for (const fixture of leagueData[roundKey].fixtures) {
                    const isABFixture =
                        (fixture.homeTeamId === a.id && fixture.visitingTeamId === b.id) ||
                        (fixture.homeTeamId === b.id && fixture.visitingTeamId === a.id);

                    if (!isABFixture) continue;

                    const homeScore = fixture.homeTeamScore;
                    const awayScore = fixture.visitingTeamScore;

                    if (homeScore > awayScore) {
                        fixture.homeTeamId === a.id ? aPoints += 3 : bPoints += 3;
                    } else if (homeScore < awayScore) {
                        fixture.homeTeamId === a.id ? bPoints += 3 : aPoints += 3;
                    } else {
                        aPoints++;
                        bPoints++;
                    }
                }
            }

            return bPoints - aPoints;
        }
    };

    standingsArray.sort((a, b) => {
        // Primary sort by points
        if (b.points !== a.points) {
            return b.points - a.points;
        }

        // Secondary sort by tieBreakers
        // example tieBreaker array ["goalDifference", "goalsFor", "headToHeadPoints"]

        for (const tieBreaker of config.tieBreakers) {
            const handler = tieBreakerHandlers[tieBreaker];
            if (!handler) continue;

            const result = handler(a, b);
            if (result !== 0) return result;
        }


        return 0; // They are completely equal in all tie breakers
    });




    console.log("Final Standings Array:", standingsArray);
    // Build the table rows based on the standings data and the config for the league


    function createPositionElement(position: number) {
        let color = ""
        let tooltip = ""
        for (const key in config.specialSpots) {
            const spot = config.specialSpots[key as keyof typeof config.specialSpots];
            if (spot.position.includes(position)) {
                color = spot.backgroundColor;
                tooltip = spot.tooltipMessage;
                break;
            }
        }

        // Add real tooltip and cursor help only if color is set 
        return (
            <td title={tooltip} className="text-center relative cursor-help">
                <div>
                    {position}
                    <span className={`absolute h-[5px] left-[30%] rounded-tr-[5px] rounded-tl-[5px] bottom-0 w-[40%]`}
                        style={{ backgroundColor: color }}
                    >
                    </span>
                </div>
            </td>
        );
    }


    return (
        <div className=" w-full h-[684px] border border-[#E2B714] rounded-md text-[#D1D0C5]">
            <table className="w-full table-auto h-full ">
                <thead className="">
                    <tr className="border-b border-[#E2B714]">
                        <th className="text-center font-normal">#</th>
                        <th className="text-left">Team</th>
                        <th className="text-center font-normal">P</th>
                        <th className="text-center font-normal">W</th>
                        <th className="text-center font-normal">D</th>
                        <th className="text-center font-normal">L</th>
                        <th className="text-center font-normal">F</th>
                        <th className="text-center font-normal">A</th>
                        <th className="text-center font-normal">GD</th>
                        <th className="text-center font-bold">PTS</th>
                    </tr>
                </thead>

                <tbody>
                    {standingsArray.map((team, index) => (
                        <tr key={team.id} className="border-b border-b-[#646669] last:border-0 ">

                            {createPositionElement(index + 1)}

                            <td className="text-left w-[85px]">
                                <div className="flex gap-2 items-center truncate">
                                    <div className="flex items-center justify-center w-[22px]">
                                        <img src={team.logoUrl} alt={team.abbrv} className="h-4" />
                                    </div>
                                    {team.abbrv}
                                </div>
                            </td>
                            <td className="text-center" >
                                {team.playedGames}
                            </td>
                            <td className="text-center" >
                                {team.wins}
                            </td>
                            <td className="text-center" >
                                {team.draws}
                            </td>
                            <td className="text-center" >
                                {team.losses}
                            </td>
                            <td className="text-center">
                                {team.goalsFor}
                            </td>
                            <td className="text-center">
                                {team.goalsAgainst}
                            </td>
                            <td className="text-center">
                                {team.goalDifference}
                            </td>
                            <td className="text-center font-bold">
                                {team.points}
                            </td>

                        </tr>

                    ))}
                </tbody>

            </table>


        </div>
    )
}