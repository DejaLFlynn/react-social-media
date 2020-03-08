const hashtags = require("express").Router()
const { getHashtag } = require("../../Queries/HashtagQueries");

const userHashtagRouter = require("/:id/images") 
hashtags.use('/', userHashtagRouter);

hashtags.get("/:id", getHashtag)



module.exports = hashtags