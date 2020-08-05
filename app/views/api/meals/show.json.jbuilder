Jbuilder.key_format camelize: :lower

json.set! @meal.meal_name do
    json.array! @ingredients do |ingredient|
        json.extract! ingredient, :ingredient_name, :calories, :fats, :protein, :carbs
        json.photoUrl url_for(ingredient.photo)
    end
end