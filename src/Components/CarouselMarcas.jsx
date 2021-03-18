import React, { Fragment } from 'react'
import logitech from '../assets/img/marcas/logitech_logo.png'
import razer from '../assets/img/marcas/razer_logo.png'
import canon from '../assets/img/marcas/canon_logo.svg'
import hyperx from '../assets/img/marcas/hyperx_logo.svg'
import nikon from '../assets/img/marcas/nikon_logo.png'
import corsair from '../assets/img/marcas/corsair_logo.svg'
import sony from '../assets/img/marcas/sony_logo.png'
import kodak from '../assets/img/marcas/kodak_logo.png'

const CarouselMarcas = () => {

    return (
        <Fragment>
            <section className="marcas-afiliadas py-4">
                <div className="container mt-4">
                    <h2 className="text-center titulo-principal">Puedes encontrar estas marcas</h2>
                    <div id="carousel-marcas" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row p-4 mt-2 text-center">
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={sony} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={logitech} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={canon} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={razer} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row p-4 mt-2 text-center">
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={nikon} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={hyperx} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={kodak} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                    <div className="col-sm-3 ct-marcas">
                                        <img src={corsair} alt="logo" className="img-marcas img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default CarouselMarcas
