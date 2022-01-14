import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TodosItem } from './TodosItem';

export const TodosList = React.memo(({doneTodos}) => {

    const {todos} = useSelector(state => state.todos)
    const [filterTodos,setFilterTodos] = useState(todos)

    useEffect(() => {
        setFilterTodos(todos)
    },[todos])

    useEffect(()=>{
        setFilterTodos(todos.filter(e=>e.done === doneTodos))
    },[doneTodos,todos])

    return (
        <ul className="index__todo-list">
            {filterTodos.map(todo=>(
                <TodosItem key={todo.id} {...todo}/>
            ))}
        </ul>
    )
})
