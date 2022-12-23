import './steps.css'
import { useState } from 'react'
import Services from '../../../../Services'
import { Link } from 'react-router-dom'


export default function FirstStep() {

    let [iName, setName] = useState()
    let [iPass, setPassword] = useState()
    let [iEmail, setEmail] = useState()
    let [iConfirmPass, setConfirmPass] = useState()
    let [iConfirmEmail, setConfirmEmail] = useState()



    function checkInput() {
        let count = 0
        const inputs = document.getElementsByTagName('input')
        Object.entries(inputs).map(ar => ar.reduce((key, item) => {
            return item.value.length === 0 ? count++ : count
        }))

        return count === 0 ? false : true
    }

    let newUserData = {
        _name: iName,
        _password: iPass,
        _email: iEmail
    }
    async function proceed() {
        const erro = checkInput()
        if (erro) return (alert('Algum campo não foi preenchido.\n\nPor favor, confira as informações e tente novamente!'), window.location.reload())
        if (iPass !== iConfirmPass || iEmail !== iConfirmEmail) return (alert('Houve um erro de confirmação das informações\n\nOs campos serão reiniciados para que você possa tentar novamente.'), window.location.reload())

        const url = 'http://localhost:3000'
        const services = new Services(url)
        let data = await services.indexAll().then(res => res[0])
        data.userData = { ...newUserData }

        return await services.update(data, data.id)
    }

    async function cancel() {
        const reset = await services.resetJsonServer()
        return await reset;
    }

    return (
        <section className='childContainer'>
            <nav>
                <ul>
                    <li>
                        <Link
                            className='activeLink link'
                            to="/first">
                            <i className="material-icons active">info</i>
                            Identificação do Usuário
                        </Link>
                    </li>
                    <li>
                        <Link to="/second" className='link'>
                            <i className="material-icons">home</i>
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

            <form>

                <fieldset className="nameField">
                    <label htmlFor="NameInput">Nome
                        <input type="text" name="NameInput" id='nameValue' onChange={() => setName(prev => prev = nameValue.value)} />
                    </label>
                </fieldset>

                <fieldset className="passField">
                    <label htmlFor="PassInput">Senha
                        <input type="password" name="PassInput" id='passValue' onChange={() => setPassword(prev => prev = passValue.value)} />
                    </label>

                    <label htmlFor="ConfirmPass">Confirmar Senha
                        <input type="password" name="ConfirmPass" id='confirmPass' onChange={() => setConfirmPass(prev => prev = confirmPass.value)} />
                    </label>
                </fieldset>

                <fieldset className="emailField">
                    <label htmlFor="EmailInput">E-mail
                        <input type="text" name="EmailInput" id='emailValue' onChange={() => setEmail(prev => prev = emailValue.value)} />
                    </label>

                    <label htmlFor="ConfirmEmail">Confirmar E-mail
                        <input type="email" name="ConfirmEmail" id='confirmEmail' onChange={() => setConfirmEmail(prev => prev = confirmEmail.value)} />
                    </label>
                </fieldset>

                <section className='actionArea'>
                    <Link to='/' className='disabledButton' onClick={cancel} >Cancelar</Link>
                    <Link to='/second' className='pButton' onClick={() => proceed}>Próximo</Link>
                </section>
            </form >
        </section >
    )
}
