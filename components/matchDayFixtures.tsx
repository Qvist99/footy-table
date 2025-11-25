"use client"
import { Fixtures } from "./fixtures"
import type { Fixture } from "@/lib/types"
import { useRoundStore } from "@/lib/providers/round-store-provider";

export function MatchDayFixtures({ fixtures }: { fixtures: Fixture[] }) {

    const { round } = useRoundStore((state) => state);

    const filteredFixtures = fixtures.filter(fixture => fixture.round === round);

    let fixturesClass = new Fixtures(filteredFixtures)


    return (
        <div>
            {fixturesClass.getFixtures()}
        </div>
    )
}