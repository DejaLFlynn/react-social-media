const imageHashtags = require('express').Router({mergeParams: true});
const { getHashtags, createHashtag } = require("../../../Queries/Hashtags");

imageHashtags.get("/", getHashtags);
imageHashtags.post("/", createHashtag);

module.exports = imageHashtags;