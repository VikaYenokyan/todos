const form = document.querySelector(".todo__form"),
  input = document.querySelector(".todo__input"),
  listItem = document.querySelector(".todo__tasks");

let tasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
saveTasksToStorage()

// Функция обновления данных в localStorage
function saveTasksToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// функция отмечает задачу как выполненную
function checkTask(elem) {

  const text = elem.querySelector('.task__input')
  const checkbox = elem.querySelector('.task__checkbox')

  checkbox.addEventListener('change', (e) => {
    if (e.currentTarget.checked) {
      text.style.textDecoration = "line-through";
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].text === text.value) {
          tasks[i].checked = true;
        }
      }
    } else {
      text.style.textDecoration = "none";
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].text === text.value) {
          tasks[i].checked = false;
        }
      }
    }
    saveTasksToStorage()
  });
}

// функция для редактирования задач
function editTask(elem) {
  let text = elem.querySelector('.task__input')
  let editBtn = elem.querySelector('.task__edit')
  let checkbox = elem.querySelector('.task__checkbox')

  editBtn.addEventListener('click', () => {
    if (!checkbox.checked) {
      let index
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].text === text.value) {
          index = i;
        }
      }

      text.removeAttribute("readonly");
      text.focus();

      let saveBtn = document.createElement("button");
      saveBtn.classList.add("task__save");

      let saveImg = document.createElement("img");
      saveImg.src = "images/save.svg";
      saveImg.alt = "task__save";

      saveBtn.append(saveImg);

      editBtn.replaceWith(saveBtn);

      saveBtn.addEventListener('click', () => {
        text.setAttribute("readonly", "readonly");
        saveBtn.replaceWith(editBtn);

        tasks[index].text = text.value
        saveTasksToStorage()
      });
    }
  });
}

// функция для удаления задач
function deleteTask(elem) {
  const deleteBtn = elem.querySelector('.task__delete')
  deleteBtn.addEventListener('click', () => {
    listItem.removeChild(elem);

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].text === elem.querySelector('input[type="text"]').value) {
        tasks = tasks.filter((t) => t.text !== elem.querySelector('input[type="text"]').value);
        saveTasksToStorage();
      }
    }
  });
}

// функция для отрисовки задач из localStorage
function setTasks() {
  if (tasks.length > 0) {
    for (let i = 0; i < tasks.length; i++) {

      let elem = document.createElement('div');
      elem.classList.add('task');
      elem.append(tmpl.content.cloneNode(true));
      elem.querySelector('input[type="text"]').value = tasks[i].text;
      if (tasks[i].checked) {
        elem.querySelector('.task__checkbox').checked = true
        // savedTasks[i].text.style.textDecoration = "line-through";
        elem.querySelector('input[type="text"]').style.textDecoration = "line-through";
      }

      listItem.append(elem);

      checkTask(elem)
      editTask(elem)
      deleteTask(elem)
    }
  }
}

export default function todo() {

  setTasks()

  form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const taskText = input.value;

    if (!taskText) {
      alert("Please fill out the task");
      return;
    }

    let elem = document.createElement('div');

    elem.classList.add('task');
    elem.append(tmpl.content.cloneNode(true));
    elem.querySelector('input[type="text"]').value = taskText;

    let taskItem = {
      id: tasks.length + 1,
      text: taskText,
      checked: false
    }

    tasks.push(taskItem)

    saveTasksToStorage()

    listItem.append(elem);

    checkTask(elem)
    editTask(elem)
    deleteTask(elem)

    input.value = "";
  });
}