const express = require("express");
const path = require("path");

const PORT = 1234;

const app = express();

const works = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/work.html"));
});

app.post("/api/work", (req, res) => {
  const data = req.body;

  console.log(data);

  works.push(data);

  res.json(works);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
