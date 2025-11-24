import Image from "next/image"
import FootyTable from "@/utils/icons/footyTable.svg"

export function Navbar() {
    return (
        <nav>
            <div className="w-full h-[70px] px-[110px] py-5 border-b border-[#D1D0C5]">
                <Image src={FootyTable} alt="Footy Table Logo" />
            </div>
        </nav>


    )
}