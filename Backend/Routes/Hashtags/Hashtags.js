const hashtags = require("express").Router()
const {createHashtags, getHashtag} = require("../Images/Images")

const userHashtagRouter = require("/:id/images") 
hashtags.use('/', userHashtagRouter);

hashtags.post("/", createHashtags)


hashtags.get("/:id", getHashtag)



module.exports = hashtags