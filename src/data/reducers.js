import initial from "./initial"

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_GENDER": return { ...state, gender: action.newGender };
        default: return state;
    }
};

export default reducer;