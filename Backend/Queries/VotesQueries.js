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
            status:"Error",
            message: "Couldn't find vote",
            payload: null
        })
    }
}

const addVote = async (req, res) => {
    try {
        let addedVote = await db.one("INSERT INTO votes (voter_id, picture_id) VALUES (${voter_id}, ${picture_id})", req.body);
        res.status(200).json({
            status: "Success",
            message: "New vote created",
            payload: addedVote
        })
    } catch (err) {
        res.status(404).json({
            status: "Error",
            message: "Could not add vote",
            payload: null
        })
    }
}

const findMaxVotes = async (req, res) => {
    try {
        let maxVote = await db.any("SELECT p.picture, COUNT(v.voter_id) AS total_votes FROM pictures p JOIN votes v ON v.picture_id = p.id GROUP BY p.picture ORDER BY total_votes DESC LIMIT 1");
        res.status(200).json({
            status: "Error",
            message: "Max votes found",
            payload: maxVote
        })
    } catch (err) {
        res.status(404).json({
            status: "Error",
            message: "Couldn't find max vote",
            payload: null
        })
    }
}
module.exports = { findMaxVotes, getVote, addVote };