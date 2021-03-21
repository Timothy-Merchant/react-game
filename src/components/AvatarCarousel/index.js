import { connect } from "react-redux";
import AvatarCarousel from "./AvatarCarousel";

const mapStateToProps = state => {
    return {
        // languages: state.language === "en" ? languages.en : languages.jp,
    };
};

export default connect(mapStateToProps)(AvatarCarousel);