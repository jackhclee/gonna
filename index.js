const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require("dotenv").config()

app.get("/", function(req, res) {
    res.send("Hello World" + new Date() + process.env.GITHUB_SHA);
  }
)

app.listen(port, () => console.log(`express server started at port: ${port}`));



