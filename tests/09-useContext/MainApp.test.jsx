import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Pruebas dentro de MainApp', () => { 
    test('Debe mostrar el HomePage', () => { 
        render( //Usamos el MemoryRouter porque el MainApp está dentro de un BrowserRouter
            <MemoryRouter> 
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
     });

     test('Debe mostrar el LoginPage', () => { 
        render( //Usamos el MemoryRouter porque el MainApp está dentro de un BrowserRouter
            <MemoryRouter initialEntries={['/login']}> 
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
     });
 })