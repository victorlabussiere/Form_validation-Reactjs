import "./navbar.css";
import { useContext } from "react";
import { FormContext } from "../../context";

// import helpers functions
import { iconClasses, liClasses } from './helpers/navbar'

export default function Navbar() {

  const { step, setStep } = useContext(FormContext)

  return (
    <nav>
      <ul>
        <li
          className={step >= 3 ? 'link checked' : liClasses(step, 0)}
          onClick={() => setStep(0)} >
          <i className={step >= 3 ? 'material-icons checked' : iconClasses(step, 0)}>info</i>
          Identificação do Usuário
        </li>
        <li
          className={step >= 3 ? 'link checked' : liClasses(step, 1)}
          onClick={() => setStep(1)}>
          <i className={step >= 3 ? 'material-icons checked' : iconClasses(step, 1)}>home</i>
          Endereço do Usuário
        </li>
        <li
          className={step >= 3 ? 'link checked' : liClasses(step, 2)}
          onClick={() => setStep(2)}>
          <i className={step >= 3 ? 'material-icons checked' : iconClasses(step, 2)}>description</i>
          Sobre Você
        </li>
      </ul>
    </nav>
  );
}