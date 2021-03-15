import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker, HiOutlineMail, HiPhone } from 'react-icons/hi'
import { FiUserPlus } from 'react-icons/fi'
import { AiOutlineLogin } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

const Sesion = () => {
    const [user, setUser] = useState(true)

    const registro = () => {
        if (user == true) {
            setUser(false);
        } else {
            setUser(true);
        }

    }

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
                        {
                            user == true ?
                                (
                                    <Fragment>
                                        <h1 className="titulo-principal text-center">Inicia Sesión</h1>
                                        <div className="formBox">
                                            <div className="container col-lg-8">
                                                <form>
                                                    <label>Correo:</label>
                                                    <input type="text" className="form-control mb-3" placeholder="Ingrese su correo" />
                                                    <label>Contraseña:</label>
                                                    <input type="text" className="form-control mb-3" placeholder="Ingrese su contraseña" />
                                                    <button className="btn btn-sesion w-100 mb-3">Iniciar Sesión <AiOutlineLogin /></button>
                                                    <span>Aún no estás registrado? <Link to="/login" onClick={registro}>Registrate aquí</Link> </span>
                                                </form>
                                            </div>
                                        </div>
                                    </Fragment>
                                ) :
                                (
                                    <Fragment>
                                        <h1 className="titulo-principal text-center">Registrate con nosotros</h1>
                                        <div className="formBox">
                                            <div className="container col-lg-8">
                                                <form>
                                                    <div className="row mb-1">
                                                        <div className="col-lg-6">
                                                            <label>Nombres:</label>
                                                            <input type="text" className="form-control" placeholder="Nombres" />
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Apellidos:</label>
                                                            <input type="text" className="form-control" placeholder="Apellidos" />
                                                        </div>
                                                    </div>
                                                    <label>DNI:</label>
                                                    <input type="text" className="form-control mb-1" placeholder="Ingrese un DNI válido" />
                                                    <label>Correo:</label>
                                                    <input type="text" className="form-control mb-1" placeholder="Ingrese su correo" />
                                                    <label>Contraseña:</label>
                                                    <input type="text" className="form-control mb-3" placeholder="Ingrese su contraseña" />
                                                    <button className="btn btn-sesion w-100 mb-3">Registrate <FiUserPlus /></button>
                                                    <span>Ya tienes cuenta? <Link to="/login" onClick={registro}>Inicia Sesión</Link> </span>
                                                </form>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Sesion
