import ChevronLeft from "@/utils/icons/chevronLeft.svg";
import ChevronRight from "@/utils/icons/chevronRight.svg";
import Image from "next/image";


export function LeagueMatchdayHeader() {


    return (
        <div className="flex justify-between ">
            <div className="w-[320px] text-white">
                <select className="w-full h-8 border border-[#E2B714] rounded-md px-2">
                    <option>Allsvenskan</option>
                </select>
            </div>

            <div className="flex gap-4 items-center">
                <div className="text-white">
                    <p className="text-2xl">Matchday 1 / 30</p>
                </div>

                <div className="flex gap-2 text-[#E2B714] ">
                    <button className="flex justify-center items-center border h-6 w-6 rounded-md ">
                        <Image src={ChevronLeft} alt="Previous Matchday" className="h-4 w-4" />
                    </button>
                    <button className="flex justify-center items-center border h-6 w-6 rounded-md ">
                        <Image src={ChevronRight} alt="Next Matchday" className="h-4 w-4" />
                    </button>
                </div>
            </div>


        </div>
    )
}