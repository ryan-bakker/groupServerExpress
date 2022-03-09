const express = require("express");
const cors = require("cors");

const Artists = require("./models/artists");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// leave until later
require("./connection");
app.use(cors());

// app to use api routes
const router = express.Router();

app.use("/api", router);

router.get("/view-artists", function (req, res) {
  Artists.find().then((response) => {
    res.json(response);
  });
});

router.get("/view-artist-by-firstname/:name", function (req, res) {
  console.log(req.params.name);

  Artists.findOne({ firstname: req.params.name }).then((response) => {
    res.json(response);
  });
});

// catch bad endpoints on the api route only
router.get("/*", (req, res) => {
  return res.json({ result: "hey, no hacking please...." });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
