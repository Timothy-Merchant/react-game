import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
    return {
        // languages: state.language === "en" ? languages.en : languages.jp,
    };
};

export default connect(mapStateToProps)(Header);