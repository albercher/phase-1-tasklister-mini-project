document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault()
      buildTask(e.target["new-task-description"].value) 
        //use brackets since id has hyphens, but you could do .new_task_description if it wasnt hyphenated
      
    })
});

function buildTask(task){
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = "X";
  p.textContent = `${task} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove();
}

function handleAsc(e){
  e.target.tasks.sort();
}

// let myToDos = document.querySelector("#list h2");
// let sortAsc = document.createElement('button');
// document.querySelector(`#list`).insertBefore(sortAsc, myToDos)
// // document.querySelector('#list').appendChild(sortAsc);
// sortAsc.addEventListener('click', handleAsc);
// sortAsc.textContent = "Asc";