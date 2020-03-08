const hashtags = require("express").Router()
const { getHashtag } = require("../../Queries/HashtagQueries");


hashtags.get("/:id", getHashtag)



module.exports = hashtags