import React, { useContext } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const BreadCrum = () => {
    const AuthPasser = useContext(AuthContext)
    const screenerDisplay = {
        "display": AuthPasser.displayScreener ? "block" : "none"
    }
    const handlerSetters = (e) => {
        e.preventDefault();
        AuthPasser.setdisplayScreener(false)
        window.history.replaceState({}, '', '/');
    }
    return (
        <div className='BredcrumContainer' style={screenerDisplay}>
            <BrowserRouter>
                <Link to="/" onClick={(e) => { handlerSetters(e) }}>Home</Link>
                <Routes>
                    <Route exact path='/'></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default BreadCrum