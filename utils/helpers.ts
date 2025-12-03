import { type StoredFixture } from "@/lib/hooks/useFixtureStorage";

import type { TeamStandings } from "@/lib/types";


export function extractDateAndStartTime(dateTimeString: string) {

    // return example: {date: "05 Oct", startTime: "14:00"}
    const date = new Date(dateTimeString);
    const optionsDate: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedDate = date.toLocaleDateString('en-GB', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-GB', optionsTime);
    return { date: formattedDate, startTime: formattedTime };

}


export function updateStandingsWithFixture(
    standings: TeamStandings,
    fixture: StoredFixture,
)
{
    const { homeScore, visitingScore } = extractScoreFromFixture(fixture)

    if (homeScore === null || visitingScore === null) {
        // No scores available to update standings
        return standings;
    }

    // Update played games
    standings = updatePlayedGames(standings, fixture);

    
    // Update goals for and against and goal difference
    standings = applyGoalsFromFixture(standings, fixture, homeScore, visitingScore);


    // Update wins, draws, losses, and points
    standings = applyFixtureResult(standings, fixture, homeScore, visitingScore);

    return standings;

}

function updatePlayedGames(
    standings: TeamStandings,
    fixture: StoredFixture,
){

    standings[fixture.homeTeamId].playedGames += 1;
    standings[fixture.visitingTeamId].playedGames += 1;

    return standings;
}


function applyGoalsFromFixture(
    standings: TeamStandings,
    fixture: StoredFixture,
    homeScore: number,
    visitingScore: number
){
    const home = standings[fixture.homeTeamId];
    const away = standings[fixture.visitingTeamId];

    home.goalsFor += homeScore;
    home.goalsAgainst += visitingScore;
    home.goalDifference = calculateGoalDifference(home.goalsFor, home.goalsAgainst);

    away.goalsFor += visitingScore;
    away.goalsAgainst += homeScore;
    away.goalDifference = calculateGoalDifference(away.goalsFor, away.goalsAgainst);

    return standings;
}

function applyFixtureResult(
    standings: TeamStandings,
    fixture: StoredFixture,
    homeScore: number,
    visitingScore: number
){
    if (homeScore > visitingScore) {
        // Home team wins
        standings[fixture.homeTeamId].wins += 1;
        standings[fixture.homeTeamId].points += 3;
        standings[fixture.visitingTeamId].losses += 1;
    } else if (homeScore < visitingScore) {
        // Visiting team wins
        standings[fixture.visitingTeamId].wins += 1;
        standings[fixture.visitingTeamId].points += 3;
        standings[fixture.homeTeamId].losses += 1;
    } else {
        // Draw
        standings[fixture.homeTeamId].draws += 1;
        standings[fixture.homeTeamId].points += 1;
        standings[fixture.visitingTeamId].draws += 1;
        standings[fixture.visitingTeamId].points += 1;
    }

    return standings;
}


function extractScoreFromFixture(
    fixture: StoredFixture
): { homeScore: number | null; visitingScore: number | null } {
    let homeScore: number | null = null;
    let visitingScore: number | null = null;

    if (fixture.status === "FINISHED") {
        homeScore = fixture.homeTeamScore;
        visitingScore = fixture.visitingTeamScore;
    } else if (
        fixture.predictedHomeTeamScore !== "" &&
        fixture.predictedVisitingTeamScore !== ""
    ) {
        homeScore = fixture.predictedHomeTeamScore as number;
        visitingScore = fixture.predictedVisitingTeamScore as number;
    }
    return { homeScore, visitingScore };
}

function calculateGoalDifference(goalsFor: number, goalsAgainst: number): number {
    return goalsFor - goalsAgainst;
}



export function getBaseUrl(){
    if(process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:3000`;
}