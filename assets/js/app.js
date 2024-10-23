const taskForm = document.querySelector('#taskForm')
const taskList = [];
taskForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event.target.category.options[event.target.category.selectedIndex].text)
  if(event.submitter.id === "clear"){
    taskForm.reset();

  }
  if(event.submitter.id === "save"){
    const task = {
      title: event.target.title.value,
      description:event.target.description.value,
      category: event.target.category.value,
      category_description: event.target.category.options[event.target.category.selectedIndex].text,
      status : "active"
    };

    taskList.push(task)
    const taskList_string = JSON.stringify(taskList);
    localStorage.setItem('taskList', taskList_string);
    taskForm.reset();
    
    
    const taskList_temp = JSON.parse(localStorage.getItem('taskList'));
    console.log("tarea recuperada: ", taskList_temp);

    const taskContainer = document.querySelector('#taskContainer');

    if(taskList_temp){
      taskList_temp.forEach((task, index) => {
        console.log(index, task)
        taskContainer.innerHTML += `
        <article>
          <span>${ index }</span>
          <h3>${ task.title }</h3>
          <p>${ task.description }</p>
          <span>${ task.status }</span>
          <span>${ task.category_description }</span>
          <span>${ task.category }</span>
        </article>
        `
      })
    }
  }
})




