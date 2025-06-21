document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage on page load
    loadTasks();

    // Function to load and display tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        // Avoid adding empty tasks
        if (!taskText.trim()) {
            alert("Please enter a task.");
            return;
        }

        // Create the task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create and append the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            removeTask(taskText);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to localStorage if applicable
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = "";
    }

    // Function to remove task from localStorage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Add task when button is clicked
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Add task on pressing Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });
});
