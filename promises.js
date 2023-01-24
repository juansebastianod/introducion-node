const { readFile } = require("fs");
const path = require("path");
const { resolve } = require("path");

function getText(path) {
  return new Promise((reject, resolve) => {
    readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    });
  });
}

getText("./data/primero.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
