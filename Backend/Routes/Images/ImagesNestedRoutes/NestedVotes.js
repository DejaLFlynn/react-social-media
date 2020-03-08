const imageVotes = require('express').Router({mergeParams: true});
const { addVote, topVotedImages } = require("../../../Queries/VotesQueries");

imageVotes.post("/", addVote);

imageVotes.get("/", topVotedImages)

module.exports = imageVotes;