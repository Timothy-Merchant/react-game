import { connect } from "react-redux";
import Roster from "./Roster";

const mapStateToProps = state => {
    return {
        party: state.party
    }
}

export default connect(mapStateToProps)(Roster);