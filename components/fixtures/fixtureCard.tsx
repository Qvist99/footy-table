
import { FixtureStatus } from "./fixtureStatus";
import { FixtureTeam } from "./fixtureTeam";
import { FixtureScoreInput } from "./fixtureScoreInput";
import { type StoredFixture } from "@/lib/hooks/useFixtureStorage";

//When data is initialized we can map over the fixtures and return the component with its values
export function FixtureCard({ fixture }: { fixture: StoredFixture }) {

  return (
    <div

      className="flex flex-col p-[15px] border border-[#FFCE00] rounded-[5px]"
    >
      {/* Home Team */}
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-center justify-between gap-4 p-2">
          <FixtureTeam logo={fixture.homeTeamLogoUrl} abbrv={fixture.homeTeamAbbrv} />
          <div>
            <FixtureScoreInput fixture={fixture} type="home" />
          </div>
        </div>

        {/* Fixture info */}
        <FixtureStatus fixture={fixture} />

        {/* Visiting Team */}
        <div className="flex flex-col items-center justify-between gap-4 p-2">
          <div>
            <FixtureTeam logo={fixture.visitingTeamLogoUrl} abbrv={fixture.visitingTeamAbbrv} />
          </div>

          <div>
            <FixtureScoreInput fixture={fixture} type="away" />
          </div>
        </div>
      </div>
    </div>
  )

}


