document.addEventListener("DOMContentLoaded", () => {
    createUserForm()
})

const BASE_URL = "http://localhost:3000/"

function createUserForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML =
    `<form> 
    Username: <input type="text" id="username">
              <input type="submit" value="create">
    </form>
    ` 
    
    usersForm.addEventListener("submit", () => {
        userFormSubmit()
        usersForm.innerHTML = ''
        createTaskForm()
        createPetForm()
    })
}

function fetchUser(){
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users){
            let u = new User(user.id, user.username)
            u.renderUser()
    }
})
}

function userFormSubmit(){
    event.preventDefault()
    let username = document.getElementById("username").value
    
    if (username === "") throw alert("Username cannot be blank") 
    let user = {
        username: username,
    }
 
    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.id, user.username)
        u.renderUser()
    })
}
function fetchTasks(){
    var task_arr = []

    fetch(`${BASE_URL}/tasks`)
    .then(resp => resp.json())
    .then(tasks => {
        for (const task of tasks){
            let t = new Task(task.id, task.description, task.task_date, task.task_time, task.pet_name, task.user_id)
                t.renderTask() 
        }
    })
}

function createTaskForm() {
    fetchPets()
    let tasksForm = document.getElementById("tasks-form") 
    tasksForm.innerHTML +=
    `
    <div id="tasks-form">
        <form> 
            Task: <input type="text" id="description" placeholder="Task Description">

            <label for="pet_id">  Pet:</label>
            <select id="pet_id"></select>

            <label for="task_date"> Time & Date:</label>
            <input type="datetime-local" id="task_date">    

            <input type="submit" value="create">
            </form>
    </div>
    `
    tasksForm.addEventListener("submit", () => {
        taskFormSubmit()
        let upcomingTasks = document.getElementById("tasks")
        upcomingTasks.innerHTML = `<h3> Here are your upcoming tasks:</h3>`
        event.target.reset()
    })
}

function taskFormSubmit(){
    event.preventDefault()

    let description = document.getElementById("description").value
    let raw_date = document.getElementById("task_date").value
    let pet_name = document.getElementById("pet_id").value
    let user_id = document.getElementById("user_id").value
    
    let task_date = new Date(raw_date).toDateString()
    let task_time = new Date(raw_date).toLocaleTimeString()
   
    if (description === "") throw alert("Description cannot be blank")
    if (raw_date === "") throw alert("Date/Time cannot be blank")

    let task = {
        description: description,
        task_date: task_date,
        task_time: task_time,
        pet_name: pet_name,
        user_id: user_id
    }
        
    fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(resp => resp.json())
    .then(task => {
        let t = new Task(task.id, task.description, task.task_date, task.task_time, task.pet_name, task.user_id)
        t.renderTask()
    })
}

function fetchPets(){
    
    fetch(`${BASE_URL}/pets`)
    .then(resp => resp.json())
    .then(pets => {
        for (const pet of pets){
            let p = new Pet(pet.id, pet.name, pet.breed, pet.pet_type, pet.user_id)
            p.renderPet()
        }
    }) 
}

function createPetForm() {
    let petContainer = document.getElementById("pet-container")
        petContainer.innerHTML = `<h3> Add a new pet:`
    let petsForm = document.createElement('div')
        petsForm.id = "pets-form"
        petContainer.appendChild(petsForm)

    petsForm.innerHTML =
    `<form> 
    Pet: <input type="text" id="pet_name" placeholder="Pet Name">
    
         <label for="pet_type">Type:</label>
         <select id="pet_type">
         <option value="bird">Bird</option>
         <option value="cat">Cat</option>
         <option value="dog">Dog</option>
         <option value="ferret">Ferret</option>
         <option value="fish">Fish</option>
         <option value="hamster">Hamster</option>
         <option value="horse">Horse</option>
         <option value="iguana">Iguana</option>
         <option value="mouse">Mouse</option>
         <option value="pig">Pig</option>
         <option value="rabbit">Rabbit</option>
         <option value="snake">Snake</option>
         <option value="turtle">Turtle</option>
         </select>
              <input type="submit" value="add pet">
    </form>
    ` 
    petsForm.addEventListener("submit", () => {
       petFormSubmit()
       event.target.reset()
    })
}

function petFormSubmit(){
    event.preventDefault()
    let name = document.getElementById("pet_name").value
    let type = document.getElementById("pet_type").value
    let user_id = document.getElementById("user_id").value

    if (name === "") throw alert("Pet Name cannot be blank")

    let pet = {
        name: name,
        type: type,
        user_id: user_id
    }
 
    fetch(`${BASE_URL}/pets`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
    .then(resp => resp.json())
    .then(pet => {
        let p = new Pet(pet.id, pet.name, pet.pet_type, pet.user_id)
        p.renderPet()
    })
}
  