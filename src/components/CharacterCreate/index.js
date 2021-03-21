import { connect } from "react-redux";
import CharacterCreate from "./CharacterCreate";

const mapStateToProps = state => {
    return {
        // languages: state.language === "en" ? languages.en : languages.jp,
    };
};

export default connect(mapStateToProps)(CharacterCreate);