const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.use("/posts", require("./routes/posts"));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => console.log(`Connected to MongoDB`))
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))