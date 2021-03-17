import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Footer from './Footer'

const Carrito = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <h1 className="text-center mt-2">Carrito de compras</h1>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Carrito
