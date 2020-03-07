const imageVotes = require('express').Router({mergeParams: true});
const { addVote } = require("../../../Queries/VotesQueries");

imageVotes.post("/", addVote);

module.exports = imageVotes;