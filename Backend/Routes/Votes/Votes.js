const votes = require("express").Router()
const { getVote, findMaxVotes } = require("../../Queries/VotesQueries")

votes.get("/:id", getVote)

votes.get("/", findMaxVotes)

module.exports = votes