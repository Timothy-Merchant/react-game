import initial from "./initial"

const reset = (state, { resetType }) => ({
    ...initial,
    loaded: false,
    language: state.language,
    formData: { ...state.formData },
    gameStarted: resetType === "score" || resetType === "games",
    games: resetType === "score" ? [...state.games] : initial.games
})

const reducer = (state, action) => {
    switch (action.type) {
        case "RESET": return reset(state, action);
        default: return state;
    }
};

export default reducer;