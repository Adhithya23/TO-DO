

// Set, Get, Remove, Clear

console.log(localStorage);

localStorage.setItem("tasks", "Running app");

console.log(localStorage.getItem("tasks"));

localStorage.removeItem("tasks");


// JSON --> Stringfy --> pasre

const arr = [1,2,3,4,5];

console.log(arr);

const arrToString = JSON.stringify(arr);

console.log(arrToString);
console.log(typeof arrToString);

const stringToarr = JSON.parse(arrToString);

console.log(stringToarr);
