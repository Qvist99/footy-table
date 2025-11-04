
import { Fixture } from "@/lib/types"
import Team1 from "../public/temp/Team1.png"
import Team2 from "../public/temp/Team2.png"
/* export default function fixtures({fixtures}: {fixtures: any}) {


  return (
    <div>fixtures</div>
  )
} */


export class Fixtures {
  fixtures: Fixture[]
  

  constructor(fixtures: Fixture[]) {
    this.fixtures = fixtures
  }


  //initialize the users localStorage > if exists we load in the already saved data



  //When data is initialized we can map over the fixtures and return the component with its values
  getFixtures(){
    console.log(Team1)


    return (
      <div className="flex w-full">
        {this.fixtures.map((fixture) => (
          <div 
            key={fixture.matchId}
            className="flex flex-col w-[250px] p-[15px] border border-[#FFCE00] rounded-[5px]"
          >
            {/* Fixture info */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col items-center font-bold text-white">
                  <img src={Team1.src} className="h-[45px]"/>
                  <p>{fixture.homeTeamAbbrv}</p>
              </div>


              <div className="flex flex-col">
                <p className="text-white">
                  14:00
                </p>
                <p className="text-[#B49211]">
                05 Oct
                </p>
              </div>


              <div className="flex flex-col items-center font-bold text-white">
                  <img src={Team2.src} className="h-[45px]"/>
                  <p>{fixture.visitingTeamAbbrv}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
    )
  }

  private extractStartTimeAndDate(startDate: string){
    //2025-03-29T14:00:00.000Z






  }




}
