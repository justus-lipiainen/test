require('dotenv').config();
const os = require("os");
const math = require("mathjs");
const cors = require("cors");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const nodemailer = require("nodemailer");

const foods = [
    { id: 1, meals: ["Pizza", "Salad", "Soup"] },
    { id: 2, meals: ["Burger", "Fries", "Shake"] },
    { id: 3, meals: ["Sushi", "Miso Soup", "Rice"] }
];

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {cors: {origin: "*"}});

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://justus-lipiainen.github.io', 'https://justus-lipiainen.github.io/test', 'http://localhost:5173/test']
}));


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

const mailOptions = {
    from: 'lipiainen.noreply@gmail.com',
    to: 'justus.lipiainen@gmail.com',
    subject: 'HTML Email',
    html: '<h1>Hello!</h1><p>This is an HTML email.</p>'
};


transporter.sendMail(mailOptions);

app.get("/", (req, res) => {
    const response = [
        { message: "Hello World" }
    ]
    res.send(response);
})


app.get("/api/foods", (req, res) => {
    res.send(foods);
});

app.get("/api/foods/:id", (req, res) => {
    const food = foods.find(c => c.id === parseInt(req.params.id));
    res.send(food);
});

app.post("/api/foods", (req, res) => {
    const food = {
        id: foods.length + 1,
        meals: req.body.meals
    };
    foods.push(food);
    res.send(food);
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    io.emit("welcome", { message: "Welcome to the Socket.IO server!" });

    socket.on("message", (msg) => {
        console.log("Received message from client:", msg.data);
        socket.emit("msgToClient", { data: `Message from (${socket.id}) ${msg.data}` });
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected:", socket.id);
    });
});

const port2 = process.env.PORT || 6767;
httpServer.listen(port2, () => {console.log(`Server started. Port: ${port2}`)});