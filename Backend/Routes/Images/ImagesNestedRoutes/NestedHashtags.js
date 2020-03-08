const imageHashtags = require('express').Router({mergeParams: true});
const { getRandomHashtags, createHashtag } = require("../../../Queries/HashtagQueries");

imageHashtags.get("/", getRandomHashtags);
imageHashtags.post("/", createHashtag);


module.exports = imageHashtags;