import './Rodape.css'

const Rodape = () => {
    return (
        <footer className={"footer"}>
            <div className={"social"}>
                <ul>
                    <li><img src="/imagens/fb.png" alt="Facebook"/></li>
                    <li><img src="/imagens/tw.png" alt="Twitter"/></li>
                    <li><img src="/imagens/ig.png" alt="Instagram"/></li>
                </ul>
            </div>
            <div className={"logo"}>
                <img src="/imagens/logo.png" alt="Organo"/>
            </div>
            <div className={"creditos"}>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape;