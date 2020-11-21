Associations
------------------------------------
Pet Tasker

User
username:string

*has_many :pets
*has_many :tasks

Pet
name:string
type:string

*belongs_to :user

Task
description:string
task_date:string
task_time:string
pet_name:string
*belongs_to :user 
-----------------------------

User Flow
-----------------------------
-Welcome page
-Enter username

-Add new task and/or new pet 

Pet:
if new, form
if existing, dropdown

Task:
-add new task 
 => add another task and/or delete task



