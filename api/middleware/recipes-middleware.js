function validateRecipe(req, res, next) {
    const { recipe_name:title, source_id:source, recipe_ingredients: ingredients, recipe_instructions: instructions,  category_id:category } = req.body
    if (
        !title || !title.trim() || 
        !source || !source.trim() || 
        !ingredients || !ingredients.trim() || 
        !instructions || !instructions.trim() || 
        !category || !category.trim()) {
            res.status(400).json({
                message: 'title, ingredients, instructions, source, and category are required'
            })
    } else {
        next()
    }
}

module.exports = {
    validateRecipe
}