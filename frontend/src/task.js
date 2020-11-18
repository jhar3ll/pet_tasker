class Task{
    constructor(id, description, task_date, task_time, pet_name, user_id){
        this.id = id
        this.description = description
        this.task_date = task_date
        this.task_time = task_time
        this.pet_name = pet_name
        this.user_id = user_id
    }

   
    renderTask() {
        let newTask = document.createElement("li")
            newTask.innerHTML = `${this.description} for ${this.pet_name} on ${this.task_date} at ${this.task_time}`
        let taskList = document.getElementById("tasks-li")
            taskList.appendChild(newTask)
    }
}

// <button class="delete-bttn" data-id='${this.id}' onclick="deleteTask()">Delete</button>
