import { StandingsPanel } from "./standingsPanel"
import { MatchDayFixtures } from "./matchDayFixtures"

export function MatchDayLayout() {


    return (
        <div className="flex gap-2 mt-4">
            <div className="min-w-[320px]">
                <StandingsPanel />
            </div>


            <div className="w-full">
                <MatchDayFixtures />
            </div>


        </div>
    )
}