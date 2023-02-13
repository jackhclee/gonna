const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require("dotenv").config()

app.get("/", async function(req, res) {
  const { Client } = require('pg')
  const client = new Client({
  connectionString:  process.env.DATABASE_URL
})
  await client.connect()
 
  const dbRes = await client.query('SELECT name from prod.book where id = $1', [1])
  console.log(dbRes.rows[0].name) // Hello world!
  await client.end()
  res.send(dbRes.rows[0].name + new Date() + process.env.GITHUB_SHA);
  }
)

app.listen(port, () => console.log(`express server started at port: ${port}`));



