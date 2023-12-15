const taskTemplate = (id, name, completed) => {
  return `
    <li class="list-item">
        <div class="task-info">
            <span class='${completed ? 'task-done' : ''}'>${id}</span>
            <span class='${completed ? 'task-done' : ''}'>${name}</span>
        </div>
        <div class='buttons-container'>
            <button onClick='onClickCheck(${id})' class="${completed ? 'check-btn' : 'uncheck-btn'}">
                <i class="fa-solid ${completed ? 'fa-check' : 'fa-minus'}"></i>
            </button>
            <button onClick='onDeleteClick(${id})' class="${completed ? 'uncheck-btn' : 'delete-btn'}">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    </li>
    `;
};
