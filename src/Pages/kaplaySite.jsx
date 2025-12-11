import { useEffect } from "react";
import NavBar from "../components/NavBar";
import kaplay from "kaplay";

function KaplayTestSite(){
    useEffect(() => {
        kaplay()
    })

    return (
        <>
            <NavBar />
            <canvas id="kaplayTestCanvas"></canvas>
        </>
    )
}

export default KaplayTestSite;