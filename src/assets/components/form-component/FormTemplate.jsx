import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./formTemplate.css";

import FirstStep from "./signInSteps/FirstStep";
import SecondStep from "./signInSteps/SecondStep";
import ThirdStep from "./signInSteps/ThirdStep";
import CheckForm from "./signInSteps/CheckForm";
import SucessPage from "./signInSteps/SucessPage";

export default function FormTemplate() {
  let done = "";
  done = localStorage.done;

  return (
    <div className="formContainer">
      {done === "" || !done ? (
        <h1>Cadastrar Usuário</h1>
      ) : (
        <h1>Usuário Cadastrado!</h1>
      )}
      <section className="start">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <a
                  href="/first"
                  className="pButton"
                  onClick={() => localStorage.setItem("done", "")}
                >
                  Iniciar Cadastro
                </a>
              }
            />
            <Route path="/first" element={<FirstStep />} />
            <Route path="/second" element={<SecondStep />} />
            <Route path="/third" element={<ThirdStep />} />
            <Route path="/checkForm" element={<CheckForm />} />
            <Route path="/done" element={<SucessPage />} />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}
