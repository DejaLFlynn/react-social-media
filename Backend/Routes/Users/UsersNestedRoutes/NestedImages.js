const usersImages = require('express').Router({mergeParams: true})

const { getImagesByUser } = require("../../../queries/users/users")

usersImages.get('/:id/images', getImagesByUser)

module.exports = usersImages;