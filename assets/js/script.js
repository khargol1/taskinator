var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do"); //selects id from html

/* event listner with nameless function
buttonEl.addEventListener("click", function() { //explicitly run the nameless function
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; //sets class in html
  listItemEl.textContent = "This is a new task."; //sets text area between <li></li>
  tasksToDoEl.appendChild(listItemEl); //adds to end of list
}); */

buttonEl.addEventListener("click", createTaskHandler);

function createTaskHandler(){
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; //sets class in html
    listItemEl.textContent = "This is a new task."; //sets text area between <li></li>
    tasksToDoEl.appendChild(listItemEl); //adds to end of list    
}