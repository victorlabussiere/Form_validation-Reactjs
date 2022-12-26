import "./navbar.css";

export default function Navbar(state) {
  let firstLink;
  let secondLink;
  let thirdLink;

  if (state.state === "first")
    (firstLink = "active"), (secondLink = ""), (thirdLink = "");
  if (state.state === "second")
    (firstLink = "checked"), (secondLink = "active"), (thirdLink = "");
  if (state.state === "third")
    (firstLink = "checked"), (secondLink = "checked"), (thirdLink = "active");
  if (state.state === "allDone")
    (firstLink = "checked"), (secondLink = "checked"), (thirdLink = "checked");

  return (
    <nav>
      <ul>
        <li>
          <a className={`link ${firstLink}`}>
            <i className={`material-icons ${firstLink}`}>info</i>
            Identificação do Usuário
          </a>
        </li>
        <li>
          <a className={`link ${secondLink}`}>
            <i className={`material-icons ${secondLink}`}>home</i>
            Endereço do Usuário
          </a>
        </li>
        <li>
          <a className={`link ${thirdLink}`}>
            <i className={`material-icons ${thirdLink}`}>description</i>
            Sobre Você
          </a>
        </li>
      </ul>
    </nav>
  );
}
