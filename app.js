const taskList = document.getElementById('taskList');
const add = document.getElementById('addTask');
const menu = document.getElementById('taskCreation');
const msg = document.getElementById('msg');



/*class Task extends HTMLElement{

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
    if (input.value==="") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    }
    else{
        msg.innerHTML = "";
        acceptData();
        console.log("successs");
    }
}
/*
function acceptData(){
    data["text"] = .value;
    console.log(data);
    createTask();
}*/