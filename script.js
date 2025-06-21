// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to task item
        li.appendChild(removeBtn);

        // Add task item to list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event: Button click
    addButton.addEventListener('click', addTask);

    // Event: Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
