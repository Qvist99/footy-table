"use client"

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type RoundStore, createRoundStore, initRoundStore } from "@/lib/stores/round-store";


export type RoundStoreApi = ReturnType<typeof createRoundStore>;

export const RoundStoreContext = createContext<RoundStoreApi | undefined>(undefined);


export interface RoundStoreProviderProps {
    children: ReactNode;
    initialRound: number;
    totalRounds: number;
}

export const RoundStoreProvider = ({
    children,
    initialRound,
    totalRounds
}: RoundStoreProviderProps) => {
    const storeRef = useRef<RoundStoreApi | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createRoundStore(initRoundStore(initialRound, totalRounds));
    }

    return (
        <RoundStoreContext.Provider value={storeRef.current}>
            {children}
        </RoundStoreContext.Provider>
    )
}


export const useRoundStore = <T,>(
    selector: (store: RoundStore) => T,
): T => {
    const roundStoreContext = useContext(RoundStoreContext);

    if (!roundStoreContext) {
        throw new Error("useRoundStore must be used within a RoundStoreProvider");
    }

    return useStore(roundStoreContext, selector);
}
