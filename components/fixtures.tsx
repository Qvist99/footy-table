
import { Fixture } from "@/lib/types"



export class Fixtures {
  fixtures: Fixture[]


  constructor(fixtures: Fixture[]) {
    this.fixtures = fixtures
  }


  //initialize the users localStorage > if exists we load in the already saved data
  /* 
  local storage example:


  {
    "leagueId": {
      "roundNumber": {
        "fixtures": [
          {
            "matchId": 6143152,
            "homeTeamId": 123,
            "visitingTeamId": 456,
            "homeTeamScore": 2,
            "visitingTeamScore": 1
          }
        ]
      }
    }
  
  }
  
  */


  //When data is initialized we can map over the fixtures and return the component with its values
  getFixtures() {
    return (
      <div className="grid w-full gap-2 grid-cols-[repeat(auto-fit,minmax(290px,1fr))]">
        {this.fixtures.map((fixture) => (
          <div
            key={fixture.id}
            className="flex flex-col p-[15px] border border-[#FFCE00] rounded-[5px]"
          >
            {/* Fixture info */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col items-center justify-between gap-4 p-2">
                <div className="flex flex-col gap-2 items-center font-bold text-white min-w-[65px]">
                  <img src={fixture.homeTeamLogoUrl} className="h-[45px]" />
                  <p>{fixture.homeTeamAbbrv}</p>
                </div>

                <div>

                  <input className="text-center h-6 rounded-[5px] w-[30px] border border-[#E2B714] text-white" />
                </div>
              </div>


              <div className="flex flex-col items-center justify-between h-full py-[21px]">
                <div className="text-center">
                  <p className="text-white font-bold">
                    14:00
                  </p>
                  <p className="text-[#B49211] text-xs">
                    05 Oct
                  </p>
                </div>

                <div className="w-2.5 bg-[#B49211] h-px"></div>
              </div>


              <div className="flex flex-col items-center justify-between gap-4 p-2">
                <div className="flex flex-col gap-2 items-center font-bold text-white min-w-[65px]">
                  <img src={fixture.visitingTeamLogoUrl} className="h-[45px]" />
                  <p>{fixture.visitingTeamAbbrv}</p>

                </div>
                <div>
                  <input className="text-center h-6 rounded-[5px] w-[30px] border border-[#E2B714] text-white" />
                </div>
              </div>


            </div>

          </div>
        ))}
      </div>
    )
  }

  private extractStartTimeAndDate(startDate: string) {
    //2025-03-29T14:00:00.000Z






  }




}
