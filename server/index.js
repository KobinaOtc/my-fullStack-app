const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const postsRouter = require("./routes/post.js");

mongoose.connect("mongodb://localhost/postAppdb", {useMongoClient: true});
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors())

app.use("/posts", postsRouter)


let port = process.env.Port || 9000;
app.listen(port, () => {
  console.log(`server has started on port ${port}`);
})
