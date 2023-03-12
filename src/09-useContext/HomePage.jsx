import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

  const {user} = useContext( UserContext);

    return (
      <>
          <h1>HomePage <small>{user?.name}</small> </h1> {/*Pregunta si el user existe, si no existe no hace nada*/}
          <hr/>

          <pre aria-label="pre">
            {JSON.stringify(user, null, 3)}
          </pre>
      </>
    )
  }