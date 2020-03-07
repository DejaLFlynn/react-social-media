const votes = require("express").Router()
const { getVote } = require("../../Queries/VotesQueries")




votes.get("/votes", getVote)



module.exports = votes