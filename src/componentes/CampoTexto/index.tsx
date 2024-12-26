import {ChangeEvent} from "react";
import './CampoTexto.css'

interface CampoTextoProps {
  aoAlterado: (valor: string) => void,
  placeholder: string
  label: string
  obrigatorio?: boolean
  value: string
}

const CampoTexto = ({aoAlterado, placeholder, value, label, obrigatorio = false}: CampoTextoProps) => {

  const aoDigitado = (evento: ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className={"campo-texto"}>
      <label>{label}</label>
      <input
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
        value={value}/>
    </div>
  )

}

export default CampoTexto;
