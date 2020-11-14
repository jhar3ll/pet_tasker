class Task{
    constructor(id, description, task_date, task_time){
        this.id = id
        this.description = description
        this.task_date = task_date
        this.task_time = task_time
    }

   
    renderTask() {
        let newTask = document.createElement("li")
            newTask.innerHTML += `${this.description} on ${this.task_date} at ${this.task_time}`
        let taskList = document.getElementById("tasks-li")
            taskList.appendChild(newTask)
    }
}