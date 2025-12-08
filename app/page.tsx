import { Suspense } from "react";
import { LeagueMatchdayHeader } from "@/components/LeagueMatchdayHeader";
import { MatchDayLayout } from "@/components/MatchDayLayout";
import { getSeasonData } from "@/lib/data/seasonData/seasonData";
import { RoundStoreProvider } from "@/lib/providers/round-store-provider";

export default async function Home() {
  const seasonData = await getSeasonData();
  return (
    <RoundStoreProvider initialRound={seasonData.upcomingRound} totalRounds={seasonData.totalRounds}>
      <div className="w-full">
        <div>
          <LeagueMatchdayHeader />
        </div>

        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <MatchDayLayout />
          </Suspense>
        </div>
      </div>
    </RoundStoreProvider >
  );
}
