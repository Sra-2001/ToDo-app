let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let noTask = document.getElementById("noTask");
let allTasks = document.getElementById("allTasks");
let inValidMassege = document.getElementById("inValidMassege");
let closeIcon = document.getElementById("closeIcon");
let theme = document.getElementById("theme");
let themeBtn = document.getElementById("themeBtn");
let body = document.querySelector("body");


themeBtn.addEventListener('click', function(){
    color = theme.value;
    body.style.background = color;
})




let iconClose = () => {
    inValidMassege.classList.add("none");
} 
closeIcon.addEventListener('click', iconClose);


let addTask = () => {
    taskData = taskInput.value;
    if(taskData.length < 3 || taskData.trim() == ""){
        inValidMassege.classList.remove("none");
    }else{
        noTask.classList.add("none");
        allTasks.innerHTML += `
        <div class="task alert alert-info">
        ${taskData}
        <button class="delete btn btn-danger float-right">Remove</button>
        </div>    `
        taskInput.value = "";
        allTasks.addEventListener('click', function(e){
            if (e.target.classList.contains('task')){
                e.target.classList.toggle("checked");
            }
        })
    }
}
addTaskBtn.addEventListener('click', addTask);
document.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    if(allTasks.children.length == 0){
        noTask.classList.remove("none"); 
    }
    
})