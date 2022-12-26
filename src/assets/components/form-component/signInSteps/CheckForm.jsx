import "./steps.css";
import Navbar from "../../navbar/Navabar";
import { Link } from "react-router-dom";

export default function CheckForm() {
  const UserData = JSON.parse(localStorage.getItem("User"));
  const UserAdress = JSON.parse(localStorage.getItem("Adress"));
  const UserAbout = JSON.parse(localStorage.getItem("About"));
  let name = UserData._name;
  let email = UserData._email;
  let rua = UserAdress._rua;
  let num = UserAdress._numero;
  let cep = UserAdress._cep;

  function cancel() {
    localStorage.clear();
    return (window.location.href = "/");
  }

  function cadastrar() {
    const data = {
      ...UserData,
      ...UserAdress,
      ...UserAbout,
    };

    console.log(data);
  }

  return (
    <div className="childContainer">
      <Navbar state="allDone" />
      <h2 style={{ fontWeight: "600" }}>
        Confirme suas informações para prosseguir!
      </h2>
      <div className="resumeContainer">
        <form>
          <fieldset className="dataArea">
            <label htmlFor="name">
              Nome
              <input type="text" name="name" readOnly value={name} />
            </label>

            <label htmlFor="email">
              E-mail
              <input type="text" name="email" readOnly value={email} />
            </label>
          </fieldset>
          <span></span>
          <fieldset className="checkAdreassArea">
            <label htmlFor="rua">
              Rua
              <input type="text" name="rua" readOnly value={rua} />
            </label>

            <label htmlFor="numRua">
              Número
              <input type="text" name="numRua" readOnly value={num} />
            </label>

            <label htmlFor="cep">
              Cep
              <input type="text" name="cep" readOnly value={cep} />
            </label>
          </fieldset>
          <span></span>
          <div className="actionArea">
            <Link onClick={cancel} className="disabledButton">
              Refazer do Início
            </Link>
            <Link onClick={cadastrar} className="pButton">
              Cadastrar Usuário
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
