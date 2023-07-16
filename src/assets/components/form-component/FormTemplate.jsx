import { useState } from "react";
import "./formTemplate.style.css";

import Navbar from "../navbar/Navabar";
import { FirstStep, SecondStep, ThirdStep, CheckForm } from './steps/index.jsx'

import { validateField } from './helpers/validateFields'
import { FormContext } from "../../../context";

export default function FormTemplate() {

  let [data, setData] = useState({})

  let [step, setStep] = useState(0)

  let classControl = [
    ['', 'hidden', 'hidden', 'hidden'],
    ['hidden', '', 'hidden', 'hidden'],
    ['hidden', 'hidden', '', 'hidden'],
    ['hidden', 'hidden', 'hidden', ''],
    ['hidden', 'hidden', 'hidden', 'hidden'],
  ]

  return (
    <section className="formContainer">
      <h2>Criação de usuário</h2>

      <FormContext.Provider value={{ step, setStep, data, setData }}>
        <Navbar />
        <form method="get">
          <fieldset className={classControl[step][0]}>
            <FirstStep />
          </fieldset>

          <fieldset className={classControl[step][1]}>
            <SecondStep />
          </fieldset>

          <fieldset className={classControl[step][2]}>
            <ThirdStep />
          </fieldset>

          <fieldset className={classControl[step][3]}>
            <CheckForm />
          </fieldset>
        </form>
      </FormContext.Provider>

      <div className="formContainer_buttonsArea">


        {step === 0
          ? ''
          : <div role='button' onClick={() => setStep(step = step - 1)} >Voltar</div>}
        {step === 3
          ? ''
          : <div role='button' onClick={() => validateField(() => setStep(step = step + 1))}>Próximo passo</div>}

        {step >= 3 && <input type="submit" value='Enviar' className="pButton" onClick={(e) => {
          e.preventDefault()

          let form = document.querySelector('form')
          let formData = form ? new FormData(form) : ''

          let jsonFormData = {}
          for (let pair of formData) {
            jsonFormData[pair[0]] = pair[1]
          }

          console.log('console', jsonFormData)

        }} />}
      </div>
    </section>
  );
}


