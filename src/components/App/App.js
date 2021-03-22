import Header from "../Header";
import CharacterCreate from "../CharacterCreate";
import Roster from "../Roster";
import colors from "../../colors.json";

const App = () => {

    const appStyle = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors["3flesh"]
    };

    return (
        <>
            <div style={appStyle}>
                <Header />
                <CharacterCreate />
                <Roster />
            </div>
        </>
    )
};

export default App;