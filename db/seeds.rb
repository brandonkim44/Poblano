# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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

p "Created #{User.count} users"