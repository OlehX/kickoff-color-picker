const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex")(require("./knexfile"));

const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

knex.on("query", ({ sql }) => console.log(sql));

app.get("/greeting", async (_, res) => {
  const [greeting] = await knex("greetings").limit(1);

  res.send(JSON.stringify(greeting));
});
app.get("/palettes", async (_, res) => {
  const [palettes] = await knex("palettes");

  res.send(JSON.stringify(palettes));
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
