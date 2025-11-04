import { Fixtures } from "@/components/fixtures";



export default function Home() {
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
    }
  ]



  let fixtures = new Fixtures(dummyFixtures)
  return (
    <div>
     <h1>Hello world</h1>

     {fixtures.getFixtures()}
    </div>
  );
}
