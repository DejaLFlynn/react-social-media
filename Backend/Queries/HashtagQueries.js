const db = require("../db/db");

const createHashtags = async (req, res) => {
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
        let hashtag = await db.one("SELECT * FROM hashtags WHERE id = $1", req.params.id);
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

module.exports = { createHashtags, getHashtag, searchHashtag };