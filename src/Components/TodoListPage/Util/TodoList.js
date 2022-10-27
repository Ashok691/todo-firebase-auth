import React, { useState } from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import './TodoList.css'
function TodoList({ todo, handleComplete, handleDelete, handleEdit }) {
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleChange = (e) => {
        e.preventDefault();
        if(todo.completed === true){
            setNewTitle(todo.title)
        }
        else{
            todo.title = ""
            setNewTitle(e.target.value)
        }
    }

    return (
        <div className='todo-container'>
            <input className = "added-todos" style={{textDecoration: todo.completed && "line-through"}}
            type = "text"
            value = {todo.title === "" ? newTitle : todo.title}
            onChange={handleChange}
            />

            <div>
                <button className='check-buttons check-cirle' onClick={() => handleComplete(todo)}>
                    <CheckCircleIcon id = 'i' />
                </button>

                <button className='check-buttons ' onClick={() => handleEdit(todo, newTitle)}>
                    <EditIcon id = "i" />
                </button>

                <button className='check-buttons delete-button'  onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon id = "i" />
                </button>
            </div>
        </div>
    )
}

export default TodoList