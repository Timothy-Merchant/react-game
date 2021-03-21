import { connect } from "react-redux";
import Avatar from "./Avatar";

const mapStateToProps = state => {
    return {
        currentAvatar: state.currentAvatar,
        gender: state.gender
    };
};

export default connect(mapStateToProps)(Avatar);