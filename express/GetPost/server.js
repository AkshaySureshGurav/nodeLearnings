const express = require('express');
const {readFileSync, writeFile} = require('fs');

const app = express();

app.use((req, res, next) => {
    writeFile('./static/clients.txt', `Request-method: ${req.method}\n path visited: ${req.path}\n user-details: ${req.headers["user-agent"]}\n\n`, {flag: 'a'}, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
    next()
  });

app.use(express.static("static"))
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => {
    res.send("./static/index.html")
})

app.post("/addName", (req, res) => {
    const { name } = req.body;
    let data = JSON.parse(readFileSync("./static/data.json")); 
    let names = [...data.names];
    names.push(name);

    writeFile('./static/data.json', JSON.stringify({names}), (err) => {
        if (err) throw err;
    });

    res.send(`
        <h1>Name has been added</h1>
        <a href="index.html">Back home</a>
    `);
})

app.listen(5000, () => {
    console.log("server listening on port on 5000");
})
