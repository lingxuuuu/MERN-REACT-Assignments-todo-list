import React, {useState} from 'react'

function NewTodo( {createTodo} ) {

    const [todoText, setTodoText] = useState('');

    const submitTodo = (e) => {
        e.preventDefault();

        createTodo({
            "body" : todoText,
            "completed" : false,
        })

        setTodoText('');
    }

    return (
        <div>
            <form onSubmit={submitTodo}>
                Add A Todo <input type = "text" value = {todoText} onChange = { e => setTodoText(e.target.value)} />
                <button type="submit"> Create a new todo </button>
            </form>
        </div>
    )
}

export default NewTodo
