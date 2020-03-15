const imageVotes = require('express').Router({mergeParams: true});
const { addVote, topVotedImages } = require("../../../Queries/VotesQueries");

imageVotes.post("/", addVote);

imageVotes.get("/", topVotedImages)

// imageVotes.get("/:id", topVotedImagesByUser)

module.exports = imageVotes;