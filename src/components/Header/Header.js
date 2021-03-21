import colors from "../../colors.json"

const Header = () => {

    const headerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors["1olive"],
        color: colors["5beige"],
        marginBottom: "1rem"
    }

    return (
        <header style={headerStyle}>
            <h1>React RPG</h1>
        </header>
    )
}

export default Header;