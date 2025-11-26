"use client";
import ChevronLeft from "@/utils/icons/chevronLeft.svg";
import ChevronRight from "@/utils/icons/chevronRight.svg";
import Image from "next/image";
import { useRoundStore } from "@/lib/providers/round-store-provider";

export function LeagueMatchdayHeader() {

    const { round, totalRounds, incrementRound, decrementRound } = useRoundStore((state) => state);

    // The selected league will currently be hardcoded to allsvenskan
    // Change when more league are added as we then will fetch from our own DB

    return (
        <div className="flex justify-between ">
            <div className="w-[520px] text-white">
                <select className="w-full h-8 border border-[#E2B714] rounded-md px-2">
                    <option>Allsvenskan</option>
                </select>
            </div>

            <div className="flex gap-4 items-center">
                <div className="text-white">
                    <p className="text-2xl">Matchday {round} / {totalRounds}</p>
                </div>

                <div className="flex gap-2 text-[#E2B714] ">
                    <button className="flex justify-center items-center border h-6 w-6 rounded-md cursor-pointer" onClick={decrementRound}>
                        <Image src={ChevronLeft} alt="Previous Matchday" className="h-4 w-4" />
                    </button>
                    <button className="flex justify-center items-center border h-6 w-6 rounded-md cursor-pointer" onClick={incrementRound}>
                        <Image src={ChevronRight} alt="Next Matchday" className="h-4 w-4" />
                    </button>
                </div>
            </div>


        </div>
    )
}