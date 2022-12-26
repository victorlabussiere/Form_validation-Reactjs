import "./steps.css";
import React from "react";
import { useState } from "react";
import Navbar from "../../navbar/Navabar";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function FirstStep() {
  let [_name, setName] = useState();
  let [_pass, setPassword] = useState();
  let [_email, setEmail] = useState();
  let [_confirmPass, setConfirmPass] = useState();
  let [_nasc, setNasc] = useState();

  function checkInput() {
    let count = 0;
    const inputs = document.getElementsByTagName("input");
    for (let i of inputs) {
      i.value.length === 0 ? count++ : count;
    }
    return count === 0 ? true : false;
  }

  useEffect(() => checkInput, []);

  async function updateData() {
    if (!checkInput())
      return alert("Algum campo não foi preenchido corretamente");

    if (_pass !== _confirmPass) {
      return alert(
        "Houve um erro ao reconhecer sua senha\nPor favor, confira se a senha foi inserida corretamente"
      );
    }

    let userData = {
      _name,
      _pass,
      _email,
      _nasc,
    };

    console.log(userData);
    const data = JSON.stringify(userData);
    localStorage.setItem("User", data);
    return (window.location.href = "/second");
  }

  return (
    <section className="childContainer">
      <Navbar state="first"> </Navbar>
      <form>
        <fieldset className="nameField">
          <label htmlFor="NameInput">
            Nome
            <input
              type="text"
              name="NameInput"
              id="nameValue"
              onChange={() => setName((prev) => (prev = nameValue.value))}
            />
          </label>
        </fieldset>

        <fieldset className="passField">
          <label htmlFor="PassInput">
            Senha
            <input
              type="password"
              name="PassInput"
              id="passValue"
              onChange={() => setPassword((prev) => (prev = passValue.value))}
            />
          </label>

          <label htmlFor="ConfirmPass">
            Confirmar Senha
            <input
              type="password"
              name="ConfirmPass"
              id="confirmPass"
              onChange={() =>
                setConfirmPass((prev) => (prev = confirmPass.value))
              }
            />
          </label>
        </fieldset>

        <fieldset className="emailField">
          <label htmlFor="EmailInput">
            E-mail
            <input
              type="text"
              name="EmailInput"
              id="emailValue"
              onChange={() => setEmail((prev) => (prev = emailValue.value))}
            />
          </label>

          <label htmlFor="confirmNasc">
            Confirmar E-mail
            <input
              type="date"
              name="nasc"
              id="nasc"
              onChange={() => setNasc((prev) => (prev = nasc.value))}
            />
          </label>
        </fieldset>
        <span></span>
        <section className="actionArea">
          <Link to="/" className="disabledButton">
            Cancelar
          </Link>
          <Link className="pButton" onClick={updateData}>
            Avançar
          </Link>
        </section>
      </form>
    </section>
  );
}
