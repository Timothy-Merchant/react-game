const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_GENDER": return { ...state, gender: action.newGender };
        case "CHANGE_JOB": return { ...state, job: action.newJob };
        default: return state;
    }
};

export default reducer;