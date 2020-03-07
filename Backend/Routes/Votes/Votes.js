const votes = require("express").Router()
const {createVote, getVote} = require("")


const userVotesRouter = require("/:id/images") 
votes.use("/:id/images", userVotesRouter)

votes.post("/", createVote)


votes.get("/:id", getVote)



module.exports = votes