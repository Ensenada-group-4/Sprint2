var express = require("express");
const sequelize = require("../db/connection");
var router = express.Router();

//GET posts with user info of following users
router.get("/feed/:id", async function (req, res) {
  const loggedId = req.params.id;

  try {
    const posts = await sequelize.query(
      `SELECT * FROM post
      JOIN user ON user.id = post.post_id_user
      WHERE post.post_id_user IN (SELECT friend.user_friend2_id FROM friend WHERE friend.user_friend1_id = ${loggedId}) 
      OR post.post_id_user = ${loggedId}          
      ORDER BY post.post_id DESC`,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.send(posts);
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
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
    console.log(newPost);
    res.status(200).json({
      post_id: newPost[0],
      post_id_user,
      post_content,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
