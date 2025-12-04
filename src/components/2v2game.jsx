import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import $ from "jquery";

function TwoPGame() {
    let card;
    card = { id: "placeholder" };

    useEffect(() => {
        $("#infoBubble").text("Connecting to server...");
        $("#findGame").hide();
        $("#opIdDis").hide();
        $("#pIdDis").hide();
        const socket = io.connect('https://test-d2mf.onrender.com');
        //const socket = io.connect('http://localhost:6767');

        socket.on("connect", () => {
            $("#findGame").hide();
            $("#opIdDis").hide();
            $("#pIdDis").hide();
            $("#infoBubble").text("Connected to server!\nID: " + socket.id);
            console.log("Connected to server with ID:", socket.id);
            setTimeout(() => {
                $("#infoBubble").text("");
                $("#findGame").show();
            }, 2000);
            $("#findGame").on("click",() => {
                $("#findGame").hide();
                $("#infoBubble").text("Finding Game...");
                $("#infoBubble").show();
                console.log("Finding Game...");
                socket.emit("findOpponent", { playerId: socket.id });
            });

            socket.on("opponentFound", (data) => {
                $("#opIdDis").show();
                $("#pIdDis").show();
                $("#infoBubble").hide();
                console.log("Opponent Found With Id:", data);
                console.log("Your Id Is:", socket.id);
                console.log(data);
                $("#opIdDis").text("Opponents CID: " + data);
                $("#pIdDis").text("Your CID: " + socket.id);
            })

            socket.on("opponentLeft", () => {
                $("#opIdDis").hide();
                $("#pIdDis").hide();
                $("#infoBubble").text("Your opponent has left the game.");
                $("#infoBubble").show();
                console.log("Your opponent has left the game.");
                setTimeout(() => {
                    $("#infoBubble").text("");
                    $("#findGame").show();
                }, 2000);
            });
        })
        return () => { socket.disconnect() };
    }, []);
    return (
        <div>
            <h2 id="opIdDis">Opponents CID:</h2>
            <h2 id="pIdDis">Your CID:</h2>
            <button id="findGame">Find match</button>
            <h1 id="infoBubble"></h1>
        </div>
    );
}

export default TwoPGame;