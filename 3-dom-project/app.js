
// Define UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");



// Load All event Listeners

loadEventListeners();

function loadEventListeners(){

   // DOM LOAD EVENT
   document.addEventListener("DOMContentLoaded", getTasks);

   // Add Tasks
   form.addEventListener("submit", addTask);

  // Remove Tasks
  taskList.addEventListener("click", removeTask);

  // Clear Tasks
  clearBtn.addEventListener("click", clearTask); 

}

function getTasks(){
    
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(element){

        // Create a li Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Add a innerText as inputvalue
        li.innerText = element;

        // Create a link tag
        const link = document.createElement("a");

        // Add a class to link
        link.className = "delete-item secondary-content";

        // Add a icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append a link to li
        li.appendChild(link);

        // Append a li to ul
        taskList.appendChild(li);


    })


}


function addTask(e){

    e.preventDefault();

    // Simple validation
    if(taskInput.value === ""){
        alert("Please fill the form");
    } else {
       
        // Create a li Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Add a innerText as inputvalue
        li.innerText = taskInput.value;

        // Create a link tag
        const link = document.createElement("a");

        // Add a class to link
        link.className = "delete-item secondary-content";

        // Add a icon to link
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append a link to li
        li.appendChild(link);

        // Append a li to ul
        taskList.appendChild(li);

        // Store in Ls
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = "";

        // console.log(li);

    }
    
}


function storeTaskInLocalStorage(task){
   
    let tasks;

    if(localStorage.getItem("tasks") === null){
       
        tasks = [];
        
        tasks.push(task);
        
        localStorage.setItem("tasks", JSON.stringify(tasks));

        console.log(tasks);

        console.log("Step 1");

    }else {

        tasks = JSON.parse(localStorage.getItem("tasks"));

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        console.log(tasks);

        console.log("Step 2");

    }

}

// Remove Task

function removeTask(e){

    if(e.target.parentElement.className === "delete-item secondary-content"){
        
        if(confirm("Are you sure?")){
            e.target.parentElement.parentElement.remove();
        }

    }

    removeTasksFromLocalStorage(e.target.parentElement.parentElement);

}

function removeTasksFromLocalStorage(taskElement){
    

    let tasks;

    if(localStorage.getItem("tasks") === null){

        tasks = [];

    }else {

        tasks = JSON.parse(localStorage.getItem("tasks"));

    }

    tasks.forEach(function(task, index){
        
        if(taskElement.innerText === task){
            // console.log(task, index);
            tasks.splice(index, 1);
        }

    })

    localStorage.setItem("tasks", JSON.stringify(tasks));

   
}


// Clear Task

function clearTask(){
    taskList.innerHTML = "";

    // const lists = document.querySelectorAll("li"); // Nodelist
    
    // lists.forEach(function(element){
    //     element.remove();
    // })

    clearTasksFromLocalStorage();


}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}