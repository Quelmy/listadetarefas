import React, { useState, useEffect } from 'react';
import Create from './Create';
import './App.css'
import axios from 'axios'


function Home() {
       const [todos, setTodos] = useState([])
       useEffect(() => {
         axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));

        }, []);

        const handleEdit = (id) => {
            axios.put('http://localhost:3001/update/'+id)
            .then(result => {
                location.reload()
            })
            .catch(err => console(err))
        }

        const handleDelete = (id) => {
            axios.delete('http://localhost:3001/delete/'+id)
            .then(result => {
                location.reload()
            })
            .catch(err => console(err))
        }


    return (
        <div className='home'>
            <h2>Tado list</h2>
            <Create />
            {
                todos.length === 0?
                
                <div><h2>No record</h2></div>
                :
                todos.map(todo => (
                    <div className='task'>
                        <div className='checkbox' onClick={() => handleEdit(todo_id)}>
                            {todo.done ?
                                <BsFillCircleFill className='icon'></BsFillCircleFill>
                            : <BsCircleFill className='icon' />    
                            }
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                         
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/></span>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Home;