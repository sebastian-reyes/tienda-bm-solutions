import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="55" height="25" className="me-2" alt=""/>
                            BM Technology
                        </Link>
                        <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mt-1" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/carrito"><FaShoppingCart /> Carrito</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/login"><FaUserAlt /> Iniciar Sesión</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar
