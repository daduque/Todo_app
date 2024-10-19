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
    console.log(taskList);
    taskForm.reset();

  }
})




