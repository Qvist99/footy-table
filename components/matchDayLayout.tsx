import { StandingsPanel } from "./standingsPanel"
import { MatchDayFixtures } from "./matchDayFixtures"
import { getAllFixtures } from "@/lib/api/fixtures"

import { FixtureStorageProvider } from "@/lib/providers/fixture-storage-provider";

export async function MatchDayLayout() {
    const fixtures = await getAllFixtures();
    const leagueId = 1; // hardcoded for now will be dynamic later


    return (
        <FixtureStorageProvider leagueId={leagueId} fixtures={fixtures}>
            <div className="flex gap-2 mt-4">
                <div className="min-w-[520px]">
                    <StandingsPanel leagueId={leagueId} />
                </div>


                <div className="w-full">
                    <MatchDayFixtures leagueId={leagueId} />
                </div>
            </div>
        </FixtureStorageProvider>
    )
}