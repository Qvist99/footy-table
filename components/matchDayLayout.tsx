import { StandingsPanel } from "./standingsPanel"
import { MatchDayFixtures } from "./matchDayFixtures"
import { getAllFixtures } from "@/lib/api/fixtures"

import { FixtureStorageProvider } from "@/lib/providers/fixture-storage-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export async function MatchDayLayout() {
    const fixtures = await getAllFixtures();
    const leagueId = 1; // hardcoded for now will be dynamic later


    return (
        <FixtureStorageProvider leagueId={leagueId} fixtures={fixtures}>
            {/* Desktop layout */}
            <div className="hidden md:flex gap-2 mt-4 h-[684px]">
                <div className="
                    min-w-[39%]
                    2xl:min-w-[30%]
                ">
                    <StandingsPanel leagueId={leagueId} />
                </div>


                <div className="w-full">
                    <MatchDayFixtures leagueId={leagueId} />
                </div>
            </div>

            {/* Mobile layout / narrow layout */}
            <div className="block md:hidden mt-2">
                <Tabs defaultValue="fixtures">
                    <TabsList>
                        <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                        <TabsTrigger value="standings">Standings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="fixtures">
                        <MatchDayFixtures leagueId={leagueId} />
                    </TabsContent>
                    <TabsContent value="standings" className="w-full min-h-screen overflow-auto">
                        <div className="h-[600px]">

                            <StandingsPanel leagueId={leagueId} />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </FixtureStorageProvider>
    )
}