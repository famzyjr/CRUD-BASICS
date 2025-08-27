let form = document.getElementById('form');
let input = document.getElementById('textInput');
let msg = document.getElementById('msg');
let ms = document.getElementById('ms');
let dateInput = document.getElementById('dateInput')
let textarea = document.getElementById('textarea')
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation()
})

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [];

let acceptData = () => {
  data.push({
  'text':input.value,
  'date': dateInput.value,
  'description': textarea.value,
  })
  console.log(data);
  // localstorage.setdata is use to store the item. te localstorage takes a key and a Value, localstorage.getItem is use to rective data
  localStorage.setItem("data",JSON.stringify(data));
createTasks()
}

let createTasks = () => {
  tasks.innerHTML = '';
  data.map((item,index)=>{
      tasks.innerHTML += `
 <div>
   <p>${index}</p>
 <span class="fw-bold">${item.text}</span>
 <span class="small text-secondary">${item.date}</span>
  <p>${item.description}</p>
    <span class="options">
      <i onclick='editTask(this)'  data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit" aria-hidden="true"></i>
      <i  onclick='deletTask(this)' class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </div>`;
            console.log(data);
            
  return
  })

  restForm();
}

let deletTask =(e)=>{
 e.parentElement.parentElement.remove()
 data.splice(e.parentElement.parentElement.id, 1)
  localStorage.setItem("data",JSON.stringify(data));
 console.log(e.parentElement.parentElement.id);
 
}

let editTask =(e)=>{
  let selectedTask =  e.parentElement.parentElement;
  input.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;
deletTask(e)

}

let restForm = () => {
  input.value = '';
  dateInput.value = '';
  textarea.value = '';
}
(()=>{
  data  = JSON.parse(localStorage.getItem('data'))
  createTasks()
  console.log(data);
  
})()