const usersImages = require('express').Router({mergeParams: true})

const { getImagesByUser, createImage} = require("../../../Queries/UserQueries")


usersImages.get('/:id/images', getImagesByUser)
usersImages.post('/:id/images', createImage)


module.exports = usersImages