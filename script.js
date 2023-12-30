function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;
        
        var taskBox = document.createElement("div");
        taskBox.classList.add("task-box");
        
        var taskX = document.createElement("span");
        taskX.style.fontWeight = "bold";
        taskX.style.color = "red";
        taskX.textContent = "X";
        
        taskBox.appendChild(taskX);
        
        taskBox.addEventListener("click", function() {
            if (taskX.textContent === "X") {
                taskX.textContent = "\u2713";
                taskX.style.color = "green";
            } 
            else if (taskX.textContent === "\u2713") {
                taskX.textContent = "X";
                taskX.style.color = "red";
            }
        });
        taskItem.appendChild(taskBox);
        
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function reset() {
    var taskList = document.getElementById("taskList");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}