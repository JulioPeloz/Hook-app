import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: "Julio Pelo",
//     mail: "julio@gmail.com"
// }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState()

  return (
    // <UserContext.Provider value={{julio: "Pelo", user:user}}>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
