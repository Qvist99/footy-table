import type { StandingsConfig } from "@/lib/standings/standingsConfig";

export default function PositionCell({ position, config }: { position: number, config: StandingsConfig[number] }) {
    let color = ""
    let tooltip = ""
    let cursorType = "default"
    for (const key in config.specialSpots) {
        const spot = config.specialSpots[key as keyof typeof config.specialSpots];
        if (spot.position.includes(position)) {
            color = spot.backgroundColor;
            tooltip = spot.tooltipMessage;
            cursorType = "help";
            break;
        }
    }


    /* 
        Keep in case we change mind in future about design
        Horizontal allignment
        xl:w-[40%]
                    xl:h-[5px]
                    xl:bottom-0
                    xl:left-1/2
                    xl:top-auto
                    xl:translate-y-0
                    xl:-translate-x-1/2
                    xl:rounded-tr-[5px]
                    xl:rounded-tl-[5px]
                    xl:rounded-br-none
        */

    // Add real tooltip in future 

    return (
        <td title={tooltip}
            className="text-center relative"
            style={{ cursor: cursorType }}
        >
            <div>
                <span className="pl-1 xl:pl-0">
                    {position}
                </span>
                <span className={`
                    absolute 
                    w-[5px]
                    rounded-tr-[5px] 
                    rounded-br-[5px] 
                    bottom-0 
                    top-1/2
                    left-0
                    -translate-y-1/2
                    `
                }
                    style={{ backgroundColor: color }}
                >
                </span>
            </div>
        </td>
    )
}
