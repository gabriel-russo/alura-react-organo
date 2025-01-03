import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import {FormEvent, useState} from "react";
import type Colaborador from "../../tipos/Colaborador";

interface FormularioProps {
  aoEnviado: (colaborador: Colaborador) => void
  ListaItens: string[]
}

const Formulario = (props: FormularioProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    props.aoEnviado({nome, cargo, imagem, time})
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className={"formulario"}>
      <form onSubmit={aoSalvar}>
        <h2>Preenche os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true}
                    label={"Nome"}
                    placeholder={"Digite seu nome"}
                    value={nome}
                    aoAlterado={valorDigitado => setNome(valorDigitado)}/>
        <CampoTexto obrigatorio={true}
                    label={"Cargo"}
                    placeholder={"Digite seu cargo"}
                    value={cargo}
                    aoAlterado={valorDigitado => setCargo(valorDigitado)}/>
        <CampoTexto label={"Imagem"}
                    placeholder={"Digite o endereço da imagem"}
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
        <ListaSuspensa obrigatorio={true}
                       label={"Time"}
                       valor={time}
                       itens={props.ListaItens}
                       default={"Escolha o time"}
                       aoAlterado={valorEscolhido => setTime(valorEscolhido)}/>
        <Botao>Criar card</Botao>
      </form>
    </section>
  )
}

export default Formulario;
