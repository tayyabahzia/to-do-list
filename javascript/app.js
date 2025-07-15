function addTask() {
      let input = document.getElementById('todolist');
      let taskText = input.value.trim();
      if (taskText === '') return;

      let li = document.createElement('li');
      li.textContent = taskText;

      let btn = document.createElement('button');
      btn.textContent = 'Delete';
      btn.onclick = () => li.remove();

      li.appendChild(btn);
      document.getElementById('taskList').appendChild(li);
      input.value = '';
    }