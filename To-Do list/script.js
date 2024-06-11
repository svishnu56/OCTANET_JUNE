document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task';
            li.innerHTML = `
                <span>${taskText}</span>
                <button>Remove</button>
            `;

            li.querySelector('span').addEventListener('click', () => {
                li.classList.toggle('completed');
                updateTaskOrder();
            });

            li.querySelector('button').addEventListener('click', () => {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function updateTaskOrder() {
        const tasks = Array.from(taskList.children);
        tasks.sort((a, b) => a.classList.contains('completed') - b.classList.contains('completed'));
        tasks.forEach(task => taskList.appendChild(task));
    }
});