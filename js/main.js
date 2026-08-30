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

    const modalElement = document.getElementById('myModal'); 
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalInstance.hide(); 
});

const taskList = document.getElementById("task-list");

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "list-group-item border-0 py-2 d-flex align-items-center";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-3";
        checkbox.checked = task.completed;

        const label = document.createElement("span");
        label.textContent = task.title;
        label.className = "text-muted fw-medium";

        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
    });
}
