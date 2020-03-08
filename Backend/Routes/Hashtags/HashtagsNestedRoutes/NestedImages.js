const hashtagImages = require('express').Router({mergeParams: true});
const { imagesByHashtag } = require("../../../Queries/HashtagQueries")

hashtagImages.get("/", imagesByHashtag);

module.exports = hashtagImages;