import { useState } from "react";
import "./formTemplate.style.css";

import Navbar from "../Navbar/Navabar";
import { FirstStep, SecondStep, ThirdStep, CheckForm } from '../Steps/index.jsx'

import { FormContext } from "../../context";

import { controlDisplay, validateField } from './helpers'

export default function FormTemplate() {

  let [data, setData] = useState({})
  let [step, setStep] = useState(0)

  return (
    <section className="formContainer">
      <h2>Criação de usuário</h2>

      <FormContext.Provider value={{ step, setStep }}>
        <Navbar />

        <form method="get">
          <fieldset className={controlDisplay(step, 0)}>
            <FirstStep />
          </fieldset>

          <fieldset className={controlDisplay(step, 1)}>
            <SecondStep />
          </fieldset>

          <fieldset className={controlDisplay(step, 2)}>
            <ThirdStep />
          </fieldset>

          <fieldset className={controlDisplay(step, 3)}>
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
          : <div role='button' onClick={() => validateField(step, () => setStep(step += 1))}>Próximo passo</div>}

        {step >= 3 && <input type="submit" value='Enviar' className="pButton" onClick={(e) => {
          e.preventDefault()

          let form = document.querySelector('form')
          let formData = form ? new FormData(form) : ''

          for (let pair of formData) {
            setData(data[pair[0]] = pair[1])
          }

          console.log(data)

        }} />}
      </div>
    </section>
  );
}


