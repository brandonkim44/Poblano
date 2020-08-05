# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Ingredient.destroy_all
Meal.destroy_all
Build.destroy_all

User.create!([{
  first_name: "John",
  last_name: "Legend",
  phone_number: "7039756696",
  email: "jlegend@gmail.com",
  country: false,
  reward_points: 0,
  password_digest: BCrypt::Password.create('password')
},
{
  first_name: "Brandon",
  last_name: "Kim",
  phone_number: "7039397471",  
  email: "brandonkim@virginia.edu",
  country: true,
  reward_points: 100,
  password_digest: BCrypt::Password.create('password')
},
{
  first_name: "False",
  last_name: "Plswork",
  phone_number: "7039397000",  
  email: "test@gmail.com",
  country: false,
  reward_points: 100,
  password_digest: BCrypt::Password.create('password')
},
{
  first_name: "Guest",
  last_name: "Login",
  phone_number: "7039301123",  
  email: "demologin@gmail.com",
  country: true,
  reward_points: 600,
  password_digest: BCrypt::Password.create('password')
}])

require 'open-uri'

# Ingredient.create!(
  

tortilla = Ingredient.create({
  ingredient_name: "Flour Tortilla (Burrito)",
  calories: 320,
  fats: 9,
  carbs: 50,
  protein: 8,
  filename: "tortilla"
})

barbacoa = Ingredient.create({
  ingredient_name: "Barbacoa",
  calories: 170,
  fats: 7,
  carbs: 2,
  protein: 24,
  filename: "barbacoa"
})

carnitas = Ingredient.create({
  ingredient_name: "Carnitas",
  calories: 210,
  fats: 12,
  carbs: 0,
  protein: 23, 
  filename: "carnitas"
})

chicken = Ingredient.create({
  ingredient_name: "Chicken",
  calories: 180,
  fats: 7,
  carbs: 0,
  protein: 32,
  filename: "chicken"
})

sofritas = Ingredient.create({
  ingredient_name: "Sofritas",
  calories: 150,
  fats: 10,
  carbs: 9,
  protein: 8,
  filename: "sofritas"
})

steak = Ingredient.create({
  ingredient_name: "Steak",
  calories: 150,
  fats: 6,
  carbs: 1,
  protein: 21,
  filename: "steak"
})

veggie = Ingredient.create({
  ingredient_name: "Veggie",
  calories: 230,
  fats: 22,
  carbs: 8,
  protein: 2,
  filename: "veggie"
})

brownrice = Ingredient.create({
  ingredient_name: "Cilantro-Lime Brown Rice",
  calories: 210,
  fats: 6,
  carbs: 36,
  protein: 4,
  filename: "brownrice" 
})

whiterice = Ingredient.create({
  ingredient_name: "Cilantro-Lime White Rice",
  calories: 210,
  fats: 4,
  carbs: 40,
  protein: 4,
  filename: "whiterice" 
})

blackbeans = Ingredient.create({
  ingredient_name: "Black Beans",
  calories: 130,
  fats: 2,
  carbs: 22,
  protein: 8,
  filename: "blackbeans"
})

pintobeans = Ingredient.create({
  ingredient_name: "Pinto Beans",
  calories: 130,
  fats: 2,
  carbs: 21,
  protein: 8,
  filename: "pintobeans"
})

fajita = Ingredient.create({
  ingredient_name: "Fajita Vegetables",
  calories: 20,
  fats: 0,
  carbs: 5,
  protein: 1,
  filename: "fajita" 
})

tomato = Ingredient.create({
  ingredient_name: "Fresh Tomato Salsa",
  calories: 25,
  fats: 0,
  carbs: 4,
  protein: 0,
  filename: "tomato"
})

guac = Ingredient.create({
  ingredient_name: "Guacamole",
  calories: 230,
  fats: 22,
  carbs: 8,
  protein: 2,
  filename: "guac"
})

cheese = Ingredient.create({
  ingredient_name: "Monterey Jack Cheese",
  calories: 110,
  fats: 8,
  carbs: 1,
  protein: 6,
  filename: "cheese" 
})

queso = Ingredient.create({
  ingredient_name: "Queso Blanco",
  calories: 120,
  fats: 9,
  carbs: 4,
  protein: 5,
  filename: "queso"
})

cornsalsa = Ingredient.create({
  ingredient_name: "Roasted Chili-Corn Salsa",
  calories: 80,
  fats: 2,
  carbs: 16,
  protein: 3,
  filename: "cornsalsa"
})

sourcream = Ingredient.create({
  ingredient_name: "Sour Cream",
  calories: 110,
  fats: 9,
  carbs: 2,
  protein: 2,
  filename: "sourcream"
})

greensalsa = Ingredient.create({
  ingredient_name: "Tomatillo Green-Chili Salsa",
  calories: 15,
  fats: 0,
  carbs: 4,
  protein: 0,
  filename: "greensalsa" 
})

redsalsa = Ingredient.create({
  ingredient_name: "Tomatillo Red-Chili Salsa",
  calories: 30,
  fats: 0,
  carbs: 4,
  protein: 1, 
  filename: "redsalsa"
})

lettuce = Ingredient.create({
  ingredient_name: "Romaine Lettuce",
  calories: 5,
  fats: 0,
  carbs: 1,
  protein: 0,
  filename: "lettuce" 
})

ingredients = [
  tortilla, 
  barbacoa, 
  chicken, 
  carnitas, 
  sofritas, 
  steak,
  veggie,
  lettuce, 
  redsalsa, 
  greensalsa, 
  sourcream, 
  cornsalsa, 
  queso, 
  cheese, 
  guac, 
  tomato, 
  fajita, 
  pintobeans,
  blackbeans, 
  whiterice, 
  brownrice ]


# meals

burrito = Meal.create({
  meal_name: "burrito"
})

bowl = Meal.create({
  meal_name: "bowl"
})

tacos = Meal.create({
  meal_name: "tacos"
})

salad = Meal.create({
  meal_name: "salad"
})

quesadilla = Meal.create({
  meal_name: "quesadilla"
})

kids = Meal.create({
  meal_name: "kids"
})

sides = Meal.create({
  meal_name: "sides"
})

lifestyle = Meal.create({
  meal_name: "lifestyle"
})

meals = [burrito, bowl, tacos, salad, quesadilla, kids, sides, lifestyle]



# builds

burrito_ingredients = ingredients.clone
# bowl_tacos_ingredients = ingredients.clone[1...ingredients.length]
# tacos_ingredients = ingredients.clone[]



burrito_ingredients.each do |ingredient| 
  Build.create({
    meal_id: burrito.id,
    ingredient_id: ingredient.id
  })
end


# def attachPhotos
#   ingredients.each do |ingredient|
#     file = open(``)
#     Ingredient.create(ingredient).attach(io: file, filename: `#{ingredient[:filename]}.jpg`)
#   end
# end


# meals.each do |meal|
#   file_name = meal.meal_name

#   if (file_name == "salad" || file_name == "quesadilla")
#     file_string = "https://poblano-app-seeds.s3.amazonaws.com/" + "#{file_name}" + ".jpg"
#     file = open(file_string)
#     file_name_string = "#{file_name}" + ".jpg"
#     meal.photo.attach(io: file, filename: file_name_string)
#   else
#     file_string = "https://poblano-app-seeds.s3.amazonaws.com/" + "#{file_name}" + ".png"
#     file = open(file_string)
#     file_name_string = "#{file_name}" + ".png"
#     meal.photo.attach(io: file, filename: file_name_string)
#   end
# end

tortilla.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/tortilla.jpg"), filename: 'tortilla.jpg')
salad.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/salad.jpg"), filename: 'salad.jpg')
quesadilla.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/quesadilla.jpg"), filename: 'quesadilla.jpg')
burrito.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/burrito.png"), filename: 'burrito.png')
bowl.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/bowl.png"), filename: 'bowl.png')
tacos.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/tacos.png"), filename: 'tacos.png')
kids.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/kids.png"), filename: 'kids.png')
lifestyle.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/lifestyle.png"), filename: 'lifestyle.png')
sides.photo.attach(io: open("https://poblano-app-seeds.s3.amazonaws.com/sides.png"), filename: 'sides.png')


p "Created #{User.count} users"
p "Created #{Ingredient.count} ingredients"
p "Created #{Meal.count} meals"
p "Created #{Build.count} builds"