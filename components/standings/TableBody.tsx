import { TeamInStandings } from "@/lib/types"
import type { StandingsConfig } from "@/lib/standings/standingsConfig";

import PositionCell from "./PositionCell"

export default function TableBody({ sortedStandingsArray, config }: { sortedStandingsArray: TeamInStandings[], config: StandingsConfig[number] }) {

    return (
        <tbody>
            {sortedStandingsArray.map((team, index) => (
                <tr key={team.id} className="border-b border-b-[#646669] last:border-0 ">

                    <PositionCell position={index + 1} config={config} />

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
    )
}
