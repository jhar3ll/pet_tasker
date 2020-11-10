# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Jharell")
User.create(username: "Lani")
Pet.create(name: "Charlie", breed: "German Shepherd", pet_type: "dog", user_id: 1)
Pet.create(name: "Luna", breed: "German Shepherd", pet_type: "dog", user_id: 2)
Pet.create(name: "Lila", breed: "Tabby", pet_type: "cat", user_id: 2)
Pet.create(name: "Simon", breed: "American Curl", pet_type: "cat", user_id: 2)