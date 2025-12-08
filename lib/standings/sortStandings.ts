import type { TeamInStandings } from "@/lib/types";

export function sortStandings(
    standings: TeamInStandings[],
    tieBreakers: string[],
    tieBreakerHandlers: Record<string, (a: TeamInStandings, b: TeamInStandings) => number>
) {
    return standings.sort((a, b) => {
        // Primary: points
        if (b.points !== a.points) {
            return b.points - a.points;
        }

        // Secondary: tie breakers (in configured order)
        for (const key of tieBreakers) {
            const handler = tieBreakerHandlers[key];
            if (!handler) continue;

            const result = handler(a, b);
            if (result !== 0) return result;
        }

        return 0;
    });
}
