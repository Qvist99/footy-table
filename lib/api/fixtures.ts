import { Fixture } from "../types";

interface SeasonData{
    upcomingRound: number;
    totalRounds: number;
}

interface FixturesForRoundResponse{
    matches: Fixture[];
}

//This will be moved in future when seasonData is also moved in the api
export async function getSeasonData(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fixtures/seasonData`, {next: {revalidate: 60}});

    if(!res.ok){
        throw new Error("Failed to fetch season data");
    }


    const data: SeasonData = await res.json();

    return data;
}

export async function getAllFixtures(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fixtures`);
    if(!res.ok){
        throw new Error("Failed to fetch all fixtures");
    }
    const data = await res.json();
    return data.remapedMatches as Fixture[];
}


export async function getFixturesForRound(round: number){
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fixtures/${round}`)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fixtures/${round}`);
    
    
    if(!res.ok){
        throw new Error("Failed to fetch fixtures for round " + round);
    }

    const data: FixturesForRoundResponse = await res.json();

    return data.matches;

}