const express = require('express');

// Instance of express
const app = express();



///checking for attribute in URL
app.get("/", (req, res) => {
    console.log(req.headers["user-agent"]);
    res.send("<h1>Home page</h1>");
    res.end();
})

app.get("/parameter/:attribute", (req, res) => {
    res.json({
        status: "success",
        data: req.params
    });
    res.end();
})


// accepting key-value pair data related 
app.get("/query", (req, res) => {
    res.json({
        status: "success",
        data: req.query
    });
    res.end();
})


app.listen(5000, () => {
    console.log("Server running on port 5000");
})