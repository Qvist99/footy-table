import { extractDateAndStartTime } from "@/utils/helpers"
import type { Fixture } from "@/lib/types";


function renderStatus(fixture: Fixture) {
    const { date, startTime } = extractDateAndStartTime(fixture.startDate);

    if (fixture.status === "FINISHED") {
        return (
            <>
                <p className="text-white font-bold">
                    {`${fixture.homeTeamScore} - ${fixture.visitingTeamScore}`}
                </p>
                <p className="text-[#B49211] text-xs">
                    FT
                </p>

            </>
        )
    }

    return (
        <>
            <p className="text-white font-bold">
                {startTime}
            </p>
            <p className="text-[#B49211] text-xs">
                {date}
            </p>
        </>
    )



}


export function FixtureStatus({ fixture }: { fixture: Fixture }) {
    return (
        <div className="flex flex-col items-center justify-between h-full py-[21px]">
            <div className="text-center">
                {renderStatus(fixture)}
            </div>

            <div className="w-2.5 bg-[#B49211] h-px"></div>
        </div>
    )
}