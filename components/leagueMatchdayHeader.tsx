"use client";
import ChevronLeft from "@/utils/icons/chevronLeft.svg";
import ChevronRight from "@/utils/icons/chevronRight.svg";
import Image from "next/image";
import { useRoundStore } from "@/lib/providers/round-store-provider";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function LeagueMatchdayHeader() {

    const { round, totalRounds, incrementRound, decrementRound } = useRoundStore((state) => state);

    // The selected league will currently be hardcoded to allsvenskan
    // Change when more league are added as we then will fetch from our own DB
    // Swap the select for a custom dropdown component later

    return (
        <div className="
        flex 
        justify-between 
        items-center
        md:items-end 
        ">
            <div className="
                    min-w-[39%]
                    2xl:min-w-[30%]
                    text-white">
                <Select defaultValue="allsvenskan">
                    <SelectTrigger className="w-full h-8 border border-[#E2B714] rounded-md px-2">
                        <SelectValue placeholder="Select a league" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="allsvenskan">Allsvenskan</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="
                flex 
                gap-2 
                justify-end 
                items-center
            ">
                <div className="text-white">
                    <p className="
                        text-sm 
                        md:text-xl 
                        xl:text-2xl
                    ">
                        Matchday {round} / {totalRounds}
                    </p>
                </div>

                <div className="flex gap-2 text-[#E2B714] ">
                    <button className="flex justify-center items-center border h-6 w-6 rounded-md cursor-pointer border-[#E2B714]" onClick={decrementRound}>
                        <Image src={ChevronLeft} alt="Previous Matchday" className="h-4 w-4" />
                    </button>
                    <button className="flex justify-center items-center border h-6 w-6 rounded-md cursor-pointer border-[#E2B714]" onClick={incrementRound}>
                        <Image src={ChevronRight} alt="Next Matchday" className="h-4 w-4" />
                    </button>
                </div>
            </div>


        </div>
    )
}