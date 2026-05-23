const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Create task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Complete task on click
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  // Delete task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Add elements to li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
