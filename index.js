const express = require("express");
const app = express();

const plusHandler = (req, res) => {
  const result = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.json(result);
};

const is_prime = (req, res) => {
  const x = parseInt(req.params.x);

  if (isPrimeNumber(x)) {
    res.json({ result: "true" });
  } else {
    res.json({ result: "false" });
  }
};

const isPrimeNumber = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

app.get("/is_prime/:x", is_prime);
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
