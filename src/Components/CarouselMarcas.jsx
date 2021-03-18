import React, { Fragment } from 'react'
import logitech from '../assets/img/marcas/logitech_logo.png'
import razer from '../assets/img/marcas/razer_logo.png'
import canon from '../assets/img/marcas/canon_logo.svg'
import hyperx from '../assets/img/marcas/hyperx_logo.svg'

const CarouselMarcas = () => {
    return (
        <Fragment>
            <section className="marcas-afiliadas">
                <div className="container mt-4">
                    <h2 className="text-center titulo-principal">Puedes encontrar estas marcas</h2>
                    <div id="carousel-marcas" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row p-4 mt-2 text-center">
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={logitech} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={canon} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={hyperx} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={razer} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row p-4 mt-2 text-center">
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={logitech} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={canon} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={hyperx} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={razer} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row p-4 mt-2 text-center">
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={logitech} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={canon} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={hyperx} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 mb-4 ct-marcas">
                                        <img src={razer} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-marcas" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel-marcas" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default CarouselMarcas
