import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCamera, AiOutlineLaptop, AiOutlineAudio, AiOutlineSetting, AiOutlineSound } from 'react-icons/ai'
import { FaRegKeyboard } from 'react-icons/fa'
import { BiMouse } from 'react-icons/bi'

const BarraCategorias = () => {
    return (
        <Fragment>
            <ul className="nav justify-content-center bg-dark p-2">
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><AiOutlineCamera /> Cámaras</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><AiOutlineLaptop /> Laptops</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><FaRegKeyboard /> Teclados</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><BiMouse /> Ratones</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><AiOutlineAudio /> Microfonos</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><AiOutlineSound /> Audio</Link>
                </li>
                <li className="nav-item">
                    <Link className="link-categoria nav-link active text-light" to="/"><AiOutlineSetting /> Ensamblaje</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default BarraCategorias
