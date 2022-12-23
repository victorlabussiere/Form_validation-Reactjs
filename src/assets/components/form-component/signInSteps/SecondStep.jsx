import './steps.css'
import { useEffect, useState } from 'react'
import Services from '../../../../Services'
import { Link } from 'react-router-dom'
import Axios from 'axios'

export default function SecondStep() {

    let [iCep, setCep] = useState()

    async function buscarCep() {
        const data = await Axios.get(`https://viacep.com.br/ws/${iCep}/json/`)
            .then(res => res.data)
            .catch(error => {
                return console.log(error);
            })

        return data
    }

    async function setValues() {
        const data = await buscarCep()

        bairroValue.value = data.bairro
        cidadeValue.value = data.localidade
        ruaValue.value = data.logradouro
        let setNum = document.getElementById('numValue');

        return setNum.onfocus
    }

    function checkInputs() {
        let count = 0
        const inputs = document.getElementsByClassName('nec')
        Object.entries(inputs).map(ar => ar.reduce((key, item) => {
            return item.value.length === 0 ? count++ : count
        }))

        return count === 0 ? false : true
    }

    async function proceedSecond(e) {
        let setAdress = {
            _cep: cepValue.value,
            _rua: ruaValue.value,
            _numero: numValue.value,
            _bairro: bairroValue.value,
            _cidade: cidadeValue.value,
            _reference: referenciaValue.value
        }
        const error = checkInputs()
        if (error) return (alert('Algum campo ficou faltando'), window.location.reload())

        const url = 'http://localhost:3000'
        const services = new Services(url)
        const data = await services.indexAll().then(res => res[0])
        data.userAdress = { ...setAdress }

        return services.update(data, data.id)
    }

    return (

        <section className="childContainer">

            <nav>
                <ul>
                    <li>
                        <p
                            className='link checkLink'
                            to="/first">
                            <i className="material-icons check ">info</i>
                            Identificação do Usuário
                        </p>
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

            <form className='formAdress'>
                <div className='twoColumns'>

                    <div className='column1'>
                        <fieldset>
                            <label htmlFor="cep">CEP
                                <input type="number" className='nec' name="cep" id="cepValue" autoFocus onChange={() => setCep(prev => prev = cepValue.value)} onBlur={() => setValues()} />
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="numero">Número
                                <input type="number" className='nec' id='numValue' name='numero' />
                            </label>
                            <label htmlFor="bairro">Bairro
                                <input type="text" className='nec' id='bairroValue' name='bairro' />
                            </label>
                        </fieldset>
                    </div>
                    <div className='column2'>
                        <fieldset>
                            <label htmlFor="rua">Rua
                                <input type="text" className='nec' name="rua" id="ruaValue" />
                            </label>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="cidade">Cidade
                                <input type="text" className='nec' id='cidadeValue' name='cidade' />
                            </label>
                        </fieldset>
                    </div>
                </div>
                <div className='column3'>
                    <label htmlFor="referencia"> Ponto de Referência
                        <input type="text" id='referenciaValue' name='referencia' />
                    </label>
                </div>
                <div className="actionArea">
                    <Link to='/first' className='disabledButton'>Voltar</Link>
                    <Link to='/third' className='pButton' onClick={(e) => proceedSecond(e)}>Avançar</Link>
                </div>
            </form>

        </section>
    )
};