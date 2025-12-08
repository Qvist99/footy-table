"use client"
import { standingsConfig } from "@/lib/standings/standingsConfig"
import TableHeader from "@/components/standings/TableHeader";
import TableBody from "@/components/standings/TableBody";
import { useStandings } from "@/lib/standings/useStandings";


export function StandingsPanel({ leagueId }: { leagueId: number }) {
    const config = standingsConfig[leagueId]

    const { standings, loading, error } = useStandings(leagueId, config.tieBreakers);


    if (loading) return <div>Loading...</div>;
    if (error || !standings) return <div>{error || "No data available"}</div>;

    // Build the table rows based on the standings data and the config for the league
    // Maybe look at creating table config in future too possibly support different types of table header/content combinations.
    return (
        <div className=" w-full h-full border border-[#E2B714] rounded-md text-[#D1D0C5]">
            <table className="w-full table-auto h-full text-xs lg:text-sm xl:text-base">
                <TableHeader />
                <TableBody sortedStandingsArray={standings} config={config} />
            </table>
        </div>
    )
}