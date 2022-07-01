const express = require("express");
const app = express();

const { menu } = require("../user");
app.use(express.json());

// app.use(express.static("./public"));
// form submit user for authorize
app.post("/contact", (req, res) => {
  const { name } = req.body;
  // console.log(name);
  return res.send(`Welcome ${name}`);
});

app.get("/api/users", (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.json(menu);
});

app.get("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const product = menu.find((product) => product.id == Number(id));

  console.log(product);
  return res.status(200).json({ okey: true, product: product });
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
