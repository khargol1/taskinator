var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); //selects id from html
var taskIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");

/* event listner with nameless function
buttonEl.addEventListener("click", function() { //explicitly run the nameless function
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; //sets class in html
  listItemEl.textContent = "This is a new task."; //sets text area between <li></li>
  tasksToDoEl.appendChild(listItemEl); //adds to end of list
}); */

pageContentEl.addEventListener("click", taskButtonHandler);
formEl.addEventListener("submit", taskFormHandler);

function taskFormHandler(event){
    event.preventDefault();
    let taskNameInput = document.querySelector("input[name='task-name']").value; //selects the input element with name attribute set to task-name
    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    if(!taskNameInput || !taskTypeInput){
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    
    //package up data as an object
    let taskDataObj={
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj);
        
}

function createTaskEl(taskDataObj){
    // create list item
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    listItemEl.setAttribute("data-task-id", taskIdCounter);

    // create div to hold task info and add to list item
    let taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    let taskActionsEl = createTaskActions(taskIdCounter);
    //console.log(taskActionsEl);
    // add entire list item to list

    listItemEl.appendChild(taskActionsEl);

    tasksToDoEl.appendChild(listItemEl);
    taskIdCounter++;
}

function createTaskActions(taskId){
    let actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    // create edit button
    let editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    let deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    let statusSelectEl = document.createElement("select");
    let statusChoices = ["To Do", "In Progress", "Completed"];
    for(var i = 0; i < statusChoices.length; i++){
        let statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);
        statusSelectEl.appendChild(statusOptionEl);
    }


    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    
    actionContainerEl.appendChild(statusSelectEl)
    actionContainerEl.appendChild(deleteButtonEl);

    return actionContainerEl;
}

function taskButtonHandler(event){
    console.log(event.target);
    //delete button clicked
    if(event.target.matches(".delete-btn")){
        //console.log("You clicked a delete button.");
        let taskId = event.target.getAttribute("data-task-id");
        deleteTask(taskId);
    }
    //edit button clicked
    if(event.target.matches(".edit-btn")){
        let taskId = event.target.getAttribute("data-task-id");
        editTask(taskId);
    }
}

function deleteTask(taskId){
    let taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
}

function editTask(taskId){
    // get task list item element
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName);

    var taskType = taskSelected.querySelector("span.task-type").textContent;
    console.log(taskType);       

    document.querySelector("#save-task").textContent = "Save Task";
    formEl.setAttribute("data-task-id", taskId);
}