const input = document.getElementById('text');
const button = document.getElementById('button');
const todos = document.getElementById('todos');

button.addEventListener('click', addToDo);


function addToDo(){
    const text = input.value;
    todos.appendChild(todoNode(text))
    console.log(todoNode(text))
}

function todoNode(text){
    const div = document.createElement('div');
    const p = document.createElement('p')
    const check = document.createElement('check');
    p.innerText = text;
    check.setAttribute('class', 'check');
    div.setAttribute('class', 'todo');
    div.appendChild(p);
    div.appendChild(check);
    return div;
}