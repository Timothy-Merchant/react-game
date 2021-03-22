import { connect } from "react-redux";
import CharacterCreate from "./CharacterCreate";
import { changeGender, changeJob } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        gender: state.characterCreation.gender,
        job: state.characterCreation.job
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeGender: (data) => dispatch(changeGender(data)),
        changeJob: (data) => dispatch(changeJob(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreate);