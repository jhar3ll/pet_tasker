class User{
    constructor(id, username){
        this.id = id
        this.username = username
     }

     renderUser() {
         let usersDiv = document.getElementById("users-container")
             usersDiv.innerHTML +=
         `<h2> User(${this.id}): ${this.username} <button class="delete-bttn" data-id=${this.id} 
                onclick="deleteUser()">Delete User</button></h2>
         `
     }
}
        