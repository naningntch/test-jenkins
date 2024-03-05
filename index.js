const express = require("express");
const app = express();

const plusHandler = (req, res) => {
  const result = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.json(result);
};

const primeNumber = (req, res) => {
  const num = parseInt(req.params.num);
  let result = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  res.json(result);
};

app.get("/is_prime/:num", primeNumber);
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/getcode", (req, res) => res.send("today"));
app.get("/plus/:num1/:num2", plusHandler);
const server = app.listen(3001, () =>
  console.log("Example app listening on port 3001!")
);

module.exports = {
  plusHandler,
  server,
};
