import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker, HiOutlineMail, HiPhone } from 'react-icons/hi'
import { AiOutlineLogin } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

const Sesion = () => {
    return (
        <Fragment>
            <section className="sesion">
                <div className="sesion-container">
                    <div className="sesion-info">
                        <div className="container mt-4">
                            <h2 className="text-center">BM Technology Solutions</h2>
                            <ul className="sesion-info-lst">
                                <li>
                                    <span><HiOutlineLocationMarker /></span>
                                    <span className="ms-1">lorem ipsum 431 - Lorem</span>
                                </li>
                                <li>
                                    <span><HiOutlineMail /></span>
                                    <span className="ms-1">lorem_ipsum@gmail.com</span>
                                </li>
                                <li>
                                    <span><HiPhone /></span>
                                    <span className="ms-1">934812566</span>
                                </li>
                            </ul>
                            <ul className="sesion-info-lst-redes">
                                <li className="list-inline-item">
                                    <span><FaFacebook /></span>
                                </li>
                                <li className="list-inline-item">
                                    <span><HiOutlineMail /></span>
                                </li>
                                <li className="list-inline-item">
                                    <span><HiPhone /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sesion-form">
                        <h1 className="titulo-principal text-center">Inicia Sesión</h1>
                        <div className="formBox">
                            <div className="container col-lg-8">
                                <form>
                                    <label>Correo:</label>
                                    <input type="text" className="form-control mb-3" placeholder="Ingrese su correo" />
                                    <label>Contraseña:</label>
                                    <input type="text" className="form-control mb-3" placeholder="Ingrese su contraseña" />
                                    <button className="btn btn-sesion w-100 mb-3">Iniciar Sesión <AiOutlineLogin /></button>
                                    <span>Aún no estás registrado? <Link to="/">Registrate aquí</Link> </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Sesion
