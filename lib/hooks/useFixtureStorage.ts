import { useEffect, useState } from "react";
import { Fixture } from "@/lib/types";

export type StoredFixture = Fixture & {
    predictedHomeTeamScore: number | "";
    predictedVisitingTeamScore: number | "";
}  

export type FixtureStorage = {
    [leagueId: number]: {
        [roundNumber: number]: {
            fixtures: StoredFixture[];
        };
    };
}

export function useFixtureStorage(leagueId: number, fixtures: Fixture[]){
    const [storedFixtures, setStoredFixtures] = useState<FixtureStorage | null>(null);
    useEffect(() => {
        const raw = localStorage.getItem("fixtures");
        const parsed: FixtureStorage = raw ? JSON.parse(raw) : {};

        //initialize league if not present
        if (!parsed[leagueId]) {
            parsed[leagueId] = {};
        }


        // Load rounds
        fixtures.forEach((fixture) => {
            const roundNumber = fixture.round;

            if (!parsed[leagueId][roundNumber]) {
                parsed[leagueId][roundNumber] = {
                    fixtures: []
                };
            }

            const storedList = parsed[leagueId][roundNumber].fixtures;
            const index = storedList.findIndex(f => f.id === fixture.id);

            if (index === -1){
                //new fixture initialize with predictions
                storedList.push({
                    ...fixture,
                    predictedHomeTeamScore: "",
                    predictedVisitingTeamScore: ""
                })
            }else{
                //existing fixture update data except predictions

                const stored = storedList[index];

                // Only update real results when API and data status differ

                const shouldUpdateResult = fixture.status !== stored.status

                if (shouldUpdateResult) {
                    storedList[index] = {
                        ...stored,
                        ...fixture,
                        predictedHomeTeamScore: stored.predictedHomeTeamScore,
                        predictedVisitingTeamScore: stored.predictedVisitingTeamScore
                    }
                }

            }
        })

        localStorage.setItem("fixtures", JSON.stringify(parsed));
        setStoredFixtures(parsed);

    }, [leagueId, fixtures]);


   const updatePrediction = (roundNumber: number, fixtureId: number, update:Partial<StoredFixture>) => {
    if (!storedFixtures) {
        console.error("Stored fixtures not initialized yet.");
        return;
    } 

    const data = structuredClone(storedFixtures);

    const fixtureList = data[leagueId][roundNumber].fixtures;
    const fixture = fixtureList.find(f => f.id === fixtureId);

    if (!fixture) {
        console.error(`Fixture with ID ${fixtureId} not found in round ${roundNumber}.`);
        return;
    }

    Object.assign(fixture, update);

    localStorage.setItem("fixtures", JSON.stringify(data));
    setStoredFixtures(data);
   }

   return {storedFixtures, updatePrediction}
}