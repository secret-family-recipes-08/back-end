const Recipe = require("./recipes-model")
const router = require("express").Router()

router.get("/", (req, res, next) => {
  Recipe.findAll()
    .then((recipes) => {
      res.status(200).json(recipes)
    })
    .catch((err) => next(err))
})

router.get("/:id", (req, res, next) => {
  const { id } = req.params
  Recipe.findById(id)
    .then((recipe) => {
      if (!recipe) {
        return next({
          status: 404,
          message: `could not find recipe with id ${id}`,
        })
      }
      res.status(200).json(recipe)
    })
    .catch((err) => next(err))
})

router.post("/", (req, res, next) => {
  Recipe.add(req.body)
    .then((newRecipe) => {
      res.status(201).json(newRecipe)
    })
    .catch((err) => next(err))
})

// const updatePayload = (req, res, next) => {
//   const { recipe_id, recipe_name, recipe_instructions, recipe_ingredients, category_id, category_name, source_id, source_name } = req.body;
//   const user_id = req.user_id;

//   if(!recipe_id|| !recipe_name || !recipe_instructions || !recipe_ingredients || !category_id || !category_name || !source_id || !source_name ) res.status(400).json({message: "You must include recipe_id, recipe_name, recipe_instructions, recipe_ingredients, category_id, category_name, source_id, source_name "});
//   else if(typeof recipe_id !== "number" || typeof recipe_name !== "string" || typeof recipe_instructions !== "string" || typeof recipe_ingredients !== "string" || typeof category_id !== "number" || typeof category_name !== "string" || typeof source_id !== "number" || typeof source_name !== 'string') res.status(400).json({message: "recipe_name, recipe_instructions, and recipe_ingredients must be of type string and id must be of type number"});
//   else {
//     Recipe.findById(id).then(recipe => {
//       if(!recipe) res.status(400).json({message: `recipe of id ${recipe_id} does not exist`});
//       else {

//         req.payload = {recipe_id, recipe_name, recipe_instructions, recipe_ingredients, category_id, category_name, source_id, source_name};
//         next();
//       }
//     })
//   }
// };

router.put("/:id", (req, res) => {
  // res.send('Resquest to router put')
  console.log("ID: ", req.params.id)
  console.log("Body: ", req.body)
  Recipe.update(req.params.id, req.body)
    .then((recipe) => {
      console.log(recipe)
      res.status(200).json(recipe)
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
        where: "updating recipe",
      })
    })
})

router.delete("/:id", (req, res, next) => {
  Recipe.deleteById(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "Recipe Removed",
      })
    })
    .catch((err) => next(err))
})

module.exports = router
