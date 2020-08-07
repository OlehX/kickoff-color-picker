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

app.get("/colors", async (_, res) => {
  const colors = await knex("colors");
  res.send(JSON.stringify(colors));
});

app.post("/", async (req, res) => {
  await knex("colors").insert(req.body.colors).then(function (result) {
    res.json({ success: true, message: 'ok' });
  });

});

app.delete("/", async (req, res) => {

  await knex("colors").where('id', '>=', req.body.startIndex).andWhere('id', '<=', req.body.endIndex).del().then(function (result) {
    res.json({ success: true, message: 'ok' });
  });

});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



