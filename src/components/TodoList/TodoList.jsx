import { todoStore } from "../Store/Store"

function TodoList() {
    const todos = todoStore((state) => state.todos)
    return (
        <div>
            <ul className="list-style-none">
                {todos.map((todo) => <li key={todo.id}>
                    {todo.description}
                    <input type="checkbox" value={todo.isCompleted} />
                </li>)}
            </ul>
        </div>
    )
}

export { TodoList }