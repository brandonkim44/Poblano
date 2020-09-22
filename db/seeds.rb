# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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

# require 'open-uri'

# Ingredients
  

flourtortilla = Ingredient.create({
  ingredient_name: "Flour Tortilla (Burrito)",
  calories: 320,
  fats: 9,
  carbs: 50,
  protein: 8,
  filename: "flourtortilla"
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

 corntortilla = Ingredient.create({
  ingredient_name: "Crispy Corn Tortilla",
  calories: 200,
  fats: 9,
  carbs: 29,
  protein: 3,
  filename: "corntortilla" 
})

supergreens = Ingredient.create({
  ingredient_name: "Supergreens Lettuce Blend",
  calories: 15,
  fats: 0,
  carbs: 3,
  protein: 1,
  filename: "supergreens" 
})

supergreens = Ingredient.create({
  ingredient_name: "Supergreens Lettuce Blend",
  calories: 15,
  fats: 0,
  carbs: 3,
  protein: 1,
  filename: "supergreens" 
})

tortillachips = Ingredient.create({
  ingredient_name: "Tortilla Chips",
  calories: 540,
  fats: 25,
  carbs: 73,
  protein: 7,
  filename: "tortillachips" 
})

largechips = Ingredient.create({
  ingredient_name: "Large Chips",
  calories: 810,
  fats: 38,
  carbs: 110,
  protein: 11,
  filename: "largechips" 
})

chipsguac = Ingredient.create({
  ingredient_name: "Chips & Guacamole",
  calories: 770,
  fats: 47,
  carbs: 81,
  protein: 9,
  filename: "chipsguac" 
})

largechipsguac = Ingredient.create({
  ingredient_name: "Large Chips & Large Guacamole",
  calories: 1270,
  fats: 82,
  carbs: 126,
  protein: 15,
  filename: "largechipsguac" 
})

chipsqueso = Ingredient.create({
  ingredient_name: "Chips & Queso Blanco",
  calories: 780,
  fats: 43,
  carbs: 80,
  protein: 17,
  filename: "chipsqueso" 
})

largechipsqueso = Ingredient.create({
  ingredient_name: "Large Chips & Large Queso Blanco",
  calories: 1290,
  fats: 75,
  carbs: 124,
  protein: 31,
  filename: "largechipsqueso" 
})

chipstomato = Ingredient.create({
  ingredient_name: "Chips & Fresh Tomato Salsa",
  calories: 570,
  fats: 25,
  carbs: 74,
  protein: 7,
  filename: "chipstomato" 
})

chipscorn = Ingredient.create({
  ingredient_name: "Chips & Roasted Chili-Corn Salsa",
  calories: 620,
  fats: 27,
  carbs: 89,
  protein: 10,
  filename: "chipscorn" 
})

chipstomatillo = Ingredient.create({
  ingredient_name: "Chips & Tomatillo-Green Chili Salsa",
  calories: 560,
  fats: 25,
  carbs: 77,
  protein: 7,
  filename: "chipstomatillo" 
})

chipsredsalsa = Ingredient.create({
  ingredient_name: "Chips & Tomatillo-Red Chili Salsa",
  calories: 570,
  fats: 25,
  carbs: 77,
  protein: 7,
  filename: "chipsredsalsa" 
})

largeguac = Ingredient.create({
  ingredient_name: "Large Guacamole",
  calories: 460,
  fats: 44,
  carbs: 16,
  protein: 4,
  filename: "guac" 
})

peach = Ingredient.create({
  ingredient_name: "Peach Orange Juice",
  calories: 260,
  fats: 0,
  carbs: 64,
  protein: 2,
  filename: "peach" 
})

apple = Ingredient.create({
  ingredient_name: "100% Apple Juice",
  calories: 240,
  fats: 0,
  carbs: 60,
  protein: 0,
  filename: "apple" 
})

pineapple = Ingredient.create({
  ingredient_name: "Pineapple Orange Banana Juice",
  calories: 260,
  fats: 0,
  carbs: 64,
  protein: 2,
  filename: "pineapple" 
})

pomegranate = Ingredient.create({
  ingredient_name: "Pomegranate Cherry Juice",
  calories: 240,
  fats: 0,
  carbs: 58,
  protein: 0,
  filename: "pomegranate" 
})

blackberry = Ingredient.create({
  ingredient_name: "Blackberry",
  calories: 170,
  fats: 0,
  carbs: 41,
  protein: 0,
  filename: "blackberry" 
})

clementine = Ingredient.create({
  ingredient_name: "Clementine",
  calories: 170,
  fats: 0,
  carbs: 41,
  protein: 0,
  filename: "clementine" 
})

grapefruit = Ingredient.create({
  ingredient_name: "Grapefruit",
  calories: 160,
  fats: 0,
  carbs: 41,
  protein: 0,
  filename: "grapefruit" 
})

keto = Ingredient.create({
  ingredient_name: "Keto Salad Bowl",
  calories: 535,
  fats: 36,
  carbs: 17,
  protein: 30,
  filename: "keto" 
})

whole30 = Ingredient.create({
  ingredient_name: "Whole30 Salad Bowl",
  calories: 500,
  fats: 34,
  carbs: 20,
  protein: 27,
  filename: "whole30" 
})

paleo = Ingredient.create({
  ingredient_name: "Paleo Bowl",
  calories: 460,
  fats: 29,
  carbs: 20,
  protein: 36,
  filename: "paleo" 
})

vegan = Ingredient.create({
  ingredient_name: "Vegan Bowl",
  calories: 600,
  fats: 19,
  carbs: 88,
  protein: 23,
  filename: "vegan" 
})

vegetarian = Ingredient.create({
  ingredient_name: "Vegetarian Bowl",
  calories: 630,
  fats: 30,
  carbs: 78,
  protein: 16,
  filename: "vegetarian" 
})



ingredients = [
  flourtortilla, 
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
  brownrice,
  corntortilla,
  supergreens,
  tortillachips,
  largechips,
  chipsguac,
  largechipsguac,
  chipsqueso, 
  largechipsqueso, 
  chipstomato, 
  chipscorn, 
  chipstomatillo, 
  chipsredsalsa, 
  largeguac, 
  peach, 
  apple, 
  pineapple, 
  pomegranate, 
  blackberry, 
  clementine, 
  grapefruit,
  keto, 
  whole30, 
  paleo, 
  vegan, 
  vegetarian ]



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

basic_ingredients = [
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
  brownrice]

burrito_ingredients = basic_ingredients.clone.push(flourtortilla)
bowl_ingredients = basic_ingredients.clone
tacos_ingredients = burrito_ingredients.clone.push(corntortilla)
salad_ingredients = basic_ingredients.clone.push(supergreens)
quesadilla_ingredients = [
  barbacoa,
  carnitas,
  chicken,
  cheese,
  sofritas,
  steak,
  veggie,
  blackbeans,
  pintobeans,
  whiterice,
  brownrice,
  fajita]
  kids_ingredients = tacos_ingredients.clone
  sides_ingredients = [
    tortillachips,
    largechips,
    chipsguac,
    largechipsguac,
    chipsqueso, 
    largechipsqueso, 
    chipstomato, 
    chipscorn, 
    chipstomatillo, 
    chipsredsalsa, 
    largeguac, 
    peach, 
    apple, 
    pineapple, 
    pomegranate, 
    blackberry, 
    clementine, 
    grapefruit ]
lifestyle_ingredients = [
  keto, 
  whole30, 
  paleo, 
  vegan, 
  vegetarian ]


burrito_ingredients.each do |ingredient| 
  Build.create({
    meal_id: burrito.id,
    ingredient_id: ingredient.id
  })
end

bowl_ingredients.each do |ingredient| 
  Build.create({
    meal_id: bowl.id,
    ingredient_id: ingredient.id
  })
end

tacos_ingredients.each do |ingredient| 
  Build.create({
    meal_id: tacos.id,
    ingredient_id: ingredient.id
  })
end

salad_ingredients.each do |ingredient| 
  Build.create({
    meal_id: salad.id,
    ingredient_id: ingredient.id
  })
end

quesadilla_ingredients.each do |ingredient| 
  Build.create({
    meal_id: quesadilla.id,
    ingredient_id: ingredient.id
  })
end

kids_ingredients.each do |ingredient| 
  Build.create({
    meal_id: kids.id,
    ingredient_id: ingredient.id
  })
end

sides_ingredients.each do |ingredient| 
  Build.create({
    meal_id: sides.id,
    ingredient_id: ingredient.id
  })
end

lifestyle_ingredients.each do |ingredient| 
  Build.create({
    meal_id: lifestyle.id,
    ingredient_id: ingredient.id
  })
end

ingredientsWithJPG = ['flourtortilla', 'keto', 'whole30', 'paleo', 'vegan', 'vegetarian']

def attachIngredientPhotos(ingredientsArray, jpgIngredients)
  ingredientsArray.each do |ingredient|
    if jpgIngredients.include?(ingredient["filename"])
      file = open("https://poblano-app-seeds.s3.amazonaws.com/#{ingredient["filename"]}.jpg")
      ingredient.photo.attach(io: file, filename: "#{ingredient["filename"]}.jpg")
    else
      file = open("https://poblano-app-seeds.s3.amazonaws.com/#{ingredient["filename"]}.png")
      ingredient.photo.attach(io: file, filename: "#{ingredient["filename"]}.png")
    end
  end
end

attachIngredientPhotos(ingredients, ingredientsWithJPG)

# attach photos for meals
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