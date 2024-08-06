import { create } from "zustand";

export const todoStore = create((set, get) => ({
    todos: [{ "id": 0, "description": "", "isCompleted": false }],
    addTodo: (todo) => set(state => ({
        todos: [...state.todos, todo]
    })),
    toggleComplete: (id) => set(state => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
    })),
    updateTodo: (id, desc) => set(state => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, description: desc } : todo
        )
    })),
    countTodos: () => get().todos.length
}))