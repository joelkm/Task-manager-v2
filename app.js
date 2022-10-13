const taskList = document.getElementById('taskList');
const Task = params => {

    
    
    return `
    <div>
        <p>Coño</p>
    </div>
    `;
};

const add = document.getElementById('addTask');

add.addEventListener('click', newTask);

function newTask(){
    taskList.innerHTML += Task;
    console.log('click');
}
