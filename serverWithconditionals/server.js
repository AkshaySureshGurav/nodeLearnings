const http = require("http");
const { readFileSync } = require('fs');

const indexFile = readFileSync("index.html");
const styles = readFileSync("style.css");
const image1 = readFileSync("cat.jfif");
const image2 = readFileSync("dog.jfif");


http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(indexFile)
        res.end()
    } else if (req.url === '/style.css'){
        res.writeHead(200, {"content-type": "stylesheet"});
        res.write(styles)
        res.end()
    } else if (req.url === '/cat.jpeg'){
        res.writeHead(200, {"content-type": "image/jpeg"});
        res.write(image1)
        res.end()
    } else if (req.url === '/dog.jpeg'){
        res.writeHead(200, {"content-type": "image/jpeg"});
        res.write(image2)
        res.end() 
    } else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write("<h1>Page not found!!!</h1>")
        res.end()        
    }
 }).listen(5000)

