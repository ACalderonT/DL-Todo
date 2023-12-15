const taskContainer = document.getElementById("list-container");
const totalTasksContainer = document.getElementById("total-tasks");
const completedTaskContainer = document.getElementById("completed-tasks");
const addBtn = document.getElementById("add-btn");
const addInput = document.getElementById("add-input");
const searchInput = document.getElementById("seach-input");
const getEmail = document.getElementById('get-email');

const tasks = initialTasks;
let idCount = 4;
let totalTasks = 0;
let taskDone = 0;

const renderTasks = (taskContainer, tasksArray) => {
  let listItem = "";
  tasksArray.forEach((task) => {
    listItem += `${taskTemplate(task.id, task.name, task.completed)}`;
  });
  taskContainer.innerHTML = listItem;
};

const renderTotalTaskCount = (tasksArray) => {
  totalTasksContainer.innerHTML = tasksArray.length;
};

const renderTasksDoneCount = (tasksArray) => {
  const taskDone = tasksArray.filter((task) => task.completed);

  completedTaskContainer.innerHTML = taskDone.length;
};

const onClickCheck = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  tasks[index].completed = !tasks[index].completed;

  tasks.sort((x, y) => x.completed - y.completed);
  render(tasks);
};

const onDeleteClick = (id) => {
  const index = tasks.findIndex((task) => task.id === id);

  tasks.splice(index, 1);

  render(tasks);
};

const onChangeNewTask = () => {
  if (addInput.value.trim() != "") {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
};

const onClickNew = () => {
  const newTask = {
    id: idCount,
    name: addInput.value,
    completed: false,
  };

  tasks.push(newTask);
  idCount += 1;
  render(tasks);
  addInput.value = "";
  onChangeNewTask();
};

const onSearch = () => {
  if (searchInput.value.trim() != "") {
    const valueSearched = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(valueSearched)
    );

    render(filteredTasks);
  } else {
    render(tasks);
  }
};

const onClickEmail = () => {
  navigator.clipboard.writeText(getEmail.value);
}

const render = (taskList) => {
  renderTasks(taskContainer, taskList);
  renderTotalTaskCount(taskList);
  renderTasksDoneCount(taskList);
};

render(tasks);
