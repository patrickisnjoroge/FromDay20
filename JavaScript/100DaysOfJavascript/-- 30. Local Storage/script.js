// console.log(window);

// console.log(Object.getOwnPropertyNames(window));

// window.localStorage.setItem("key", "value");

window.localStorage.setItem("firstName", "Patrick");
localStorage.setItem("lastName", "Njoroge");

const person = {
  fullName: "Patrick Njoroge Ndung'u",
  location: "Nairobi",
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Mangoes", "Apples", "Peaches"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// GET ITEM FROM LOCAL STORAGE
// console.log(localStorage.getItem("firstName"));

// REMOVE ITEM FROM LOCAL STORAGE
localStorage.removeItem("fruits");

// CLEAR LOCAL STORAGE
localStorage.clear();

localStorage.setItem("name", "Patrick");
localStorage.setItem("age", "25");

console.log(localStorage.key(0));
