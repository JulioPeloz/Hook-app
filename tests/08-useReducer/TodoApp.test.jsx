import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

    jest.mock('../../src/hooks/useTodos');

describe('Pruebas del TodoApp', () => { 

    useTodos.mockReturnValue({
        todos:[
            {id:1, description: "Todo 1", done:false},
            {id:2, description: "Todo 2", done:true},
            {id:3, description: "Todo 3", done:false},
        ], 
        todosCount: 3, 
        pendingTodosCount: 2, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    });

    test('Debe mostrar el componente correctamente', () => { 
        render(<TodoApp/>);
        expect(screen.getByText("Todo 1")).toBeTruthy();
        expect(screen.getByText("Todo 2")).toBeTruthy();
        expect(screen.getByText("Todo 3")).toBeTruthy();

     })
 })