document.addEventListener("DOMContentLoaded", () => {
    createUserForm()
})

const BASE_URL = "http://localhost:3000/"

// function fetchUsers(){
//     fetch(`${BASE_URL}/users`)
//     .then(resp => resp.json())
//     .then(users => {
//         for (const user of users){
//             let u = new User(user.id, user.username)
//             u.renderUser();
//         }
//     })
// }

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
}

function postSubmit(){
    
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