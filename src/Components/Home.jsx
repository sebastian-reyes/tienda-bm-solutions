import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <h1 className="text-center mt-2">Home</h1>
            <section className="cards_info">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Card title</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Card title</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-3 shadow bg-body rounded">
                                <div className="card-body">
                                    <h5 className="titulo-principal">Card title</h5>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Home
