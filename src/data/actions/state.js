export const changeGender = (data) => {
    return {
        type: "CHANGE_GENDER",
        newGender: data
    }
}

export const changeJob = (data) => {
    return {
        type: "CHANGE_JOB",
        newJob: data
    }
}

export const addPartyMember = () => {
    return {
        type: "ADD_PARTY_MEMBER",
    }
}