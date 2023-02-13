const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require("dotenv").config()

app.get("/", function(req, res) {
const { Client } = require('pg')
const client = new Client()
await client.connect()
 
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()


    res.send(res.rows[0].message + new Date() + process.env.GITHUB_SHA);
  }
)

app.listen(port, () => console.log(`express server started at port: ${port}`));



