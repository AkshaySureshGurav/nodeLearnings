var http = require('http');

//create a server object:
http.createServer(function (req, res) {

  //multiple pages handling
  if (req.url === '/') {
    res.write("Hello from home page")
  } else if (req.url === '/info') {
    res.write("Hello from info page")
  } else {
    res.write(
      `<h1>Oops! page not found</h1>
      <a href='/'>Back to home</a>`
    )
  }
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080