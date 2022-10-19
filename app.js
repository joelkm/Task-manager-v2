const taskList = document.getElementById('taskList');
const add = document.getElementById('addTask');
const menu = document.getElementById('taskCreation');
const msg = document.getElementById('msg');

const inputs = document.getElementsByClassName('input');

let tasknum = 0;
const tasks=[]; //For them to have constant type


class Task{
    constructor(title, info, date, time){
        this.title = title;
        this.info = info;
        this.date = date;
        this.time = time;
    }
}
/*
class Task extends HTMLElement{

    constructor (){
        super()
    }
    
    connectedCallback(){
        this.innerHTML=`
        <div class='task'>
        <h3>title</h3>
        <div class=managbuttons>
        <button id class= "button">+</button>
        </div>
        </div>
        `
    }
}

window.customElements.define('task-element', Task);
*/


add.addEventListener('click', newTask);

function newTask(){
    console.log('click');
    menu.style.visibility= 'visible';
}

menu.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("post request");
    formValidation();
});

function formValidation(){
    if (inputs[0].value==="") {
        msg.innerHTML = "Title cannot be blank";
        console.log("failure");
    }
    else{
        msg.innerHTML = "";
        acceptData();
        console.log("successs");
    }
}

function acceptData(){
    tasks[tasknum]= new Task(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    console.log(tasks[tasknum]);
    tasknum++;
    console.log(tasknum+'tasks in total');
    /*createTask();*/
}
/*
createTask(){

}*/