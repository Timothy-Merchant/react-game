import { connect } from "react-redux";
import CharacterCreate from "./CharacterCreate";
import { changeGender, changeJob, addPartyMember } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        gender: state.characterCreation.gender,
        job: state.characterCreation.job
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeGender: (data) => dispatch(changeGender(data)),
        changeJob: (data) => dispatch(changeJob(data)),
        addPartyMember: () => dispatch(addPartyMember())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreate);