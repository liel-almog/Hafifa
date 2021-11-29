const todosText = [];

const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const createTodo = (todo) => {
    const p = document.createElement("p");
    p.classList.add("todo");
    p.innerText = todo;

    p.addEventListener("click", () => {
        p.classList.toggle("erase");
    });
    p.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        p.remove();
        removeTodo(todo);
    });

    return p;
};

const removeTodo = (todoText) => {
    const index = todosText.indexOf(todoText);
    if (index > -1) {
        todosText.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todosText));
};

const onload = () => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
        todos.forEach((todoText) => {
            const todo = createTodo(todoText);
            todoList.appendChild(todo);
            todosText.push(todoText);
        });
    }
};

onload();

const main = () => {
    todoInput.addEventListener("keyup", ({ key }) => {
        const todoText = todoInput.value;
        if (key === "Enter" && todoText) {
            todosText.push(todoText);
            localStorage.setItem("todos", JSON.stringify(todosText));
            const todo = createTodo(todoText);
            todoList.appendChild(todo);
            todoInput.value = "";
        }
    });
};

main();
