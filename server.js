const express = require("express");
const app = express();
app.listen("5000", function () {
  console.log("server listening on port 5000");
});
app.use(express.json());
const details_farmer=require("./details_farmer.js");
app.use(express.static("public"));
app.use("/auth", details_farmer);


