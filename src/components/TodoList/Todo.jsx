

function Todo({ todo, toggleComplete }) {
    return (
        <li>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => toggleComplete(todo.id)} />
            {todo.description}
        </li>
    )
}


export { Todo }