// require express
const express = require("express");

//initialize express
const app = express();

//middleware//
//static files
app.use(express.static("./public"));

//parser
app.use(express.urlencoded({ extended: false }));

//routes
app.post("/", (req, res) => {});

//port
const port = process.env.PORT || 8080;

//listener function
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
