const usersImages = require('express').Router({mergeParams: true})

const { getImagesByUser } = require("../../../Queries/UserQueries")


usersImages.get('/:id/images', getImagesByUser)

module.exports = usersImages