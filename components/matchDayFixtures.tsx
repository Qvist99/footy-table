"use client"
import type { Fixture } from "@/lib/types"
import { useRoundStore } from "@/lib/providers/round-store-provider";
import { FixtureCard } from "./fixtures/fixtureCard";
import { type StoredFixture, useFixtureStorage } from "@/lib/hooks/useFixtureStorage";
import { FixtureStorageProvider, useFixtureStorageContext } from "@/lib/providers/fixture-storage-provider";


//initialize the users localStorage > if exists we load in the already saved data
/* 
local storage example:


{
  "leagueId": {
    "roundNumber": {
      "fixtures": [
        {
          "id": 6143152,
          "homeTeamId": 123,
          "visitingTeamId": 456,
          "homeTeamScore": 2,
          "visitingTeamScore": 1,
          "predictedHomeTeamScore": 1,
          "predictedVisitingTeamScore": 0
          "status": "UPCOMING",
        }
      ]
    }
  }
 
}
 
*/

export function MatchDayFixtures({ fixtures }: { fixtures: Fixture[] }) {

    const { round } = useRoundStore((state) => state);

    const leagueId = 1 // hardcoded for now will be dynamic later


    return (
        <FixtureStorageProvider leagueId={leagueId} fixtures={fixtures}>
            <MatchDayFixtureContent round={round} />
        </FixtureStorageProvider>
    )
}

function MatchDayFixtureContent({ round }: { round: number }) {
    const { storedData } = useFixtureStorageContext();

    if (!storedData) {
        console.log("No stored data available in context.");
        return <div>Loading...</div>;
    }

    const leagueId = 1; // hardcoded for now will be dynamic later
    const roundFixtures = storedData[leagueId][round]?.fixtures || [];

    return (
        <div className="grid w-full gap-2 grid-cols-[repeat(auto-fit,minmax(290px,1fr))]">
            {roundFixtures.map(fixture => (
                <FixtureCard key={fixture.id} fixture={fixture} />
            ))}
        </div>
    );


}