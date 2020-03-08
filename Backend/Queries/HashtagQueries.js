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
            status: "Error",
            message: "Hashtags not created",
            payload: null
        })
    }
}

const getHashtag = async (req, res) => {
    try {
        let hashtag = await db.one("SELECT * FROM hashtags WHERE body = $1", req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Hashtag retrieved",
            payload: hashtag
        })
    } catch (err) {
        res.status(404).json({
            status: "Error",
            message: "Hashtag not found",
            payload: null
        })
    }
}

const getHashtags = async (req, res) => {
    try {
        let hashtags = await db.any("SELECT * FROM hashtags");
        res.status(200).json({
            status: "Success",
            message: "Found hashtags",
            payload: hashtags
        })
    } catch (err) {
        res.status(404).json({
            status: "Error",
            message: "Could not find any hashtags",
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
            status: "Error",
            message: "Could not find hashtag",
            payload: null
        })
    }
}

module.exports = { createHashtag, getHashtag, getHashtags, searchHashtag };