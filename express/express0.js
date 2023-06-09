const express = require('express');
// const app = require('express')(); // you can also assign the express functionality directly 

const app = express();

app.get("/", (req, res) => {
    console.log("request received for home page");
    res.status(200).send("<h1>Homepage</h1>")
})

app.get("/info", (req, res) => {
    console.log("request received for info page");
    res.status(200).send("<h1>Info page</h1>")
})

app.get("/about", (req, res) => {
    console.log("request received for about page");
    res.status(200).send("<h1>About page</h1>")
})

app.get("*", (req, res) => {
    console.log("Invalid path entered");
    res.status(404).send("<h1>Page not found!!!</h1>")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})