export interface StandingsSportStyle {
    backgroundColor: string;
    position: number[];
    tooltipMessage: string;
}

export interface StandingsConfig {
    [leagueId: number]: {
        totalTeams: number;
        specialSpots: {
            relegationZone: StandingsSportStyle;
            relegationPlayoff: StandingsSportStyle;
            promotionSpots: StandingsSportStyle;
            championsLeagueSpots: StandingsSportStyle;
            europaLeagueSpots: StandingsSportStyle;
            conferenceLeagueSpots: StandingsSportStyle;
        }
        tieBreakers: string[];
    }
}

export const standingsConfig: StandingsConfig = {
    1: {
        totalTeams: 16,
        specialSpots: {
            relegationZone: {
                backgroundColor: "#BE2828",
                position: [15, 16],
                tooltipMessage: "Relegation"
            },
            relegationPlayoff: {
                backgroundColor: "#ADADAD",
                position: [14],
                tooltipMessage: "Relegation Playoff"
            },
            promotionSpots: {
                backgroundColor: "#00FF00",
                position: [],
                tooltipMessage: "Promotion"
            },
            championsLeagueSpots: {
                backgroundColor: "#1665A7",
                position: [1],
                tooltipMessage: "Champions League qualification"
            },
            europaLeagueSpots: {
                backgroundColor: "#D27E09",
                position: [],
                tooltipMessage: "Europa League qualification"
            },
            conferenceLeagueSpots: {
                backgroundColor: "#3EEE1A",
                position: [2, 3],
                tooltipMessage: "Conference League qualification"
            },
        },
        tieBreakers: ["goalDifference", "goalsFor", "headToHeadPoints"]
    }
}