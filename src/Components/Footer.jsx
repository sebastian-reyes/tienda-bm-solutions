import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer bg-light">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="footer_info">
                                <div className="footer_logo">
                                    <h3 to="/" className="titulo-principal mt-4">BM Technology Solutions</h3>
                                </div>
                                <p>
                                    Estamos dispuestos a brindarte nuestro mejor servicio, por el bienestar de todos.
                                </p>
                                <div className="footer_social">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_widget">
                                <h3>Frecuentes</h3>
                                <ul>
                                    <li><Link to="/">Sobre nosotros</Link></li>
                                    <li><Link to="/">Servicios</Link></li>
                                    <li><Link to="/">Contacto</Link></li>
                                    <li><Link to="/">Locales</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_widget">
                                <h3>Cuenta</h3>
                                <ul>
                                    <li><Link to="/">Mi cuenta</Link></li>
                                    <li><Link to="/login">Ingresar</Link></li>
                                    <li><Link to="/">Order Tracking</Link></li>
                                    <li><Link to="/">Checkout</Link></li>
                                    <li><Link to="/">Lista de deseos</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_widget">
                                <h3>Ayuda</h3>
                                <ul>
                                    <li><Link to="/">Preguntas frecuentes</Link></li>
                                    <li><Link to="/">Terminos y condiciones</Link></li>
                                    <li><Link to="/">Politica de privacidad</Link></li>
                                    <li><Link to="/">Reclamos</Link></li>
                                    <li><Link to="/">Servicio online</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom text-center py-4">
                    <div className="container">
                        <p className="mb-0">
                            Copyright &copy; 2021 BM Technology Solutions. Todos los derechos reservados.
                            Diseñado por <a href="https://github.com/sebastian-reyes" target="_BLANK">Sebastián Reyes</a>
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
