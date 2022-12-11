import { useEffect } from "react"
import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: "recolectar la piedra del alma",
    //     done: false
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: "recolectar la piedra del tiempo",
    //     done: false
    // },

]

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos)); //Toma los todos y los guarda en el almacenamiento local
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: id
        })
    }

  return (
    <>
        <h1>TodoApp: 10 <small>Pendientes: 2</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo= {id => handleDeleteTodo(id)}/>
            </div>

            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr/>
                {/* ToDoAdd onNewTodo(todo) */}
                <TodoAdd onNewTodo={todo => handleNewTodo(todo)}/>
            </div>
        </div>


    </>
  )
}
