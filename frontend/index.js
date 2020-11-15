document.addEventListener("DOMContentLoaded", () => {
    createUserForm()
    createPetForm()
    fetchBreeds()
    //createTaskForm()
    //fetchPets()
})

const BASE_URL = "http://localhost:3000/"

function createUserForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `<form> 
    Username: <input type="text" id="username">
              <input type="submit" value="create">
    </form>
    ` 
    usersForm.addEventListener("submit", () => {
        userFormSubmit()
        usersForm.innerHTML = ''
        createTaskForm()
        fetchPets()
        createPetForm()
    })
}

function userFormSubmit(){
    event.preventDefault()
    let username = document.getElementById("username").value
    
    let user = {
        username: username
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
    fetch(`${BASE_URL}/tasks`)
    .then(resp => resp.json())
    .then(tasks => {
        for (const task of tasks){
            let t = new Task(task.id, task.description, task.task_date, task.task_time)
            t.renderTask()
        }
    })
}

function createTaskForm() {

    let tasksForm = document.getElementById("tasks-form") 
    tasksForm.innerHTML +=
    `
    <div id="tasks-form">
        <form> 
            Task: <input type="text" id="description" placeholder="Task Description">
        
                <label for="task_date"> Time & Date:</label>
                  <input type="datetime-local" id="task_date">
        
                <label for="pet_id">  Pet:</label>
                  <select id="pet_id"></select>
        
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
    let task_date = new Date(raw_date).toDateString()
    let task_time = new Date(raw_date).toLocaleTimeString()
   
    let task = {
        description: description,
        task_date: task_date,
        task_time: task_time,
        pet_name: pet_name
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
    .then(resp => {
        let t = new Task(task.id, task.description, task.task_date, task.task_time, task.pet_name)
        t.renderTask()
    })
}

function fetchPets(){
    
    fetch(`${BASE_URL}/pets`)
    .then(resp => resp.json())
    .then(pets => {
        for (const pet of pets){
            let p = new Pet(pet.id, pet.name, pet.breed, pet.pet_type)
            p.renderPet()
        }
    }) 
}

function createPetForm() {
    let petsForm = document.getElementById("pets-form")

    petsForm.innerHTML +=
    `<form> 
    Pet: <input type="text" id="pet_name" placeholder="Pet Name">
        <label for="pet_breed">Breed:</label>
         <select id="pet_breed"></select>

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

              <input type="submit" value="create">
    </form>
    ` 
    petsForm.addEventListener("submit", () => {
       
    })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json()) 
      .then(function(json) {
        breeds = Object.keys(json.message)
        breeds.forEach(breed => addBreed(breed))
      })
    }

    function addBreed(breed){
        let container = document.getElementById("pet_breed")
        let option = breed
        let el = document.createElement("option")
        el.textContent = option
        el.value = option 
        container.appendChild(el)
      }

// function deleteUser(){
//     let userId = parseInt(event.target.dataset.id)

//     fetch(`${BASE_URL}/users/${userId}`, {
//         method: 'DELETE'
//     })

//     this.location.reload()
// }