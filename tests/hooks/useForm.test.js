import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"

describe('Pruebas en el useForm', () => { 

    const initialForm = {
        name: 'Julio',
        email: 'julio@gmail.com'

    }

    test('Debe regresar los valores por defecto', () => { 
        const {result} = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
          })

     })

    test('Debe cambiar el nombre del formulario', () => { 
        const newValue = 'Pelo';
        const {result} = renderHook( () => useForm(initialForm) );
        const {onInputChange} = result.current;

        act(() => (
            onInputChange({target: {name:'name', value:newValue}})
        ));

        expect(result.current.name).toEqual(newValue);
        expect(result.current.formState.name).toBe(newValue);

     })

    test('Debe realizaar el reset del formulario', () => { 
        const newValue = 'Pelo';
        const {result} = renderHook( () => useForm(initialForm) );
        const {onInputChange, onResetForm} = result.current;

        act(() => {
            onInputChange({target: {name:'name', value:newValue}});
            onResetForm();
        });

        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

     })
 })