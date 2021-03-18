import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Footer from './Footer';
import CarouselMarcas from './CarouselMarcas'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <section className="cards_info py-4">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Envíos a todo el Perú</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Métodos de pago seguros</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3 shadow bg-body rounded">
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
