import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from './NavBar.jsx'
import Footer from '../layout/Footer.jsx'
import Hero from '../Hero/Hero.jsx'

const RootLayout = () => {
    return (
        <main>
            <NavBar></NavBar>
            <div>
                <Outlet/>
            </div>
            <Footer></Footer>
        </main>
    )
}
export default RootLayout
