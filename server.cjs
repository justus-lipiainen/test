const os = require("os");
const math = require("mathjs");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");
const express = require("express");
const Joi = require("joi");
const { createServer } = require("http");
const { Server } = require("socket.io");

const foods = [
    { id: 1, meals: ["Pizza", "Salad", "Soup"] },
    { id: 2, meals: ["Burger", "Fries", "Shake"] },
    { id: 3, meals: ["Sushi", "Miso Soup", "Rice"] }
];

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://justus-lipiainen.github.io', 'https://justus-lipiainen.github.io/test', 'http://localhost:5173/test']
}))


io.on("connection", (socket) => {
    console.log(`Connection with id: ${socket.id}`)
});

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

app.put("/api/foods/:id", (req, res) => {
    const food = foods.find(c => c.id === parseInt(req.params.id));

    food.meals = req.body.meals;
    res.send(food);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Server started. Port: ${port}`)});