import './button.css'

export function Buttons(props) {
    return (
        <button className={props.style}>{props.buttonText}</button>
    )
}