class Task extends HTMLElement{

    constructor (){
        super()
    }
    
    connectedCallback(){
        this.innerHTML="<div class='task'></div>"
    }
}

window.customElements.define('task-element', Task);

const taskList = document.getElementById('taskList');
const add = document.getElementById('addTask');

add.addEventListener('click', newTask);

function newTask(){
    taskList.innerHTML += '<task-element></task-element>';
    console.log('click');
}
