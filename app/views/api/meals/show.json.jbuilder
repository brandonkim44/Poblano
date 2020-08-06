Jbuilder.key_format camelize: :lower

json.set! @meal.meal_name do
    json.array! @ingredients do |ingredient|
        json.extract! ingredient, :id, :ingredient_name, :calories, :fats, :protein, :carbs
    end
end