import './Time.css'
import type {default as TColaborador} from "../../tipos/Colaborador";
import Colaborador from "../Colaborador";


interface TimeProps {
  corPrimaria: string
  corSecundaria: string
  nome: string
  colaboradores: TColaborador[]
}

const Time = (props: TimeProps) => {

  if (!props.colaboradores.length) {
    return null;
  }

  return (
    <section className={"time"} style={{backgroundColor: props.corSecundaria}}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className={'colaboradores'}>
        {props.colaboradores.map((colaborador: TColaborador) => (
          <Colaborador
            key={colaborador.nome}
            colaborador={colaborador}
            corDeFundo={props.corPrimaria}
          />
        ))}
      </div>
    </section>
  )
}

export default Time
