const htpp = require("http");

htpp
  .createServer((request, response) => {
    response.write("<h1>hola mundo</h1>");

    response.end();
  })
  .listen(3000);
