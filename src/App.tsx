import Banner from './componentes/Banner'
import Formulario from "./componentes/Formulario";
import {useState} from "react";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import type Colaborador from "./tipos/Colaborador";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState<Colaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: Colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem={"/imagens/banner.png"} textoAlternativo={"O Banner principal da página do Organo"}/>
      <Formulario aoEnviado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
                  ListaItens={times.map(times => times.nome)}/>
      {times.map(time => (
        <Time key={time.nome}
              nome={time.nome}
              corPrimaria={time.corPrimaria}
              corSecundaria={time.corSecundaria}
              colaboradores={colaboradores.filter((colaborador: Colaborador) => colaborador.time === time.nome)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
