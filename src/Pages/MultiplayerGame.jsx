import "../components/NavBar.jsx";
import NavBar from "../components/NavBar.jsx";
import TwoPGame from "../components/2v2game.jsx";

function MultiplayerGame() {
    return (
        <>
            <NavBar />
            <div className="mainContent">
                <TwoPGame />
            </div>
        </>
    );
}

export default MultiplayerGame;
