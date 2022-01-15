import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TodosItem } from './TodosItem';

export const TodosList = React.memo(({ doneTodos, titleFilter }) => {

    const { todos } = useSelector(state => state.todos)
    const [filterTodos, setFilterTodos] = useState(todos)

    useEffect(() => {
        if (doneTodos !== "searched") {
            setFilterTodos(todos.filter(e => e.done === doneTodos))
        } else {
            setFilterTodos(todos.filter(e => e.title.toLowerCase().includes(titleFilter?.toLowerCase())))
        }
    }, [doneTodos, todos, titleFilter])

    return (
        <ul className="index__todo-list">
            {filterTodos.map(todo => (
                <TodosItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
})
