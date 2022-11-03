import React from "react";
import './estilos.scss';  
import {Link} from "react-router-dom"
import CartWidget from './CartWidget'

const NavBar = () =>{

    return(
        <>
            <header id="main-header" className="header">
            <Link className="h1" to="/">GRIS</Link>
            <Link className="Boton-Inicio" to="/info">Sobre Nosotros</Link>
            <nav> 
                <Link to="/"className="material-icons">home</Link>
                <Link to="/productos/:id"className="material-icons">search</Link>
                <Link to="/d"className="material-icons">more_horiz</Link>
                <Link to="/dds"className="material-icons"></Link>
                <CartWidget/>
            </nav>
            </header>
        </>
       
    )
}

export default NavBar