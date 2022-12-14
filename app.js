const taskList = document.getElementById('taskList');
const add = document.getElementById('addTask');
const menu = document.getElementById('taskCreation');
const msg = document.getElementById('msg');
const close = document.getElementById('close');

const inputs = document.getElementsByClassName('input');

let tasknum = 0;
const tasks=[]; //For them to have constant type


class Task{
    constructor(title, info, date, time, idnum){
        this.title = title;
        this.info = info;
        this.date = date;
        this.time = time;
        this.idnum = idnum;
    }
    render(title, idnum){
        taskList.innerHTML+=`
        <div id='${idnum}' class='task'>
        <h3>${title}</h3>
        <button onClick="removal(this)">delete</button>
        <button onClick="edit(this)">edit</button> 
        </div>
        `;
    }
}


add.addEventListener('click', newTask);

function newTask(){
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
        console.log("successs");
        createTask();
        closeMenu();
    }
}

function createTask(){
    tasks[tasknum]= new Task(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, tasknum);
    console.log(tasknum);
    console.log(tasks[tasknum]);
    tasks[tasknum].render(tasks[tasknum].title);
    tasknum++;
    console.log(tasknum+' tasks in total');
}

close.addEventListener('click', closeMenu);

function closeMenu(){
    for(i=0;i<4;i++){
        inputs[i].value='';
    }
    menu.style.visibility= 'hidden';
}

function removal(e){
    console.log('works');
    e.parentElement.remove();
}

function edit(e){
    console.log('works');
    removal(e);
    newTask();
}