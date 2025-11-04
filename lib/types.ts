export interface Fixture {
    matchId: number;
    homeTeamAbbrv: string;
    homeTeamName: string;
    homeTeamScore: number;
    homeTeamLogo: string;
    round: number;
    startDate: string;
    visitingTeamAbbrv: string;
    visitingTeamName: string;
    visitingTeamScore: number;
    visitingTeamLogo: string;
    status: string; //"FINISHED" | "UPCOMING"
    matchEvents: MatchEvent[]
}

type MatchEvent = {
    minuteWithStoppageTime: string;
    gameTime: string;
    visitingTeamScore: string;
    homeTeamScore: string;
    type: string; //"GAME_FINISHED" | "SUBSTITUTION" | "GOAL" | "WARNING";
    half: number;
}