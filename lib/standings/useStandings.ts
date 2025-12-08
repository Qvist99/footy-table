import { useFixtureStorageContext } from "@/lib/providers/fixture-storage-provider";
import { buildStandings } from "./buildStandings";

export function useStandings(leagueId: number, tieBreakers: string[]) {
    // Calculate the standings for all the teams with the localstorage data
    const { storedData } = useFixtureStorageContext();

    if (!storedData) return { standings: null, loading: true, error: null };

    const leagueData = storedData[leagueId];
    if (!leagueData) return { standings: null, loading: false, error: "No data available" };

    const sortedStandings = buildStandings(leagueData, tieBreakers);

    return { standings: sortedStandings, loading: false, error: null };
}
