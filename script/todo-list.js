let todoArray = [];

function renderTodoList() {
    let todoListHTML =  '';
    
    for (let i = 0; i < todoArray.length; i++) {
        const todo = todoArray[i];
        const html = `
            <p>
                ${todo}
                <button onclick="todoArray.splice(${i},1);">Delete</button>
            </p>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list-div').innerHTML = todoListHTML;
}

function addTodo() {
    const todo = document.querySelector('.js-todo-input').value;
    todoArray.push(todo);
    document.querySelector('.js-todo-input').value = '';

    renderTodoList();
}