var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET feedback listing. */
router.get('/', async function (req, res) {
    try {
        const feedbackList = await sequelize.query(
            "SELECT * FROM feedback", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(feedbackList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});

//Feedback posts
router.post("/", async function (req, res) {
    try {
        const { user_id_from, user_id_to, content } = req.body;
        console.log(user_id_from);
        const newFeedback = await sequelize.query(
            `INSERT INTO feedback (user_id_from, user_id_to, content) VALUES (?, ?, ?)`,
            {
                type: sequelize.QueryTypes.INSERT,
                replacements: [user_id_from, user_id_to, content],
            }
        );
        res.status(200).send({
            feedback_id: newFeedback[0],
            user_id_from,
            user_id_to,
            content,
        });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//Feedback put
router.put("/:feedback_id", async function (req, res) {
    try {
        const feedbackId = req.params.feedback_id;
        const { content } = req.body;

        const updatedFeedback = await sequelize.query(
            `UPDATE feedback SET content = ? WHERE feedback_id = ?`,
            {
                type: sequelize.QueryTypes.UPDATE,
                replacements: [content, feedbackId],
            }
        );
        if (updatedFeedback[1] === 0) {
            return res.status(404).send({ error: "Feedback not found" });
        }
        res.status(200).send({ success: true });
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});

//GET feedback with user info
router.get("/feed", async function (req, res) {
    try {
        const feedProfile = await sequelize.query(
            `SELECT * FROM user
          JOIN feedback ON user.id = feedback.user_id_from
          WHERE user.id;`,
            { type: sequelize.QueryTypes.SELECT }
        );
        res.send(feedProfile);
    } catch (e) {
        console.log(e);
        res.status(400).send({ error: e.message });
    }
});


module.exports = router;