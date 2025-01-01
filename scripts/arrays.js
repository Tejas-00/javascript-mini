let todoArray = JSON.parse(localStorage.getItem('array'));
if (!todoArray) {
    todoArray = [];
}

function addTodo(){
    const todoElement = document.querySelector('.js-todo1-input');
    const todoTask = todoElement.value;
    todoArray.push(todoTask);
    console.log(todoArray);
    todoElement.value = '';
    localStorage.setItem('array',JSON.stringify(todoArray));
}

const todoArray2 = [];

function displayTodo() {
    let todoListHTML = ''
    const todoElement = document.querySelector('.js-todo2-input');
    const todoTask = todoElement.value;
    todoArray2.push(todoTask);
    todoElement.value = '';
    for (let i = 0; i < todoArray2.length; i++) {
        const todo = todoArray2[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML
}