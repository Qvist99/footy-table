import { cn } from "@/lib/utils"

export default function TableHeader() {

    const headerCells = [
        {
            value: "#",
            extraClass: "pl-1"
        },
        {
            value: "Team",
            extraClass: "text-left",
        },
        {
            value: "P",
            extraClass: ""
        },
        {
            value: "W",
            extraClass: ""
        },
        {
            value: "D",
            extraClass: ""
        },
        {
            value: "L",
            extraClass: ""
        },
        {
            value: "F",
            extraClass: ""
        },
        {
            value: "A",
            extraClass: ""
        },
        {
            value: "GD",
            extraClass: ""
        },
        {
            value: "PTS",
            extraClass: "font-bold"
        }
    ]


    function headerCell(value: string, extraClass: string, key: number) {
        return (
            <th key={key} className={cn("text-center font-normal", extraClass)}>{value}</th>
        )
    }

    return (
        <thead className="">
            <tr className="border-b border-[#E2B714] h-10">
                {
                    headerCells.map((cell, index) =>
                        headerCell(cell.value, cell.extraClass, index)
                    )}
            </tr>
        </thead>
    )
}
