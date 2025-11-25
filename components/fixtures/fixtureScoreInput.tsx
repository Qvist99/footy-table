import { useState } from "react";
import { useFixtureStorageContext } from "@/lib/providers/fixture-storage-provider";
import type { StoredFixture } from "@/lib/hooks/useFixtureStorage";

export function FixtureScoreInput({ fixture, type }: { fixture: StoredFixture, type: "home" | "away" }) {
    const { updatePrediction } = useFixtureStorageContext();

    const storedValue = type === "home"
        ? fixture.predictedHomeTeamScore
        : fixture.predictedVisitingTeamScore;

    const [value, setValue] = useState(
        storedValue === "" || storedValue === null ? "0" : String(storedValue)
    );


    const isCompleted = fixture.status === "FINISHED";



    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setValue(newValue);

        console.log("New score value:", newValue);
        if (newValue === "") {
            updatePrediction(fixture.round, fixture.id, type === "home" ? {
                predictedHomeTeamScore: ""
            } : {
                predictedVisitingTeamScore: ""
            })
            return
        }

        updatePrediction(fixture.round, fixture.id,
            type === "home"
                ? { predictedHomeTeamScore: Number(newValue) }
                : { predictedVisitingTeamScore: Number(newValue) }
        );


    }
    function scorePredictionStyle() {
        if (isCompleted && type === "home") {
            if (fixture.homeTeamScore === fixture.predictedHomeTeamScore) {
                return "border-[#56EE93]";
            } else {
                return "border-[#E8434B]";
            }
        } else if (isCompleted && type === "away") {
            if (fixture.visitingTeamScore === fixture.predictedVisitingTeamScore) {
                return "border-[#56EE93]";
            } else {
                return "border-[#E8434B]";
            }
        }
    }

    return (
        <input className={`text-center h-6 rounded-[5px] w-[30px] border text-white ${scorePredictionStyle() || "border-[#E2B714]"}`} value={value} onChange={handleChange} disabled={isCompleted} type="number" />
    )
}