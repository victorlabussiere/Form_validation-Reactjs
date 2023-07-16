import "./steps.css";
import React from "react";

export default function FirstStep() {

  return (
    <>
      <label htmlFor="NameInput">
        Nome
        <input
          type="text"
          name="nome"
          id="nameValue"
        />
      </label>

      <div className="passField">
        <label htmlFor="PassInput">
          Senha
          <input
            type="password"
            name="senha"
            id="passValue"
          />
        </label>

        <label htmlFor="ConfirmPass">
          Confirmar Senha
          <input
            type="password"
            name="confirma_senha"
            id="confirmPass"
          />
        </label>
      </div>

      <div className="emailField">
        <label htmlFor="EmailInput">
          E-mail
          <input
            type="text"
            name="email"
            id="emailValue"
          />
        </label>

        <label htmlFor="confirmNasc">
          Confirmar E-mail
          <input
            type="date"
            name="nasc"
            id="nasc"
          />
        </label>
      </div>

    </>
  );
}
