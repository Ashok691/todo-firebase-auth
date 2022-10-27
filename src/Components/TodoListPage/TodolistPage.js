import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../Firebase/firebase'
import { useNavigate } from 'react-router-dom'
import AddToDo from './Util/AddToDo'
import TodoList from './Util/TodoList'
import './TodoListPage.css'
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  QuerySnapshot,
} from 'firebase/firestore'

import { db } from '../../Firebase/firebase'

function TodoListPage() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const handleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const navigate = useNavigate()

  const signOutHere = () => {
    auth.signOut();
    navigate('/')
  }

  const [user, loading, error] = useAuthState(auth)

  return (
    <div className='main'>
      <header className='page-header'>
        <div>TODOS</div>
        <div>WELCOME {user?.displayName.toUpperCase()}</div>
        <button className="signOut-button" onClick={() => signOutHere()}> SIGN OUT</button>
      </header>

      <div className='todo-card'>

        <div className='input-todo'>
          <AddToDo/>
        </div>

        <div className='added-todos'>
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>


    </div>

  )
}

export default TodoListPage