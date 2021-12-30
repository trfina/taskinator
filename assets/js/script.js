// var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler =  function(event) {

    event.preventDefault();  
    // console.log(event);

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // console.dir(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    // console.dir(taskTypeInput);

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    // create list item that has a div (child) with class name of taskInfoEl.className and innerHTML of a header with content created from taskNameInput and taskTypeInput
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

// buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit",createTaskHandler);