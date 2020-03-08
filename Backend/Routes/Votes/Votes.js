const votes = require("express").Router()
const { getVote } = require("../../Queries/VotesQueries")




votes.get("/:id", getVote)



module.exports = votes