import { LeagueMatchdayHeader } from "@/components/leagueMatchdayHeader";
import { MatchDayLayout } from "@/components/matchDayLayout";

export default function Home() {

  return (
    <div className="w-full">
      <div>

        <LeagueMatchdayHeader />
      </div>

      <div>
        <MatchDayLayout />
      </div>
    </div>
  );
}
