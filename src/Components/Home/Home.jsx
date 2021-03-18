import React, { Fragment, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar'
import Footer from '../Footer';
import CarouselMarcas from './CarouselMarcas'
import Hero from './Hero'

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, []);

    return (
        <Fragment>
            <Navbar />
            <Hero />
            <section className="cards_info py-4">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div data-aos="zoom-in" className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Envíos a todo el Perú</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div data-aos="zoom-in" className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Métodos de pago seguros</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div data-aos="zoom-in" className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Atención al cliente 24h</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CarouselMarcas />
            <Footer />
        </Fragment>
    )
}

export default Home
