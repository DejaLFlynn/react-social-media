const db = require("../db/db");

const getVote = async (req, res) => {
    try {
        let vote = await db.one("SELECT * FROM votes WHERE id = $1", req.params.id);
        res.status(200).json({
            status: "Success",
            message: "Retrieved vote",
            payload: vote
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Couldn't find vote",
            payload: null
        })
    }
}

const addVote = async (req, res) => {
    try {
        let addedVote = await db.one("INSERT INTO votes (voter_id, picture_id) VALUES (${voter_id}, ${picture_id}) RETURNING *", req.body);
        res.status(200).json({
            status: "Success",
            message: "New vote created",
            payload: addedVote
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Could not add vote",
            payload: null
        })
    }
}

const topVotedImages = async (req, res) => {
    try {
        let topImages = await db.any("SELECT picture, COUNT(votes.voter_id) AS total_votes FROM pictures JOIN votes ON votes.picture_id = pictures.id GROUP BY picture ORDER BY total_votes DESC LIMIT 10");
        res.status(200).json({
            status: "Success",
            message: "Retrieved top voted images",
            payload: topImages
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Couldn't find top images",
            payload: null
        })
    }
}

const findMaxVotes = async (req, res) => {
    try {
        let maxVote = await db.any("SELECT p.picture, COUNT(v.voter_id) AS total_votes FROM pictures p JOIN votes v ON v.picture_id = p.id GROUP BY p.picture ORDER BY total_votes DESC LIMIT 1");
        res.status(200).json({
            status: "Success ",
            message: "Max votes found",
            payload: maxVote
        })
    } catch (err) {
        res.status(404).json({
            status: err,
            message: "Couldn't find max vote",
            payload: null
        })
    }
}
module.exports = { findMaxVotes, getVote, addVote, topVotedImages };