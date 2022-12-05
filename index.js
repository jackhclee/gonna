const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.send("Hello World" + new Date());
  }
)

app.listen(port, () => console.log(`express server started at port: ${port}`));



