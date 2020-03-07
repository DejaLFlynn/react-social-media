const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 4000;

const usersRouter = require("./Routes/Users/Users")
const imagesRouter = require("./Routes/Images/Images")
const votesRouter = require("./Routes/Votes/Votes")
const hashtagsRouter = require("./Routes/Hashtags/Hashtags")

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/users", usersRouter)
app.use("/images", imagesRouter)
app.use("/votes", votesRouter)
app.use("/hashtags", hashtagsRouter)

app.listen(port, () => console.log(`Server running on Port: ${port}`))