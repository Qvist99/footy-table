import { createStore } from "zustand/vanilla";


export type RoundState = {
    round: number
    totalRounds: number
}

export type RoundActions = {
    decrementRound: () => void;
    incrementRound: () => void;
}

export type RoundStore = RoundState & RoundActions;

export const initRoundStore = (initialRound: number, totalRounds: number): RoundState => {
    return {
        round: initialRound,
        totalRounds: totalRounds,
    }
}

export const defaultInitiState: RoundState = {
    round: 1,
    totalRounds: 1,
}

export const createRoundStore = (
    initState: RoundState = defaultInitiState
) => {
    return createStore<RoundStore>()((set) => ({
        ...initState,
        decrementRound: () => set((state) => ({ round: state.round !== 1 ? state.round - 1 : 1 })),
        incrementRound: () => set((state) => ({ round: state.round + 1 <= state.totalRounds ? state.round + 1 : state.totalRounds })),
    }))
}


