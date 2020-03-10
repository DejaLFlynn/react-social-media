const db = require("../db/db");

const createHashtag = async (req, res) => {
    try {
        let hashtags = await db.any("INSERT INTO hashtags (picture_id, body) VALUES (${picture_id}, ${body})", req.body);
        res.status(200).json({
            status: "Success",
            message: "Created hashtags",
            payload: hashtags
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Hashtags not created",
            payload: null
        })
    }
}

const getTwoRandPics = async (req, res) => {
    try {
        let hashtags = await db.any("SELECT p.picture, ARRAY_AGG (h.body) user_hashtags FROM pictures p JOIN hashtags h ON h.picture_id = p.id GROUP BY p.picture, p.id ORDER BY random() LIMIT 2");
        res.status(200).json({
            status: "Success",
            message: "Found random hashtags",
            payload: hashtags
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Could not find any hashtags",
            payload: null
        })
    }
}
const getRandPicByHashtags = async (req, res) => {
    try {
        let hashtags = await db.any("SELECT p.picture, h.body FROM pictures p JOIN hashtags h ON h.picture_id = p.id GROUP BY p.picture, p.id, h.body HAVING h.body = $1 ORDER BY random() LIMIT 10", req.params.search);
        res.status(200).json({
            status: "Success",
            message: "Found random images based on specified hashtag",
            payload: hashtags
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Could not find any images",
            payload: null
        })
    }
}



const searchHashtag = async (req, res) => {
    try {
        let search = await db.any("SELECT body FROM hashtags WHERE body LIKE '#%'");
        res.status(200).json({
            status: "Success",
            message: "Found hashtags",
            payload: search
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Could not find hashtag",
            payload: null
        })
    }
}

const imagesByHashtag = async (req, res) => {
    try {
        let images = await db.any("SELECT pictures.picture, ARRAY_AGG (hashtags.body) image_hashtags FROM hashtags JOIN pictures ON pictures.id = hashtags.picture_id GROUP BY pictures.id, pictures.picture HAVING pictures.id = $1", req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Retrieved images by hastag",
            payload: images
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Couldn't find images by hashtag",
            payload: null
        })
    }
}

module.exports = { createHashtag, getTwoRandPics, getRandPicByHashtags, searchHashtag, imagesByHashtag };