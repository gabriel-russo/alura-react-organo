import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={"campo-texto"}>
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} value={props.value}/>
        </div>
    )

}

export default CampoTexto;