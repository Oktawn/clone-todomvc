import { useState } from "react"
import { todoStore } from "../Store/Store"

function Input() {
    const countTodos = todoStore((state) => state.countTodos)
    const addTodo = todoStore((state) => state.addTodo)
    const [desc, setDesc] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo({ id: countTodos, description: desc, isCompleted: false })
            e.target.value = ""
        }
        if (e.key === "Escape")
            e.target.value = ""
        setDesc(e.target.value)
    }

    return (
        <input className="input-todo" type="text" placeholder="What needs to be done?" onKeyDown={handleKeyDown} />
    )
}

export { Input }