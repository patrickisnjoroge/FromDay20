// Variables
const input = document.querySelector("input"),
  btn = document.querySelector("button"),
  todoList = document.querySelector(".todo-list"),
  clear = document.querySelector(".clear");

// ADD LIST ITEM
const addTask = (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  const delBtn = document.createElement("button");

  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input.value !== "") {
    newLi.textContent = input.value;
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
    input.value = "";
  } else {
    alert("Please Enter A Task");
  }

  // DELETE FUNCTION
  delBtn.addEventListener("click", function () {
  });
};

btn.addEventListener("click", addTask);

clear.addEventListener("click", () => {
  todoList.innerHTML = "";
});
