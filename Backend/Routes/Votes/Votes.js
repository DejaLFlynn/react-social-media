const votes = require("express").Router()
const {createVote, getVote} = require("../../Queries/Votes")


const userVotesRouter = require("../Images") 
votes.use('/', userVotesRouter);

votes.post("/", createVote)


votes.get("/votes", getVote)



module.exports = votes