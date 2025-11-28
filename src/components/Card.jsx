import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import $ from "jquery";

function Card(props) {
    const socket = io("http://localhost:6767");
    let myId = socket.id;
    socket.on("connect", () => {
        myId = socket.id;
        $(`#idDis${props.id}`).text(`Your class: ${myId}`);
        console.log("Connected with ID:", myId);
        socket.emit("message", { data: "Hello from client!" });
        socket.on("msgToClient", (msg) => {
            console.log(msg);
        });
    });
    return (
        <div className={`card${props.class || ""}`}>
            <h2 id={`idDis${props.id}`}>Your id:</h2>
            <p></p>
        </div>
    );    
}

export default Card;