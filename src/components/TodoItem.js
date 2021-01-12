import React, {useState} from 'react';
import TodosList from './TodosList';

const TodoItem = ({todo, idx, updateTodo, deleteTodo}) => {

    const checked = { 'text-decoration': 'line-through' };

    const unchecked = {};



    return (
        <div>
            <p style = {todo.completed? checked : unchecked}> {todo.body}: 
            <input 
                type="checkbox" 
                checked={todo.completed}
                onClick={ (e) => {updateTodo(idx) }
                } /> </p>
            <button onClick={(e)=>{ deleteTodo(idx) }}> Delete </button>
        </div>
    )
}

export default TodoItem;
