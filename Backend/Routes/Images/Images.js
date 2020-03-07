const images = require('express').Router();
const { getImages } = require('../../Queries/Images');

const imageVotesRouter = require("./ImagesNestedRoutes/Votes");
const imageHashtagRouter = require("./ImagesNestedRoutes/Hashtags");
images.use("/:id/votes", imageVotesRouter);
images.use("/:id/hashtags", imageHashtagRouter);


images.get("/", getImages);


module.exports = images;