import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import cam from '../../assets/img/hero/Logitech-C925E-01.png'
import teclado from '../../assets/img/hero/teclado_hyperx_alloy_fps.png'
import mouse from '../../assets/img/hero/razer_viper_ultimate.png'
import { GrPrevious, GrNext } from 'react-icons/gr'

const Hero = () => {
    return (
        <Fragment>
            <section className="hero p-3 mb-5">
                <div className="container">
                    <div id="carousel-hero" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner carousel-hero">
                            <div className="carousel-item active">
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
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="hero_producto">
                                            <div className="hero_producto-fondo"></div>
                                            <img src={teclado} alt="producto_2" className="hero_producto-img img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="hero_datos mt-5">
                                            <span className="hero_datos-nuevo">Nuevo</span>
                                            <h2 className="hero_datos-nombre titulo-principal mb-2">Teclado HyperX Alloy FPS</h2>
                                            <p className="hero_datos-descripcion">Teclado mecánico para gamers, disponible con 3 tipos de swtich</p>
                                            <Link to="/" className="btn btn-sesion">Cómpralo ahora</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="hero_producto">
                                            <div className="hero_producto-fondo"></div>
                                            <img src={mouse} alt="producto_3" className="hero_producto-img img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="hero_datos mt-5">
                                            <span className="hero_datos-nuevo">Nuevo</span>
                                            <h2 className="hero_datos-nombre titulo-principal mb-2">Mouse Razer Viper Ultimate</h2>
                                            <p className="hero_datos-descripcion">Mouse gamer wireless para unas buenas partidas.</p>
                                            <Link to="/" className="btn btn-sesion">Cómpralo ahora</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-hero" data-bs-slide="prev">
                                <GrPrevious />
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel-hero" data-bs-slide="next">
                                <GrNext />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hero
