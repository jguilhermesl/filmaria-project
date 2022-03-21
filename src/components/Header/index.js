import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    
    return (
        <>
        <header>
            <Link to="/" className="h1-header"> <i className='bx bx-movie-play'></i> Filmaria</Link>
            <div className="div-input-header">
                <input className="input-header" placeholder='O que você quer assistir?' />
                <i className='bx bx-search'></i>
            </div>
            <Link to="/favoritos" className="icon-menu-header">Favoritos</Link>
        </header>
        </>
    )
}

export default Header;