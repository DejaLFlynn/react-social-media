const hashtags = require("express").Router()
const {createHashtags, getHashtag} = require("../Images/Images")


hashtags.post("/", createHashtags)


hashtags.get("/:id", getHashtag)



module.exports = hashtags