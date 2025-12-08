
export function FixtureTeam({ logo, abbrv }: { logo: string, abbrv: string }) {
    return (
        <div className="
            flex 
            flex-col 
            gap-2 
            items-center 
            font-bold 
            text-white
            text-xs 
            lg:text-sm 
            xl:text-base
            min-w-[45px] 
            xl:min-w-[65px]
        ">
            <img src={logo} className="h-[35px] xl:h-[45px]" />
            <p>{abbrv}</p>
        </div>
    )
}