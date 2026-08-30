const saveButton = document.getElementById("save-task-button");
const taskInput = document.getElementById("task-title");

let tasks = [];

saveButton.addEventListener("click", function () {
    const newTasks = {
        id: Date.now(),
        title: taskInput.value,
        completed: false,
    };
    tasks.push(newTasks);
    renderTasks();
});

const taskList = document.getElementById("task-list");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;
        taskList.appendChild(li);
    });
}