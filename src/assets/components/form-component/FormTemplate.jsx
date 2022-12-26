import { BrowserRouter, Routes, Route, Link as a } from "react-router-dom";
import "./formTemplate.css";

import FirstStep from "./signInSteps/FirstStep";
import SecondStep from "./signInSteps/SecondStep";
import ThirdStep from "./signInSteps/ThirdStep";
import CheckForm from "./signInSteps/CheckForm";

export default function FormTemplate() {
  async function createRequest() {
    const newRequest = {
      userData: {
        _name: null,
        _password: null,
        _email: null,
      },
      userAdress: {
        _cep: null,
        _rua: null,
        _numero: null,
        _bairro: null,
        _cidade: null,
        _reference: null,
      },
      about: {
        _text: null,
      },
    };
    const data = services.store(newRequest);
    return await data;
  }
  return (
    <div className="formContainer">
      <h1>Criação de Usuário</h1>
      <section className="start">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <a href="/first" className="pButton">
                  Iniciar Cadastro
                </a>
              }
            />
            <Route path="/first" element={<FirstStep />} />
            <Route path="/second" element={<SecondStep />} />
            <Route path="/third" element={<ThirdStep />} />
            <Route path="/checkForm" element={<CheckForm />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}
