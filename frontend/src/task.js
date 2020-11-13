class Task{
    constructor(id, description, task_date){
        this.id = id
        this.description = description
        this.task_date = task_date
    }

   
    renderTask() {
        let newTask = document.createElement("li")
            newTask.innerHTML += `${this.description} on ${this.task_date})`
            document.getElementById("tasks").appendChild(newTask)
    }
}
       
