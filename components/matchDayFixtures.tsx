import { Fixtures } from "./fixtures"

export function MatchDayFixtures() {





    let dummyFixtures = [
        {
            matchId: 6143152,
            homeTeamAbbrv: "AIK",
            homeTeamName: "AIK",
            homeTeamScore: 0,
            homeTeamLogo: "",
            round: 1,
            startDate: "2025-03-29T14:00:00.000Z",
            visitingTeamAbbrv: "GAIS",
            visitingTeamName: "GAIS",
            visitingTeamScore: 1,
            visitingTeamLogo: "",
            status: "FINISHED",
            matchEvents: []
        },
        {
            matchId: 611143152,
            homeTeamAbbrv: "AIK",
            homeTeamName: "AIK",
            homeTeamScore: 0,
            homeTeamLogo: "",
            round: 1,
            startDate: "2025-03-29T14:00:00.000Z",
            visitingTeamAbbrv: "GAIS",
            visitingTeamName: "GAIS",
            visitingTeamScore: 1,
            visitingTeamLogo: "",
            status: "FINISHED",
            matchEvents: []
        },
        {
            matchId: 6145323152,
            homeTeamAbbrv: "AIK",
            homeTeamName: "AIK",
            homeTeamScore: 0,
            homeTeamLogo: "",
            round: 1,
            startDate: "2025-03-29T14:00:00.000Z",
            visitingTeamAbbrv: "GAIS",
            visitingTeamName: "GAIS",
            visitingTeamScore: 1,
            visitingTeamLogo: "",
            status: "FINISHED",
            matchEvents: []
        },
        {
            matchId: 6112443152,
            homeTeamAbbrv: "AIK",
            homeTeamName: "AIK",
            homeTeamScore: 0,
            homeTeamLogo: "",
            round: 1,
            startDate: "2025-03-29T14:00:00.000Z",
            visitingTeamAbbrv: "GAIS",
            visitingTeamName: "GAIS",
            visitingTeamScore: 1,
            visitingTeamLogo: "",
            status: "FINISHED",
            matchEvents: []
        },
        {
            matchId: 614323152,
            homeTeamAbbrv: "AIK",
            homeTeamName: "AIK",
            homeTeamScore: 0,
            homeTeamLogo: "",
            round: 1,
            startDate: "2025-03-29T14:00:00.000Z",
            visitingTeamAbbrv: "GAIS",
            visitingTeamName: "GAIS",
            visitingTeamScore: 1,
            visitingTeamLogo: "",
            status: "FINISHED",
            matchEvents: []
        }
    ]


    let fixtures = new Fixtures(dummyFixtures)


    return (
        <div>
            {fixtures.getFixtures()}
        </div>
    )
}