import { Link } from "react-router-dom";

export default function () {
  const UserData = JSON.parse(localStorage.getItem("User"));
  const UserAdress = JSON.parse(localStorage.getItem("Adress"));
  const UserAbout = JSON.parse(localStorage.getItem("About"));
  let name = UserData._name;
  let email = UserData._email;
  let rua = UserAdress._rua;
  let num = UserAdress._numero;
  let cep = UserAdress._cep;

  function newUser() {
    localStorage.clear();
    return (window.location.href = "/first");
  }

  return (
    <div className="childContainer">
      <form onLoad={() => localStorage.setItem("done", "true")}>
        <fieldset className="dataArea">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              className="sucess"
              readOnly
              value={name}
            />
          </label>

          <label htmlFor="email">
            E-mail
            <input
              type="text"
              name="email"
              className="sucess"
              readOnly
              value={email}
            />
          </label>
        </fieldset>
        <span></span>
        <fieldset className="checkAdreassArea">
          <label htmlFor="rua">
            Rua
            <input
              type="text"
              name="rua"
              className="sucess"
              readOnly
              value={rua}
            />
          </label>

          <label htmlFor="numRua">
            Número
            <input
              type="text"
              name="numRua"
              className="sucess"
              readOnly
              value={num}
            />
          </label>

          <label htmlFor="cep">
            Cep
            <input
              type="text"
              name="cep"
              className="sucess"
              readOnly
              value={cep}
            />
          </label>
        </fieldset>
      </form>
      <span></span>
      <div className="footerType">
        <div className="credits">
          <h2>Obrigado por utilizar o meu sistema.</h2>
          <p>
            Feito por{" "}
            <a
              className="link active"
              style={{ fontWeight: "bold" }}
              href="https://github.com/victorlabussiere"
            >
              Victor Labussiere.
            </a>
          </p>
        </div>
        <div className="actionArea succesAreButton">
          <Link className="pButton" onClick={newUser}>
            Novo Usuário
          </Link>
        </div>
      </div>
    </div>
  );
}
