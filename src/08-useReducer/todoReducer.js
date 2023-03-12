

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add ToDo":
        
        return [ ...initialState, action.payload]
  
    case '[TODO] Remove ToDo':
        return initialState.filter(todo => todo.id !== action.payload);

    case "[TODO] Toggle ToDo":
        return initialState.map( todo => {

          if(todo.id === action.payload){ //action.payload es el id del todo
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo
        })
    default:
        return initialState;
  }
}
