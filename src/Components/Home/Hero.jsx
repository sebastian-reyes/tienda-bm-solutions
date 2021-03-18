import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import cam from '../../assets/img/hero/Logitech-C925E-01.png'

const Hero = () => {
    return (
        <Fragment>
            <section className="hero p-4 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero_producto">
                                <div className="hero_producto-fondo"></div>
                                <img src={cam} alt="producto_1" className="hero_producto-img img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero_datos mt-5">
                                <span className="hero_datos-nuevo">Nuevo</span>
                                <h2 className="hero_datos-nombre titulo-principal mb-2">Cámara Logitech C925E</h2>
                                <p className="hero_datos-descripcion">Cámara web Logitech apta para cualquier tipo de trabajo.</p>
                                <Link to="/" className="btn btn-sesion">Cómprala ahora</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero
