function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");


    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;

       
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => taskList.removeChild(li);

        li.appendChild(removeButton);
        taskList.appendChild(li);

        
        taskInput.value = "";
    }
}
