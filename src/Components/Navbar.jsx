import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container mt-1">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} width="55" height="25" className="me-2" alt="" />
                            BM Technology
                        </Link>
                        <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <div className="row w-100 mx-auto">
                                <div className="col-lg-8">
                                    <input type="text" className="form-control rounded-pill search" placeholder="¿Qué estás buscando?" />
                                </div>
                                <div className="col-lg-4">
                                    <ul className="navbar-nav mb-lg-0 ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/carrito"><FaShoppingCart /> Carrito</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" aria-current="page" to="/login"><FaUserAlt /> Iniciar Sesión</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar
