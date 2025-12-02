import "../components/NavBar.jsx";
import NavBar from '../components/NavBar.jsx';
import Card from '../components/Card.jsx';
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import $ from "jquery";

function MultiplayerGame() {
    let card;
    card = { id: "placeholder" };

    useEffect(() => {
        const socket = io.connect("http://localhost:6767");
        socket.on("connect", () => {
            let myId = socket.id;
            setTimeout(() => { $(`#idDis${card.id}`).text(`Your id: ${myId}`); }, 100);
            console.log("Connected with ID:", myId);
            $("#idDis"+card.id).html("Your id: " + myId);
            socket.emit("message", { data: "Hello from client!" });
            socket.on("msgToClient", (msg) => {
                console.log(msg);
            });
            socket.emit("updatePLoc", { x: 10, y: 20 });
            socket.on("pLocUpdated", (data) => {
                console.log("Player location updated:", data);
            });
        });
        return () => { socket.disconnect() };
    }, []);
    return (
        <>
            <NavBar />
            <Card id={card.id} />
        </>
    );
}

export default MultiplayerGame;
