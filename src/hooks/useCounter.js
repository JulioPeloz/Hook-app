import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) =>{
        setCounter((current) => current+value); //de esta manera se utiliza el valor actual y se suma
    }

    const decrement = (value = 1) =>{
        if(counter === 0) return;
        setCounter((current) => current-value);
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter:counter,
        increment,
        decrement,
        reset
    }
}