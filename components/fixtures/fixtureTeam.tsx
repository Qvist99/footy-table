
export function FixtureTeam({ logo, abbrv }: { logo: string, abbrv: string }) {
    return (
        <div className="flex flex-col gap-2 items-center font-bold text-white min-w-[65px]">
            <img src={logo} className="h-[45px]" />
            <p>{abbrv}</p>
        </div>
    )
}