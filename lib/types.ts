export interface FixtureFromAllsvenskanAPI {
    id: number;
    homeTeamAbbrv: string;
    homeTeamEverySportId: number;
    homeTeamFogisId: number;
    homeTeamName: string;
    homeTeamNameFormatted: string;
    homeTeamScore: number;
    round: number;
    startDate: string;
    visitingTeamAbbrv: string;
    visitingTeamEverySportId: number;
    visitingTeamFogisId: number;
    visitingTeamName: string;
    visitingTeamNameFormatted: string;
    visitingTeamScore: number;
    status: string; //"FINISHED" | "UPCOMING"
}

export interface Fixture {
    id: number;
    homeTeamAbbrv: string;
    homeTeamId: number;
    homeTeamName: string;
    homeTeamScore: number;
    homeTeamLogoUrl: string;
    round: number;
    startDate: string;
    visitingTeamAbbrv: string;
    visitingTeamId: number;
    visitingTeamName: string;
    visitingTeamScore: number;
    visitingTeamLogoUrl: string;
    status: string; //"FINISHED" | "UPCOMING"
    events?: MatchEvent[];
}

type MatchEvent = {
    minuteWithStoppageTime: string;
    gameTime: string;
    visitingTeamScore: string;
    homeTeamScore: string;
    type: string; //"GAME_FINISHED" | "SUBSTITUTION" | "GOAL" | "WARNING";
    half: number;
}


export interface FixturesResponse {
    data: {
        matchesForLeague: {
            matches: FixtureFromAllsvenskanAPI[]
        }
    }
}


export interface LogosByAbbrvResponse {
    data: {
        [abbrv: string]: {
            abbrv: string;
            logoImageUrl: string;
        }
    }
}