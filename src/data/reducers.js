const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_GENDER": return {
            ...state,
            characterCreation: {
                ...state.characterCreation,
                gender: action.newGender,
            }
        };
        case "CHANGE_JOB": return {
            ...state,
            characterCreation: {
                ...state.characterCreation,
                job: action.newJob,
            }
        };;
        default: return state;
    }
};

export default reducer;