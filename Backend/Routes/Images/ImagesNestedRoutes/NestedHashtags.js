const imageHashtags = require('express').Router({mergeParams: true});
const { getTwoRandPics, createHashtag, getRandPicByHashtags } = require("../../../Queries/HashtagQueries");

imageHashtags.get("/", getTwoRandPics);
imageHashtags.get("/:search", getRandPicByHashtags);
imageHashtags.post("/", createHashtag);


module.exports = imageHashtags;