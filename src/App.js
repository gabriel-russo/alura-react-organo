import Banner from './componentes/Banner/Banner'
import Formulario from "./componentes/Formulario/Formulario";
import {useState} from "react";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";

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

    const [colaboradores, setColaboradores] = useState([])

    const inserirInfo = (info) => {
        console.log(colaboradores)
        setColaboradores([...colaboradores, info])
        console.log(colaboradores)
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario aoEnviado={info => inserirInfo(info)}
                        ListaItens={times.map(times => times.nome)}/>
            {times.map(time => <Time key={time.nome}
                                     nome={time.nome}
                                     corPrimaria={time.corPrimaria}
                                     corSecundaria={time.corSecundaria}
                                     colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
            <Rodape/>
        </div>
    );
}

export default App;
