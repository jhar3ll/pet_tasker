# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Jharell")

Pet.create(name: "Charlie", pet_type: "dog", user_id: 1)
Pet.create(name: "Luna", pet_type: "dog", user_id: 1)
Pet.create(name: "Lila", pet_type: "cat", user_id: 1)
Pet.create(name: "Simon", pet_type: "cat", user_id: 1)

Task.create(description: "Vet Appointment", user_id: 1)#, #pet_id: 1, task_date: "11/20/2020", task_time: "3:30:00 PM", user_id: 1)