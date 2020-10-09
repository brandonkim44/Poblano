Jbuilder.key_format camelize: :lower

@meals.each do |meal|
    json.set! meal.meal_name do
        json.extract! meal, :id, :meal_name, :description
        json.photoUrl url_for(meal.photo)
    end
end