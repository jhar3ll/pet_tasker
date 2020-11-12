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
        clearForm()
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

function clearForm(){
    document.getElementById("users-form").innerHTML = ' '
    document.getElementById("tasks-form").innerHTML = ' '

}

function postSubmit(){
    //functions for after new username
    fetchTasks()
    createTaskForm()
}

function createTaskForm() {
    let tasksForm = document.getElementById("tasks-form")

    tasksForm.innerHTML +=
    `<form> 
    Task: <input type="text" id="task_description" placeholder="task description">
              <input type="date" id="task_date">
              <input type="submit" value="create">
    </form>
    ` 
    tasksForm.addEventListener("submit", () => {
        taskFormSubmit()
        clearForm()
    })
}

function fetchTasks(){
    fetch(`${BASE_URL}/tasks`)
    .then(resp => resp.json())
    .then(tasks => {
        for (const task of tasks){
            let t = new Task(task.id, task.description, task.task_date)
            t.renderTask();
        }
    })
}

function taskFormSubmit(){
    event.preventDefault()
    let task_description = document.getElementById("task_description").value
    let task_date = document.getElementById("task_date").value
    
    let task = {
        task_description: task_description,
        task_date: task_date
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
            t.renderTask();
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