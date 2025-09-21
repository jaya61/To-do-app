const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTask(taskText);
  taskInput.value = "";
});

// Create Task Function
function createTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = text;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.classList.add("edit-btn");
  editBtn.onclick = () => {
    const newText = prompt("Edit Task:", span.textContent);
    if (newText) span.textContent = newText;
  };

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    li.remove();
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
}
