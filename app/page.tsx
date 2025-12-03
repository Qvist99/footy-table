import { LeagueMatchdayHeader } from "@/components/leagueMatchdayHeader";
import { MatchDayLayout } from "@/components/matchDayLayout";
import { Suspense } from "react";
import { getSeasonData } from "@/lib/fixtures";
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
