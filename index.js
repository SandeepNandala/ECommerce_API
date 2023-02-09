const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

// buit-in middleware to parse url requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// using express routers
app.use(require("./routes"));

// listening to the port 8000;
app.listen(port, (err) => {
  if (err) {
    console.log("error in running app on port", port);
  }
  console.log("app is running successfully on port", port);
});
