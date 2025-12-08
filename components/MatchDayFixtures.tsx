"use client"
import { useRoundStore } from "@/lib/providers/round-store-provider";
import { FixtureCard } from "./fixtures/FixtureCard";
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
    <div className="h-full">


      <div className="
        grid 
        w-full 
        gap-2 
        [--card-min:150px]
        xl:[--card-min:185px]
        2xl:[--card-min:255px]
        3xl:[--card-min:285px]
        grid-cols-[repeat(auto-fit,minmax(var(--card-min),1fr))] 

        
        ">
        {roundFixtures.map(fixture => (
          <FixtureCard key={fixture.id} fixture={fixture} />
        ))}
      </div>
    </div>
  );

}

