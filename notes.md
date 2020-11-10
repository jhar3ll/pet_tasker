Pet Tasker

User
username:string

*has_many :pets
*has_many :tasks, through: :pets

Pet
name:string
img_src:string
breed:string
type:string

*has_many :tasks
*belongs_to :user

Task
description:string
task_date:date

*belongs_to :pet
*belongs_to :user 