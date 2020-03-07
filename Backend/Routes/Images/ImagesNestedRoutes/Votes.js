const imageVotes = require('express').Router({mergeParams: true});
const { addVote } = require("../../../Queries/Votes");

imageVotes.post("/", addVote);

module.exports = imageVotes;