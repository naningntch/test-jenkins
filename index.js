const express = require("express");
const app = express();

const plusHandler = (req, res) => {
  const result = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.json(result);
};

<<<<<<< HEAD
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/getcode", (req, res) => res.send("111"));
app.get("/plus/:num1/:num2", plusHandler);
const server = app.listen(3001, () =>
  console.log("Example app listening on port 3001!")
);
=======
app.get("/", (req, res) => res.send("Hello World!"))
app.get("/getcode", (req, res) => res.send("today"))
app.get("/plus/:num1/:num2",plusHandler)
const server = app.listen(3001, () => console.log("Example app listening on port 3001!"))
>>>>>>> ccc3cd6ca48b5dbb2a1a0dc97360933a5adc122f

module.exports = {
  plusHandler,
  server,
};
