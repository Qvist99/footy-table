import Image from "next/image"
import FootyTable from "@/components/icons/footyTable.svg"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

export function Navbar() {
    return (
        <nav>
            <div className="
            flex
            justify-between
            items-center
            w-full 
            h-[70px] 
            px-2.5
            border-b 
            border-[#D1D0C5]
            lg:px-[110px] 
            ">
                <Image src={FootyTable} alt="Footy Table Logo" />

                <div>
                    <Dialog>
                        <DialogTrigger className="flex justify-center items-center rounded-full border border-[#ffce00] h-6 w-6 text-[#ffce00] cursor-pointer">
                            i
                        </DialogTrigger>
                        <DialogContent className="bg-[#121212] text-[#D1D0C5] border border-[#D1D0C5]" >
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">About Footy Table</DialogTitle>
                                <DialogDescription className="text-[#D1D0C5]">
                                    Footy Table is your go-to app for predicting football match outcomes and tracking league standings. You can make predictions for upcoming fixtures and see how your choices affect the table in real time. Once matches are played, the app shows the actual results alongside your predictions. The color-coding used for this is explained below.
                                </DialogDescription>
                            </DialogHeader>


                            <div className="flex gap-4 mt-2 justify-between text-sm md:text-base">
                                <div className="flex flex-col gap-2 items-center text-center">
                                    <div className="h-6 w-[30px] border border-[#56EE93] rounded-md"></div>
                                    <span>Correct Prediction</span>
                                </div>
                                <div className="flex flex-col gap-2 items-center text-center">
                                    <div className="h-6 w-[30px] border border-[#E8434B] rounded-md"></div>
                                    <span>Wrong Prediction</span>
                                </div>

                                <div className="flex flex-col gap-2 items-center text-center">
                                    <div className="h-6 w-[30px] border border-[#D1D0C5] rounded-md"></div>
                                    <span>No Prediction</span>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </nav>
    )
}