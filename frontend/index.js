document.addEventListener("DOMContentLoaded", () => {
    createUserForm()
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
        event.target.reset()
        postSubmit()
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

function postSubmit(){
    //functions for after new username
    taskList()
    createTaskForm()
}


function fetchTasks(){
    fetch(`${BASE_URL}/tasks`)
    .then(resp => resp.json())
    .then(tasks => {
        for (const task of tasks){
            let t = new Task(task.id, task.description, task.task_date)
            t.renderTask()
        }
    })
}

function taskList(){
    let upcomingTasks = document.getElementById("tasks")
        upcomingTasks.innerHTML = `<h3> Here are your upcoming tasks:</h3>`
}

function createTaskForm() {
    let tasksForm = document.getElementById("tasks-form")

    tasksForm.innerHTML +=
    `<form> 
    Task: <input type="text" id="description" placeholder="task description">
          <input type="date" id="task_date">
          
          <select name="pet" id="pet_id" >
            <option value="Charlie">Charlie</option>
            <option value="Luna">Luna</option>
            <option value="Lila">Lila</option>
            <option value="Simon">Simons</option>
        </select>

          <input type="submit" value="create">
          
    </form>
    ` 
    tasksForm.addEventListener("submit", () => {
        taskFormSubmit()
        event.target.reset()
    })
}

function taskFormSubmit(){
    event.preventDefault()
    let description = document.getElementById("description").value
    let task_date = document.getElementById("task_date").value  
    
    let task = {
        description: description,
        task_date: task_date,
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
        let t = new Task(task.id, task.description, task.task_date)
        t.renderTask()
    })
}

// function deleteUser(){
//     let userId = parseInt(event.target.dataset.id)

//     fetch(`${BASE_URL}/users/${userId}`, {
//         method: 'DELETE'
//     })

//     this.location.reload()
// }

// function logUsers(){
//     fetch(`${BASE_URL}/users`)
//     .then(resp => resp.json())
//     .then(users => console.log(users))
// }

 