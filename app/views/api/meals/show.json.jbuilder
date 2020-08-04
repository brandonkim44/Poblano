Jbuilder.key_format camelize: :lower

json.set! meal.meal_name do
    json.array! ingredients do |ingredient|
        json.extract! ingredient, :calorites, :fats, :protein
        json.photoUrl url_for(ingredient.photo)
    end
end