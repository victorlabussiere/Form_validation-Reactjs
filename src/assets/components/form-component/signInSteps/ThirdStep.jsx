import './steps.css'
import { useEffect, useState } from 'react'
import Services from '../../../../Services'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function ThirdStep() {
    return (
        <section className='childContainer'>

            <nav>
                <ul>
                    <li>
                        <Link
                            className='link checkLink'
                            to="/first">
                            <i className="material-icons check ">info</i>
                            Identificação do Usuário
                        </Link>
                    </li>
                    <li>
                        <Link to="/second" className='activeLink link'>
                            <i className="material-icons active">home</i>
                            Endereço do Usuário
                        </Link>
                    </li>
                    <li>
                        <Link to="/third" className='link'>
                            <i className="material-icons">description</i>
                            Sobre Você
                        </Link>
                    </li>
                </ul>
            </nav>
            <h2>third funcionando</h2>
        </section>
    )
}