var express = require("express");
const sequelize = require("../db/connection");
var router = express.Router();
const authChecker = require('../utils/authChecker');

//GET following users list
router.get("/following/:user_id", authChecker, async function (req, res) {
  const loggedId = req.params.user_id;

  try {
    const following = await sequelize.query(`
        SELECT DISTINCT * FROM user 
        INNER JOIN friend ON friend.user_friend2_id = user.id 
        WHERE friend.user_friend1_id = "${loggedId}" AND friend.status = 1               
      `);
    res.status(200).send(following[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

//GET NOT-following users list
router.get("/not-following/:user_id", authChecker, async function (req, res) {
  const loggedId = req.params.user_id;
  
  try {
    const notFollowing = await sequelize.query(
    `SELECT DISTINCT * FROM user
    WHERE id NOT IN (
    SELECT CASE
    WHEN user_friend1_id = "${loggedId}" THEN user_friend2_id
    ELSE user_friend1_id
    END AS friend_id
    FROM friend
    WHERE user_friend1_id = "${loggedId}" OR user_friend2_id = "${loggedId}") 
    AND id <> "${loggedId}"`,
      {
        type: sequelize.QueryTypes.SELECT,
        replacements: [loggedId, loggedId],
      }
    );
    res.status(200).send(notFollowing);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

//POST follow user
router.post("/:id", authChecker, async function (req, res) {
  const loggedId = req.body.logged_id;
  const followId = req.params.id;

  const isFollowing = await sequelize.query(
    "SELECT * FROM friend WHERE user_friend1_id = ? AND user_friend2_id = ?",
    { type: sequelize.QueryTypes.SELECT, replacements: [loggedId, followId] }
  );

  if (isFollowing.length > 0) {
    return res
      .status(400)
      .json({ error: "Usuario ya seguido. No se puede volver a seguir" });
  } else {
    try {
      const result = await sequelize.query(
        "INSERT INTO friend (status, user_friend1_id, user_friend2_id) VALUES (?, ?, ?)",
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [1, loggedId, followId],
        }
      );
      res.status(200).send({
        friendship_id: result[0],
        message: `Usuario ${loggedId} ahora sigue a usuario ${followId}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor. Usuario no encontrado");
    }
  }
});

//DELETE unfollow user
router.delete("/unfollow/:id", authChecker, async (req, res) => {
  const loggedId = req.body.logged_id;
  const unfollowId = req.params.id;

  const isFollowing = await sequelize.query(
    "SELECT * FROM friend WHERE user_friend1_id = ? AND user_friend2_id = ?",
    { type: sequelize.QueryTypes.SELECT, replacements: [loggedId, unfollowId] }
  );
  if (isFollowing.length > 0) {
    try {
      await sequelize.query(
        `DELETE FROM friend WHERE user_friend1_id = ${loggedId} AND user_friend2_id = ${unfollowId}`
      );
      res.status(200).send({
        message: `Usuario ${loggedId} ha dejado de seguir a usuario ${unfollowId}`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Error al dejar de seguir usuarios" });
    }
  } else {
    return res.status(400).json({ error: "Usuario no seguido" });
  }
});

module.exports = router;
