const router = require("express").Router();
const User = require("./users-model");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.getAll();
    if (!users) {
      next({ message: "could not get users" });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  User.getById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => next(err));
});

router.post("/register", (req, res, next) => {
  try {
    User.add(req.body)
      .then((newUser) => {
        res
          .status(201)
          .json({
            message: `New user: ${newUser.username} registered successfully!`,
          });
      })
      .catch((err) => next(err));
  } catch (err) {
    next(err);
  }
    // ---------------- FROM TEMPLATE ---------------- 
    // function getAllUsers() { return db('users') }

// async function insertUser(user) {
//   // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//   // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//   const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//   return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
// }
});

module.exports = router;
