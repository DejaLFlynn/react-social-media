const hashtags = require("express").Router()
const { searchHashtag } = require("../../Queries/HashtagQueries");

const hashtagImageRouter = require("./HashtagsNestedRoutes/NestedImages");
hashtags.use("/:id/images", hashtagImageRouter)

hashtags.get("/", searchHashtag)

module.exports = hashtags