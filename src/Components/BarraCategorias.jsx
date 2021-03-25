import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BarraCategorias = () => {
    return (
        <Fragment>
            <ul className="nav justify-content-center bg-dark p-2">
                <li className="nav-item">
                    <Link className="nav-link active text-light" to="/">Cámaras</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" to="/">Laptops</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" to="/">Teclados</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" to="/">Ratones</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" to="/">Audifonos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active text-light" to="/">Ensamblaje</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default BarraCategorias
