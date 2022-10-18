const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const tasks = document.getElementById('tasks')

let data={};

form.addEventListener('submit', (e)=>{
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

function acceptData(){
    data["text"] = input.value;
    console.log(data);
    createTask();
}

function createTask(){
    tasks.innerHTML+=`
    <div>
          <p>${data.text}</p>
          <span class="options">
            <i onClick="updateTask(this)" class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `;
    input.value="";
}

function updateTask(e){
    input.value=e.parentElement.previousElementSibling.innerHTML;
    deleteTask(e);
}

function deleteTask(e){
    e.parentElement.parentElement.remove();
}
