import './Colaborador.css'
import type {default as TColaborador} from "../../tipos/Colaborador";

interface ColaboradorProps {
  colaborador: TColaborador
  corDeFundo: string
}

const Colaborador = ({colaborador, corDeFundo}: ColaboradorProps) => {
  return (
    <div className={"colaborador"}>
      <div className={"cabecalho"} style={{backgroundColor: corDeFundo}}>
        <img src={colaborador.imagem} alt="Foto do colaborador"/>
      </div>
      <div className={"rodape"}>
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador;
