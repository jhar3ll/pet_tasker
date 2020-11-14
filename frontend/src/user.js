class User{
    constructor(id, username){
        this.id = id
        this.username = username
     }

     renderUser() {
         let usersDiv = document.getElementById("welcome")
             usersDiv.innerHTML = `<h2>Welcome, ${this.username}!
             Use the form below to add new tasks for your pets!`
     }
}
        