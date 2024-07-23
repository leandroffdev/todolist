const tasks = document.querySelector('.tasks');
const btn = document.querySelector('.btn');

const list = [];

class Task {
    constructor(task, desc) {
        this.task = task;
        this.desc = desc;
    }
    // Getters
    getTask() {
        return this.task;
    }
    getDesc() {
        return this.desc;
    }
    //Setters
    setTask(task) {
        this.task = task;
    }
    setDesc(desc) {
        this.desc = desc;
    }
}
function renderTasks() {
    tasks.innerHTML = '';
    list.forEach((item, pos) => {
        tasks.innerHTML += `
                <div class="taskCard">
                    <h2>Title: ${item.getTask()}</h2>
                    <p>Description: ${item.getDesc()}</p>
                    <button class="btn remove" onclick="removeTask(${pos})">Remove task</button>
                </div>
        `
    });
}

function removeTask(pos) {
    list.splice(pos, 1);
    renderTasks();
}

function addTask() {
    const task = document.querySelector('.task');
    const desc = document.querySelector('.desc');
    if(task.value != '' && desc.value != '') {
        const newTask = new Task();
        newTask.setTask(task.value);
        newTask.setDesc(desc.value);
        list.push(newTask);
        renderTasks();
        console.log('clicked', list);
        task.value = '';
        desc.value = '';
    }
}