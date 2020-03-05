const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3000;

const usersRouter = require("./routes/Users/Users")
const imagesRouter = require("./routes/Images/Images")
const votesRouter = require("./routes/Votes/Votes")
const hashtagsRouter = require("./routes/Hashtags/Hashtags")

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/users", usersRouter)
app.use("/images", imagesRouter)
app.use("/votes", votesRouter)
app.use("/hashtags", hashtagsRouter)

app.listen(port, () => console.log(`Server running on Port: ${port}`)