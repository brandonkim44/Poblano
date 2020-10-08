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
ActiveStorage::Attachment.all.each { |attachment| attachment.purge }

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
  filename: "flourtortilla",
  price: 0
})

barbacoa = Ingredient.create({
  ingredient_name: "Barbacoa",
  calories: 170,
  fats: 7,
  carbs: 2,
  protein: 24,
  filename: "barbacoa",
  price: 8.70
})

carnitas = Ingredient.create({
  ingredient_name: "Carnitas",
  calories: 210,
  fats: 12,
  carbs: 0,
  protein: 23, 
  filename: "carnitas",
  price: 8.20
})

chicken = Ingredient.create({
  ingredient_name: "Chicken",
  calories: 180,
  fats: 7,
  carbs: 0,
  protein: 32,
  filename: "chicken",
  price: 7.70
})

sofritas = Ingredient.create({
  ingredient_name: "Sofritas",
  calories: 150,
  fats: 10,
  carbs: 9,
  protein: 8,
  filename: "sofritas",
  price: 7.70
})

steak = Ingredient.create({
  ingredient_name: "Steak",
  calories: 150,
  fats: 6,
  carbs: 1,
  protein: 21,
  filename: "steak",
  price: 8.70
})

veggie = Ingredient.create({
  ingredient_name: "Veggie",
  calories: 230,
  fats: 22,
  carbs: 8,
  protein: 2,
  filename: "veggie",
  price: 7.70
})

brownrice = Ingredient.create({
  ingredient_name: "Cilantro-Lime Brown Rice",
  calories: 210,
  fats: 6,
  carbs: 36,
  protein: 4,
  filename: "brownrice",
  price: 0
})

whiterice = Ingredient.create({
  ingredient_name: "Cilantro-Lime White Rice",
  calories: 210,
  fats: 4,
  carbs: 40,
  protein: 4,
  filename: "whiterice",
  price: 0
})

blackbeans = Ingredient.create({
  ingredient_name: "Black Beans",
  calories: 130,
  fats: 2,
  carbs: 22,
  protein: 8,
  filename: "blackbeans",
  price: 0
})

pintobeans = Ingredient.create({
  ingredient_name: "Pinto Beans",
  calories: 130,
  fats: 2,
  carbs: 21,
  protein: 8,
  filename: "pintobeans",
  price: 0
})

fajita = Ingredient.create({
  ingredient_name: "Fajita Vegetables",
  calories: 20,
  fats: 0,
  carbs: 5,
  protein: 1,
  filename: "fajita",
  price: 0
})

tomato = Ingredient.create({
  ingredient_name: "Fresh Tomato Salsa",
  calories: 25,
  fats: 0,
  carbs: 4,
  protein: 0,
  filename: "tomato",
  price: 0
})

guac = Ingredient.create({
  ingredient_name: "Guacamole",
  calories: 230,
  fats: 22,
  carbs: 8,
  protein: 2,
  filename: "guac",
  price: 2.60
})

cheese = Ingredient.create({
  ingredient_name: "Monterey Jack Cheese",
  calories: 110,
  fats: 8,
  carbs: 1,
  protein: 6,
  filename: "cheese",
  price: 0
})

queso = Ingredient.create({
  ingredient_name: "Queso Blanco",
  calories: 120,
  fats: 9,
  carbs: 4,
  protein: 5,
  filename: "queso",
  price: 0
})

cornsalsa = Ingredient.create({
  ingredient_name: "Roasted Chili-Corn Salsa",
  calories: 80,
  fats: 2,
  carbs: 16,
  protein: 3,
  filename: "cornsalsa",
  price: 0
})

sourcream = Ingredient.create({
  ingredient_name: "Sour Cream",
  calories: 110,
  fats: 9,
  carbs: 2,
  protein: 2,
  filename: "sourcream",
  price: 0
})

greensalsa = Ingredient.create({
  ingredient_name: "Tomatillo Green-Chili Salsa",
  calories: 15,
  fats: 0,
  carbs: 4,
  protein: 0,
  filename: "greensalsa",
  price: 0
})

redsalsa = Ingredient.create({
  ingredient_name: "Tomatillo Red-Chili Salsa",
  calories: 30,
  fats: 0,
  carbs: 4,
  protein: 1, 
  filename: "redsalsa",
  price: 0
})

lettuce = Ingredient.create({
  ingredient_name: "Romaine Lettuce",
  calories: 5,
  fats: 0,
  carbs: 1,
  protein: 0,
  filename: "lettuce",
  price: 0
})

 corntortilla = Ingredient.create({
  ingredient_name: "Crispy Corn Tortilla",
  calories: 200,
  fats: 9,
  carbs: 29,
  protein: 3,
  filename: "corntortilla",
  price: 0
})

supergreens = Ingredient.create({
  ingredient_name: "Supergreens Lettuce Blend",
  calories: 15,
  fats: 0,
  carbs: 3,
  protein: 1,
  filename: "supergreens",
  price: 0
})

tortillachips = Ingredient.create({
  ingredient_name: "Tortilla Chips",
  calories: 540,
  fats: 25,
  carbs: 73,
  protein: 7,
  filename: "tortillachips",
  price: 1.55
})

largechips = Ingredient.create({
  ingredient_name: "Large Chips",
  calories: 810,
  fats: 38,
  carbs: 110,
  protein: 11,
  filename: "largechips",
  price: 2.25
})

chipsguac = Ingredient.create({
  ingredient_name: "Chips & Guacamole",
  calories: 770,
  fats: 47,
  carbs: 81,
  protein: 9,
  filename: "chipsguac",
  price: 3.85
})

largechipsguac = Ingredient.create({
  ingredient_name: "Large Chips & Large Guacamole",
  calories: 1270,
  fats: 82,
  carbs: 126,
  protein: 15,
  filename: "largechipsguac",
  price: 6.15
})

chipsqueso = Ingredient.create({
  ingredient_name: "Chips & Queso Blanco",
  calories: 780,
  fats: 43,
  carbs: 80,
  protein: 17,
  filename: "chipsqueso",
  price: 3.85
})

largechipsqueso = Ingredient.create({
  ingredient_name: "Large Chips & Large Queso Blanco",
  calories: 1290,
  fats: 75,
  carbs: 124,
  protein: 31,
  filename: "largechipsqueso",
  price: 6.15
})

chipstomato = Ingredient.create({
  ingredient_name: "Chips & Fresh Tomato Salsa",
  calories: 570,
  fats: 25,
  carbs: 74,
  protein: 7,
  filename: "chipstomato",
  price: 2.05
})

chipscorn = Ingredient.create({
  ingredient_name: "Chips & Roasted Chili-Corn Salsa",
  calories: 620,
  fats: 27,
  carbs: 89,
  protein: 10,
  filename: "chipscorn",
  price: 2.05
})

chipstomatillo = Ingredient.create({
  ingredient_name: "Chips & Tomatillo-Green Chili Salsa",
  calories: 560,
  fats: 25,
  carbs: 77,
  protein: 7,
  filename: "chipstomatillo",
  price: 2.05
})

chipsredsalsa = Ingredient.create({
  ingredient_name: "Chips & Tomatillo-Red Chili Salsa",
  calories: 570,
  fats: 25,
  carbs: 77,
  protein: 7,
  filename: "chipsredsalsa",
  price: 2.05
})

largeguac = Ingredient.create({
  ingredient_name: "Large Guacamole",
  calories: 460,
  fats: 44,
  carbs: 16,
  protein: 4,
  filename: "guac",
  price: 3.50
})

peach = Ingredient.create({
  ingredient_name: "Peach Orange Juice",
  calories: 260,
  fats: 0,
  carbs: 64,
  protein: 2,
  filename: "peach",
  price: 3.40
})

apple = Ingredient.create({
  ingredient_name: "100% Apple Juice",
  calories: 240,
  fats: 0,
  carbs: 60,
  protein: 0,
  filename: "apple",
  price: 3.40
})

pineapple = Ingredient.create({
  ingredient_name: "Pineapple Orange Banana Juice",
  calories: 260,
  fats: 0,
  carbs: 64,
  protein: 2,
  filename: "pineapple",
  price: 3.40
})

pomegranate = Ingredient.create({
  ingredient_name: "Pomegranate Cherry Juice",
  calories: 240,
  fats: 0,
  carbs: 58,
  protein: 0,
  filename: "pomegranate",
  price: 3.40
})

blackberry = Ingredient.create({
  ingredient_name: "Blackberry",
  calories: 170,
  fats: 0,
  carbs: 41,
  protein: 0,
  filename: "blackberry",
  price: 3.40
})

clementine = Ingredient.create({
  ingredient_name: "Clementine",
  calories: 170,
  fats: 0,
  carbs: 41,
  protein: 0,
  filename: "clementine",
  price: 3.40
})

grapefruit = Ingredient.create({
  ingredient_name: "Grapefruit",
  calories: 160,
  fats: 0,
  carbs: 41,
  protein: 0,
  filename: "grapefruit",
  price: 3.40
})

keto = Ingredient.create({
  ingredient_name: "Keto Salad Bowl",
  calories: 535,
  fats: 36,
  carbs: 17,
  protein: 30,
  filename: "keto",
  price: 12.84,
  details: ["Steak", "Supergreens", "Tomatillo Red Chili Salsa", "Monterey Jack Cheese", "Guacamole"]
})

whole30 = Ingredient.create({
  ingredient_name: "Whole30 Salad Bowl",
  calories: 500,
  fats: 34,
  carbs: 20,
  protein: 27,
  filename: "whole30",
  price: 11.84,
  details: ["Carnitas", "Supergreens", "Fajita Vegetables", "Fresh Tomato Salsa", "Guacamole"]
})

paleo = Ingredient.create({
  ingredient_name: "Paleo Bowl",
  calories: 460,
  fats: 29,
  carbs: 20,
  protein: 36,
  filename: "paleo",
  price: 11.30,
  details: ["Chicken", "Supergreens", "Fajita Vegetables", "Tomatillo Green-Chili Salsa", "Guacamole"]
})

vegan = Ingredient.create({
  ingredient_name: "Vegan Bowl",
  calories: 600,
  fats: 19,
  carbs: 88,
  protein: 23,
  filename: "vegan",
  price: 8.69,
  details: ["Brown Rice", "Black Beans", "Sofritas", "Tomato Salsa", "Corn Salsa", "Lettuce"]
})

vegetarian = Ingredient.create({
  ingredient_name: "Vegetarian Bowl",
  calories: 630,
  fats: 30,
  carbs: 78,
  protein: 16,
  filename: "vegetarian",
  price: 8.69,
  details: ["Brown Rice", "Supergreens", "Black Beans", "Tomato Salsa", "Fajita Vegetables", "Guacamole"]
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
  meal_name: "burrito",
  description: "Your choice of freshly grilled meat or sofritas wrapped in a warm flour tortilla with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese."
})

bowl = Meal.create({
  meal_name: "bowl",
  description: "Your choice of freshly grilled meat or sofritas served in a delicious bowl with rice, beans, or fajita veggies, and topped with guac, salsa, queso blanco, sour cream or cheese."
})

tacos = Meal.create({
  meal_name: "tacos",
  description: "Your choice of freshly grilled meat or sofritas served in a soft or hard-shell tortilla with guac, salsa, queso blanco, sour cream or cheese, and topped with hand-cut romaine lettuce."
})

salad = Meal.create({
  meal_name: "salad",
  description: "Your choice of meat or sofritas served with our fresh supergreens lettuce blend made of Romaine, Baby Kale, and Baby Spinach. Add beans, queso blanco, salsa, guacamole, sour cream or cheese and top it off with our signature Chipotle-Honey Vinaigrette."
})

quesadilla = Meal.create({
  meal_name: "quesadilla"
})

kids = Meal.create({
  meal_name: "kids",
  description: "Build your own meal or enjoy a quesadilla, both served with a drink and seasonal fruit or chips."
})

sides = Meal.create({
  meal_name: "sides",
  description: "Everything else you need to round out your meal."
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