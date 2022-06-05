const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());

app.use("/user",require("./routes/user"));
app.get("/", (req, res) => res.send("wesh ya flesh"));

app.listen(5001, (err) => 
  err ? console.log(err) : console.log("server is running....")
);
