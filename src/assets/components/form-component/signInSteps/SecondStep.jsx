import "./steps.css";
import { useEffect, useState } from "react";
import Services from "../../../../Services";
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from "../../navbar/Navabar";

export default function SecondStep() {
  let [iCep, setCep] = useState();

  async function buscarCep() {
    const data = await Axios.get(`https://viacep.com.br/ws/${iCep}/json/`)
      .then((res) => res.data)
      .catch((error) => {
        return console.log(error);
      });

    return data;
  }

  async function setValues() {
    const data = await buscarCep();

    bairroValue.value = data.bairro;
    cidadeValue.value = data.localidade;
    ruaValue.value = data.logradouro;
    let setNum = document.getElementById("numValue");

    return setNum.onfocus;
  }

  function checkInputs() {
    const inputs = document.getElementsByClassName("nec");
    Object.entries(inputs);

    let count = 0;
    for (let i of inputs) {
      i.value.length === 0 ? count++ : count;
    }
    return count === 0 ? true : false;
  }

  useEffect(() => checkInputs, []);

  async function proceedSecond() {
    if (!checkInputs()) {
      alert("Algum campo não foi preenchido corretamente");
      return;
    }

    let setAdress = {
      _cep: cepValue.value,
      _rua: ruaValue.value,
      _numero: numValue.value,
      _bairro: bairroValue.value,
      _cidade: cidadeValue.value,
      _reference: referenciaValue.value,
    };

    const data = JSON.stringify(setAdress);
    localStorage.setItem("Adress", data);

    return (window.location.href = "/third");
  }

  return (
    <section className="childContainer">
      <Navbar state="second" />
      <form className="formAdress">
        <div className="adressArea">
          <div className="column1">
            <fieldset className="cep_area">
              <label htmlFor="cep">
                CEP
                <input
                  type="number"
                  className="nec"
                  name="cep"
                  id="cepValue"
                  autoFocus
                  onChange={() => setCep((prev) => (prev = cepValue.value))}
                  onBlur={() => setValues()}
                />
              </label>
            </fieldset>
            <fieldset className="num_bairro">
              <label htmlFor="numero">
                Número
                <input
                  type="number"
                  className="nec"
                  id="numValue"
                  name="numero"
                />
              </label>
              <label htmlFor="bairro">
                Bairro
                <input
                  type="text"
                  className="nec"
                  id="bairroValue"
                  name="bairro"
                />
              </label>
            </fieldset>
          </div>

          <fieldset className="column2">
            <label htmlFor="rua">
              Rua
              <input type="text" className="nec" name="rua" id="ruaValue" />
            </label>

            <label htmlFor="cidade">
              Cidade
              <input
                type="text"
                className="nec"
                id="cidadeValue"
                name="cidade"
              />
            </label>
          </fieldset>
        </div>

        <fieldset className="referencieArea">
          <label htmlFor="referencia">
            Ponto de Referência
            <input
              type="text"
              id="referenciaValue"
              name="referencia"
              className="nec"
            />
          </label>
        </fieldset>
        <span></span>
        <div className="actionArea">
          <Link to="/first" className="disabledButton">
            Voltar
          </Link>
          <Link className="pButton" onClick={proceedSecond}>
            Avançar
          </Link>
        </div>
      </form>
    </section>
  );
}
