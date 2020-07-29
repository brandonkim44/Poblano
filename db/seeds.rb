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
  phone_number: "703-975-6696",
  email: "jlegend@gmail.com",
  country: "United States",
  reward_points: 0,
  password_digest: BCrypt::Password.create('password')
},
{
  first_name: "Brandon",
  last_name: "Kim",
  phone_number: "70-939-7471",  
  email: "brandonkim@virginia.edu",
  country: "Canada",
  reward_points: 100,
  password_digest: BCrypt::Password.create('password')
},
{
  first_name: "Test",
  last_name: "Account",
  phone_number: "911",  
  email: "testaccount@gmail.com",
  country: "United States",
  reward_points: 1200,
  password_digest: BCrypt::Password.create('password')
}])

p "Created #{User.count} movies"