import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useEffectEvent } from "react";
import $ from "jquery"

function NavBar() {
    const navigate = useNavigate();

    useEffect(() => {
        $("#navicon1").on("click", () => {
            navigate("/home")
        })

        $("#navicon2").on("click", () => {
            navigate("/home")
        })

        $("#navicon3").on("click", () => {
            navigate("/mpg")
        })
    })

    return (
        <div className="nav-bar">
            <ul id="navBar">
                <li id="navicon1" className="navicon"><h1>My Application</h1></li>
                <li id="navicon2" className="navicon">Home</li>
                <li id="navicon3" className="navicon">Multiplayer Game</li>
            </ul>
        </div>
    );
}

export default NavBar;