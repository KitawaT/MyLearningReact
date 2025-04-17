import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const BASE_URL = 'https://67f9f99c094de2fe6ea2cbf7.mockapi.io'

export default function Edit() {
    const {id} = useParams()
    const [todo, setTodo] =useState({
      name: ''
    })
    async function fetchTodo(todoId) {
        try {
          const response = await axios.get(`${BASE_URL}/Users/${todoId}`)
          setTodo(response.data)
        } catch (error) {
          console.log('error', error)
        }
      }

    useEffect (()=>{
        fetchTodo(id)
    }, [id])
    
    function NameChange(event){
      setTodo((previousState) => ({
        ...previousState,
        name: event.target.value
      }))
    }
    
    async function UpdateName() {
      try {
        await axios.put(`${BASE_URL}/Users/${id}`, {
          name: todo.name
        })
        alert('อัปเดตเสร็จแล้ว')
      } catch (error) {
        console.log('error', error)
      }
    }
    
    return (
        <>
        <div>
            แก้ไขเพจ {id}
        </div>
        <div>{todo.name}</div>
        <div>
            {todo.id}
            <input 
            onChange={NameChange}
            type="text" 
            value={todo.name}></input>
            <button onClick={UpdateName}>เปลี่ยน</button>
        </div>
        </>
    )
}