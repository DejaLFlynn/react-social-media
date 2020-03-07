const imageVotes = require('express').Router({mergeParams: true});
const { getImageVotes, addVote } = require("../../../Queries/Votes");

imageVotes.get("/", getImageVotes);
imageVotes.post("/", addVote);

module.exports = imageVotes;