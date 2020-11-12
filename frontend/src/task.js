class Task{
    constructor(id, description, task_date){
        this.id = id
        this.description = description
        this.task_date = task_date
    }

    renderTask() {
        let taskDiv = document.getElementById("task-list")
            taskDiv.innerHTML += `<h3>${this.description}!</h3>`
    }
}
       