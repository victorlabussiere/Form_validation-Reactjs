import "./steps.css";
export default function SecondStep() {

  return (
    <>
      <div className="adressArea">

        <section className="column1">
          <label htmlFor="cep">
            CEP
            <input
              type="number"
              className="nec"
              name="cep"
              id="cepValue"
              autoFocus
            />
          </label>

          <article>
            <label className="num_bairro" htmlFor="numero">
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
          </article>
        </section>

        <section className="column2">
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
        </section>



        <label htmlFor="referencia">
          Ponto de Referência
          <input
            type="text"
            id="referenciaValue"
            name="referencia"
            className="nec"
          />
        </label>
      </div>
    </>

  );
}
