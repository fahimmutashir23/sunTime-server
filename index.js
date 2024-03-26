const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
          

const port = process.env.PORT || 5000;








app.get("/", (req, res) => {
    res.send("SunTime is running");
  });

app.listen(port, () => {
    console.log(`sunTime is running on port ${port}`);
})