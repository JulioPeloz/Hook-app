import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en el LoginPage', () => { 
    test('Debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}} >
                <LoginPage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
     });

     test('Debe llamar al setUser cuando se presiona el botón', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}} >
                <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith({"id": 1234, "mail": "julio@gmail.com", "name": "julio"});
     });
 })