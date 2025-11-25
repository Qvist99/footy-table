import { StandingsPanel } from "./standingsPanel"
import { MatchDayFixtures } from "./matchDayFixtures"
import { getAllFixtures } from "@/lib/api/fixtures"
export async function MatchDayLayout() {
    const fixtures = await getAllFixtures();
    return (
        <div className="flex gap-2 mt-4">
            <div className="min-w-[320px]">
                <StandingsPanel />
            </div>


            <div className="w-full">
                <MatchDayFixtures fixtures={fixtures} />
            </div>


        </div>
    )
}