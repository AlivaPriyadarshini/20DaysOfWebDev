const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        taskList.innerHTML += `
        
        <li>

            ${task}

            <button class="delete" onclick="deleteTask(${index})">
                Delete
            </button>

        </li>

        `;

    });

}

addBtn.addEventListener("click",()=>{

    if(taskInput.value===""){

        alert("Please enter a task!");

        return;

    }

    tasks.push(taskInput.value);

    taskInput.value="";

    renderTasks();

});

function deleteTask(index){

    tasks.splice(index,1);

    renderTasks();

}