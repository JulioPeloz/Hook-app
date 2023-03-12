import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Kike</h1>
        <Navbar/>
        <hr/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="about" element={<AboutPage/>}/>

            <Route path="/*" element={<Navigate to="/login"/>}/> {/* Esta es una ruta para enviar al login si la ruta escrita no existe */}
        </Routes>
    </UserProvider>
  )
}
