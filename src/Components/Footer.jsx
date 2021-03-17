import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer bg-light">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="footer_info">
                                <div className="footer_logo">
                                    <h3 to="/" className="titulo-principal mt-4">BG Technology Solutions</h3>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci quia, eaque
                                    praesentium.
                                </p>
                                <div className="footer_social">
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="footer_widget">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/">About</Link></li>
                                    <li><Link to="/">Blogs</Link></li>
                                    <li><Link to="/">Services</Link></li>
                                    <li><Link to="/">FAQ</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
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
                        <div className="col-lg-4 col-md-3">
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
            </section>
        </Fragment>
    )
}

export default Footer
