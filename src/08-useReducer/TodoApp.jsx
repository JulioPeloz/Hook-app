import { useTodos } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

const initialState = []


export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos()

  return (
    <>
        <h1>TodoApp: {todosCount} <small>Pendientes: {pendingTodosCount}</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo= {id => handleDeleteTodo(id)}
                    onToggleTodo= {handleToggleTodo}/>
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
