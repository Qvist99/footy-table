"use client"

import { createContext, useContext } from "react";
import { useFixtureStorage, type FixtureStorage, type StoredFixture } from "@/lib/hooks/useFixtureStorage";
import type { Fixture } from "@/lib/types";
import { type ReactNode } from "react";


type FixtureStorageContextType = {
    storedData: FixtureStorage | null;
    updatePrediction: (
        roundNumber: number,
        matchId: number,
        updates: Partial<StoredFixture>
    ) => void;
}

const FixtureStorageContext = createContext<FixtureStorageContextType | null>(null);

export const FixtureStorageProvider = ({
    children,
    fixtures,
    leagueId
}: {
    children: ReactNode;
    fixtures: Fixture[];
    leagueId: number;
}) => {
    const { storedFixtures, updatePrediction } = useFixtureStorage(
        leagueId,
        fixtures
    );

    return (
        <FixtureStorageContext.Provider
            value={{ storedData: storedFixtures, updatePrediction }}
        >
            {children}
        </FixtureStorageContext.Provider>
    );

}

export function useFixtureStorageContext() {
    const ctx = useContext(FixtureStorageContext);
    if (!ctx) {
        throw new Error(
            "useFixtureStorageContext must be used inside <FixtureStorageProvider>"
        );
    }
    return ctx;
}
