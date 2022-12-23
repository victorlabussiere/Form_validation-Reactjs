import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Services from '../../../Services'
import { useEffect } from "react"

import './formTemplate.css'

import FirstStep from "./signInSteps/FirstStep"
import SecondStep from "./signInSteps/SecondStep"
import ThirdStep from "./signInSteps/ThirdStep"

export default function FormTemplate() {
    const url = 'http://localhost:3000'
    const services = new Services(url)

    async function createRequest() {
        const newRequest = {
            userData: {
                _name: null,
                _password: null,
                _email: null
            },
            userAdress: {
                _cep: null,
                _rua: null,
                _numero: null,
                _bairro: null,
                _cidade: null,
                _reference: null
            },
            about: {
                _text: null
            }
        }
        const data = services.store(newRequest);
        return await data;
    }

    async function startForm() {
        return await services.resetJsonServer()
            .then(async () => setTimeout(async () => {
                await createRequest()
            }, 100))
            .catch(err => console.error('Erro ao iniciar o cadastro', err))

    }

    return (
        <div className="formContainer">
            <h1>Criação de Usuário</h1>
            <section className="start">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <Link onClick={startForm} to="/first" className="pButton">Iniciar Cadastro</Link>
                            </>
                        } />
                        <Route path='/first' element={<FirstStep />} />
                        <Route path='/second' element={<SecondStep />} />
                        <Route path='/third' element={<ThirdStep />} />
                    </Routes>
                </BrowserRouter>
            </section>
        </div >
    )
}