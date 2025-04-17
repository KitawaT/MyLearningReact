import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const BASE_URL = 'https://67f9f99c094de2fe6ea2cbf7.mockapi.io'

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, Setisloadind] = useState(true)

  async function fetchTodo() {
    try {
      const response = await axios.get(`${BASE_URL}/Users`)
      setTodos(response.data)
      Setisloadind(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  async function DeleteTodo(id) {
    try {
      Setisloadind(true)
      await axios.delete(`${BASE_URL}/Users/${id}`)
      await fetchTodo()
      Setisloadind(false)
    } catch (error) {
      console.log('error', error)
    }

  }

  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <>
      {isLoading && (<div>Loading...</div>)}
      {!isLoading && <div>
        {
          todos.map((todo, index) => (
            <div key={index}>
              {todo.id}_{todo.name}_{todo.createdAt}
              <Link to={`/test/${todo.id}`}>

              <button>แก้ไข</button>
              </Link>
              

              <button
                onClick={async () => {
                  await DeleteTodo(todo.id)
                }}
              >Delete</button>
            </div>
          ))
        }
      </div>
      }
    </>
  )
}

export default App
