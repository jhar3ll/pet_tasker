class User{
    constructor(id, username){
        this.id = id
        this.username = username
     }
  
     renderUser() {
         let usersDiv = document.getElementById("welcome")
             usersDiv.innerHTML = `<h2>Welcome, ${this.username}! Use the form below to add new tasks for your pets!`
         let userForm = document.getElementById("users-form")
         let hiddenId = document.createElement("input")
         let userId = parseInt(`${this.id}`)
            hiddenId.id = "user_id"
            hiddenId.type = "hidden"
            hiddenId.value = userId
            userForm.appendChild(hiddenId)
     }
}
        