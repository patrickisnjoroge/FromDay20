window.onload = function () {
  displayTask();
};

// Variables
const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  todoList = document.querySelector(".todo-list"),
  clear = document.querySelector(".clear");
let tasks;

btn.addEventListener("click", addTask);

// Get Tasks From The Local Storage
function getTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

function addTask() {
  if (input.value !== "") {
    addTaskToLs();
    todoList.innerHTML = "";
    displayTask();
  } else {
    alert("Please Enter A Task");
  }
}

// Save Task To Local Storage
function addTaskToLs() {
  getTasks();
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
}

// Display Task On The Page
function displayTask() {
  getTasks();

  tasks.forEach((task, index) => {
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`;

    newLi.appendChild(document.createTextNode(task));
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
  });
}

// Delete Tasks
function deleteTask(index) {
  const del = confirm("You Are About To Delete This Task!!!");
  if (del == true) {
    getTasks();
  }

  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoList.innerHTML = "";
  displayTask();
}

// Clear Tasks
clear.addEventListener("click", clearTask);

function clearTask() {
  const delTasks = confirm("Delete All Tasks");

  if (delTasks == true) {
    localStorage.clear();
    todoList.innerHTML = "";
    displayTask();
  }
}
