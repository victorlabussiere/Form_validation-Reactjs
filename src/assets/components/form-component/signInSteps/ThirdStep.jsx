import "./steps.css";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navabar";
import { useState } from "react";

export default function ThirdStep() {
  let [about, setAbout] = useState();
  const aboutText = document.getElementById("sobre");

  function checkInput() {
    let count = 0;
    aboutText.value === "" ? count++ : count;
    return count === 0 ? true : false;
  }

  function endForm() {
    if (!checkInput()) {
      return alert("Por favor, preencha o campo para prosseguir");
    }

    let text = { _sobre: aboutText.value };
    let data = JSON.stringify(text);
    localStorage.setItem("About", data);
    return (window.location.href = "/checkForm");
  }

  return (
    <section className="childContainer">
      <Navbar state="third"></Navbar>
      <form>
        <fieldset className="fieldSetText">
          <label htmlFor="about" className="textArea">
            Nos conte mais sobre você
            <textarea
              autoFocus
              name="about"
              className="textArea"
              id="sobre"
              style={{ textAlign: "top", verticalAlign: "top" }}
              onChange={(e) => setAbout((prev) => (prev = e.target.value))}
            ></textarea>
          </label>
        </fieldset>
        <span></span>
        <section className="actionArea">
          <Link to="/second" className="disabledButton">
            Cancelar
          </Link>
          <Link className="pButton" onClick={endForm}>
            Avançar
          </Link>
        </section>
      </form>
    </section>
  );
}
