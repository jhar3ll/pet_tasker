class Task{
    constructor(id, description, task_date, pet_id){
        this.id = id
        this.description = description
        this.task_date = task_date
        this.pet_id = pet_id
    }

    renderTask() {
        let tasksDiv = document.getElementById("tasks")
        let newTask = document.createElement("li")
            newTask.innerHTML += `${this.description} for ${this.pet_id} on (${this.task_date})`
            document.getElementById("tasks").appendChild(newTask)
    }
}
       
