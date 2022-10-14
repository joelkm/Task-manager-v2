class Task extends HTMLElement{

    constructor (){
        super()
    }
    
    connectedCallback(){
        this.innerHTML="<div class='task'><h3>title</h3><div class=managbuttons><button id class= "button">+</button></div></div>"
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
