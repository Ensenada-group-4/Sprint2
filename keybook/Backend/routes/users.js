var express = require("express");
const sequelize = require("../db/connection");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = 10;

/* GET users listing. */
router.get("/", async function (req, res) {
  try {
    const usersList = await sequelize.query("SELECT * FROM user", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).send(usersList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

//GET user by id
router.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const result = await sequelize.query(
    `SELECT * FROM user WHERE id = ${userId}`
  );
  if (result[0].length) {
    res.status(200).send(result[0][0]);
  } else {
    res.status(404).send({ error: "Usuario no encontrado" });
  }
});

//POST create new user
router.post("/register", async function (req, res) {
  try {
    const { name, lastName, dob, city, country, phone, email, password, linkedin } =
      req.body;
    const blankPhoto = "https://i.postimg.cc/SNk2LBzX/blank-Avatar.png";
    const education = "Añada formación"
    const tools = "Añada herramientas"
    const language = "Añada idiomas"
    const hobby = "Añada  hobbies"

    const hashPassword = await bcrypt.hash(password, salt);

    const emailExists = await sequelize.query(
      "SELECT * FROM user WHERE email = ?",
      { type: sequelize.QueryTypes.SELECT, replacements: [email] }
    );
    if (emailExists.length > 0) {
      return res.status(400).json({ error: "El email ya está registrado" });
    } else {
      const newUser = await sequelize.query(
        `INSERT INTO user (name, last_name, email, password, date_of_birth, profile_picture, city, country, phone, studies_course, tools_name, language_name, hobby_name, linkedin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [
            name,
            lastName,
            email,
            hashPassword,
            dob,
            blankPhoto,
            city,
            country,
            phone,
            education,
            tools,
            language,
            hobby,
            linkedin
          ],
        }
      );
      res.status(200).send({
        id: newUser[0]
      });
      console.log("Usuario creado con éxito");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

//POST login
router.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await sequelize.query(
      `SELECT * FROM user WHERE  email = '${email}'`
    );
    if (result[0].length) {
      const validPassword = await bcrypt.compare(
        password,
        result[0][0].password
      );
      if (validPassword) {
        const token = jwt.sign({ id: result[0][0].id }, process.env.JWT_KEY, { expiresIn: "2h" });
        res.status(200).send({ id: result[0][0].id, token: token })
      } else {
        res.status(400).send({ error: "Contraseña incorrecta" });
      }
    } else {
      res.status(400).send({ error: "Email no encontrado en base de datos" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

//PUT user by id
router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, lastName, dob, city, country, phone, password, linkedin, education, tools, languages, hobbies } = req.body;
  const email = ""  
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await sequelize.query(
      `UPDATE user SET 
      name =  IF('${name}' = "", name, '${name}'),
      last_name = IF('${lastName}' = "", last_name, '${lastName}'),       
      email = IF('${email}' = "", email, '${email}'),
      password = IF('${hashPassword}' = "", password, '${hashPassword}'),
      date_of_birth = IF('${dob}' = "", date_of_birth, '${dob}'),
      city = IF('${city}' = "", city, '${city}'),
      country= IF( '${country}' = "", country, '${country}'),
      phone = IF( '${phone}' = "", phone, '${phone}'),
      studies_course = IF('${education}' =  "", studies_course, '${education}'),
      tools_name = IF('${tools}' = "", tools_name, '${tools}'),
      language_name = IF('${languages}' = "", language_name, '${languages}'),
      hobby_name = IF('${hobbies}' = "", hobby_name, '${hobbies}'),
      linkedin = IF('${linkedin}' = "", linkedin, '${linkedin}')
      WHERE id = ${userId}`
    );
    res.status(200).send({ message: "Datos de usuario actualizados correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error al actualizar datos de usuario" });
  }
});

// DELETE user by ID
router.delete("/:id/delete", async (req, res) => {
  const userId = req.params.id;
  try {
    await sequelize.query(`DELETE FROM user WHERE id = ${userId}`);
    res.status(200).send({ message: "Cuenta borrada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error al borrar cuenta" });
  }
});

// Funcion que hace debugg
global.debug = function () {
  debugger;
};
// //GET user by name or email (based on input)
//para ver que funcona en postman se debe colocar en params key :searchKey y en value el nombre a buscar ej:adrian
/* en body pegar este json {
  "loggedInUserId": 1
} que seria el id del usuario logeado para que no lo muestre en el grid de amigos
la url sera http://localhost:3000/users/user?searchKey=adrian y metodo get*/

router.get("/user", async function (req, res) {
  const { searchKey } = req.query;
  const { loggedInUserId } = req.body; // obtener el ID del usuario logueado del cuerpo de la solicitud

  try {
    const personas = searchKey
      ? await sequelize.query(
        `SELECT * FROM user WHERE (name = :searchKey OR email = :searchKey) AND id != :loggedInUserId`,
        {
          replacements: { searchKey, loggedInUserId },
          type: sequelize.QueryTypes.SELECT,
        }
      )
      : await sequelize.query(
        "SELECT * FROM user WHERE id != :loggedInUserId",
        {
          replacements: { loggedInUserId },
          type: sequelize.QueryTypes.SELECT,
        }
      );

    global.debug(); // Detener la ejecución y examinar el objeto "personas"
    console.log(personas);
    res.send(personas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
