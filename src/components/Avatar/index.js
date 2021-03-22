import { connect } from "react-redux";
import Avatar from "./Avatar";

const mapStateToProps = state => {
    return {
        currentAvatar: state.characterCreation.job,
        gender: state.characterCreation.gender
    };
};

export default connect(mapStateToProps)(Avatar);