import "./steps.css";

export default function ThirdStep() {

  return (

    <>
      <label htmlFor="about" className="textareaLabel">
        Nos conte mais sobre você
        <textarea
          autoFocus
          name="about"
          className="textArea"
          id="sobre"
        ></textarea>
      </label>
    </>

  );
}
