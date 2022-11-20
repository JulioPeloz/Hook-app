import { useCallback } from "react";
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //useCallback sirve para memorizar funciones y lo que regresa es una función memorizada que solo se actualiza cuando algo cambia
    const incrementFather = useCallback(
      (value) => {
        setCounter((c) => c+value);
      },
      [],
    )
    

    // const incrementFather = () => {
    //     setCounter(counter+1);
    // }

  return (
    <>
        <h1> useCallback Hook: { counter }</h1>
        <hr/>

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
