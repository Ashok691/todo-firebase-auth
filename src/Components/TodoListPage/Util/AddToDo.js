import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../../Firebase/firebase'
import './AddTodo.css'

function AddToDo() {
    const [title, setTitle] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            });
            setTitle("");
        }
    };
    return (
        <div>
            <div>
                <form className='input-form' onSubmit={handleSubmit}>
                    <input className='input-filed' type='text' placeholder="Enter todos" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button className='add-button'>Add</button>
                </form>
            </div>

        </div>
    )
}

export default AddToDo