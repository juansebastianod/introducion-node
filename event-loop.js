// require("colors");
// console.log("first".bgGreen);
// console.log("second".bgBlue);
// console.log("thrit".bgRed);
const http = require("http");

const local = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("hola mundo");
    res.end();
  }
  if (req.url == "/about") {
    res.write("dime");
    res.end();
  }
});

local.listen(3000);
