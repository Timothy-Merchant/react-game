import { connect } from "react-redux";
import CharacterCreate from "./CharacterCreate";
import { changeGender } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        gender: state.gender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeGender: (data) => dispatch(changeGender(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreate);