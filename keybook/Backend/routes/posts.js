var express = require("express");
const sequelize = require("../db/connection");
var router = express.Router();

/* GET posts listing. */
router.get("/", async function (req, res) {
  try {
    const postsList = await sequelize.query("SELECT * FROM post", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).send(postsList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

//POST posts
router.post("/", async function (req, res) {
  try {
    const { post_id_user, post_content } = req.body;
    console.log(post_id_user);
    const newPost = await sequelize.query(
      `INSERT INTO post (post_id_user, post_content) VALUES (?, ?)`,
      {
        type: sequelize.QueryTypes.INSERT,
        replacements: [post_id_user, post_content],
      }
    );
    res.status(200).send({
      post_id: newPost[0],
      post_id_user,
      post_content,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

//GET posts with user info
router.get("/feed", async function (req, res) {
  try {
    const posts = await sequelize.query(
      `SELECT * FROM user
        JOIN post ON user.id = post.post_id_user
        WHERE user.id`,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.send(posts);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

router.get("/", async function (req, res) {
  try {
    const posts = await sequelize.query(
      `SELECT * FROM user
         JOIN post ON user.id = post.post_id_user
         WHERE user.id
         ORDER BY post.id DESC
         LIMIT 4;`,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.send(posts);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
