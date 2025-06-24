const $addTodo = document.getElementById('addTodo');
const $todoList = document.getElementById('todoList');

// Add todo when user presses Enter
$addTodo.addEventListener('keypress', (e) => {
  if (e.code === 'Enter' && e.target.value.trim() !== '') {
    const todo = e.target.value.trim();
    const todoId = new Date().getTime();

    const $todoItem = document.createElement('li');
    $todoItem.innerHTML = `
      <input type="checkbox" id="${todoId}">
      <label for="${todoId}">${todo}</label>
    `;

    $todoList.appendChild($todoItem);
    $addTodo.value = '';
  }
});

// Toggle strike-through when checkbox is checked
$todoList.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    const li = e.target.parentElement;
    li.style.textDecoration = e.target.checked ? 'line-through' : 'none';
  }
});
