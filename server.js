require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { connectDB } = require("./connection");
const config = require("./config");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to mongo db server
connectDB();

app.use("/notes", require("./routes/notes"));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${config.PORT}`)
);
