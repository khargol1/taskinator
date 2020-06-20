var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); //selects id from html

/* event listner with nameless function
buttonEl.addEventListener("click", function() { //explicitly run the nameless function
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; //sets class in html
  listItemEl.textContent = "This is a new task."; //sets text area between <li></li>
  tasksToDoEl.appendChild(listItemEl); //adds to end of list
}); */

formEl.addEventListener("submit", createTaskHandler);

function createTaskHandler(event){
    event.preventDefault();
    let taskNameInput = document.querySelector("input[name='task-name']").value; //selects the input element with name attribute set to task-name
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
    // create list item
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    let taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);    
}