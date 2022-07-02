const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require("express");
const app = express();


const { menu } = require("./user");
// Middleware

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname,"./public")));
// form submit user for authorize
app.post("/contact", (req, res) => {
  const { name } = req.body;
  // console.log(name);
  return res.send(`Welcome ${name}`);
});

app.get("/api/users", (req, res) => {
  res.json(menu);
});

app.get("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const product = menu.find((product) => product.id == Number(id));

  console.log(product);
  return res.status(200).json({ okey: true, product: product });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port 3000");
});
