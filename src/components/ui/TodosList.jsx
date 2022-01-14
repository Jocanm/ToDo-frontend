import React from 'react'
import { useSelector } from 'react-redux'
import { TodosItem } from './TodosItem';

export const TodosList = () => {

    const {todos} = useSelector(state => state.todos)
    console.log("Mis todos",todos);

    return (
        <ul className="index__todo-list">
            {todos.map(todo=>(
                <TodosItem key={todo.id} title={todo.title}/>
            ))}
        </ul>
    )
}
