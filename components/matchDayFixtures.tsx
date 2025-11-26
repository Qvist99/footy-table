"use client"
import { useRoundStore } from "@/lib/providers/round-store-provider";
import { FixtureCard } from "./fixtures/fixtureCard";
import { useFixtureStorageContext } from "@/lib/providers/fixture-storage-provider";


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

export function MatchDayFixtures({ leagueId }: { leagueId: number }) {

  const { round } = useRoundStore((state) => state);
  const { storedData } = useFixtureStorageContext();

  if (!storedData) {
    console.log("No stored data available in context.");
    return <div>Loading...</div>;
  }

  const roundFixtures = storedData[leagueId][round]?.fixtures || [];

  return (
    <div className="grid w-full gap-2 grid-cols-[repeat(auto-fit,minmax(290px,1fr))]">
      {roundFixtures.map(fixture => (
        <FixtureCard key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );

}

