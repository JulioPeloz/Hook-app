import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        //Aqui se espera que se contenga el texto de "Loading" y "Breaking Bad quotes"
        expect( screen.getByText("Loading..."));
        expect( screen.getByText("Breaking Bad quotes"));

        //Aqui se busca el botón con el nombre "Next quote" y se verifica que esté desabilitado
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
        screen.debug(); //Imprime los elementos de MCH
     });

    test('Debe mostrar una quote', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Julio', quote: 'Buenas noches'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        expect( screen.getByText('Buenas noches')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();
     })

    test('Debe llamar la función de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [{author: 'Julio', quote: 'Buenas noches'}],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        useCounter
        expect(mockIncrement).toHaveBeenCalled();
     })
});