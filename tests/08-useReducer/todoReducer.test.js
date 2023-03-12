import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo ToDo',
        done: false,
    }]

    test('Debe regresar el estado inicial', () => { 
        const newState = todoReducer( initialState, {}); //al mandar un objeto vacío en todoReducer, no cae en ningun case del switch por lo cual cae en 'default'. Default está regresando 'initialState'

        expect(newState).toBe(initialState);
     })

    test('Debe agregar un ToDo', () => { 
        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 2,
                description:"Demo ToDo 2",
                done:false,
            }
        };
        const newState = todoReducer( initialState, action)

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
     })

    test('Debe eliminar un ToDo', () => { 
        const action = {
            type: '[TODO] Remove ToDo',
            payload: 1
        };
        const newState = todoReducer( initialState, action)

        expect(newState.length).toBe(0);
        
     })

    test('Debe hacer toggle de un ToDo', () => { 
        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1
        };

        const newState = todoReducer( initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer( newState, action);
        expect(newState2[0].done).toBe(false);
     })
 })