import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas del TodoItem', () => { 

    const todoMock = {
        id: 1,
        description: "Descripción de prueba 1",
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el ToDo pendeiente de mostrar', () => { 
        render(
            <TodoItem 
                todo={todoMock} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center ');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
     })

    test('Debe mostrar el ToDo completado', () => { 

        todoMock.done = true;

        render(
            <TodoItem 
                todo={todoMock} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
     })

    test('Debe llamar al ToggleTodo cuando se le hace click', () => { 
        render(
            <TodoItem
                todo={todoMock}
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todoMock.id);
     });

     test('Debe llamar al DeleteTodo al presionar el botón', () => { 
        render(
            <TodoItem
                todo={todoMock}
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todoMock.id);
     });
 })