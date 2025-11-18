import './Home.css'

function Home(){

    return(
        <section className='container_home'>
            <div className="cabecalho">
                <h1 className="titulo-principal">Pote de Ouro Concursos: Seu  caminho para a aprovação!</h1>
                <p className="paragrafo1">Os cursos preparatórios mais completos para você conquistar a sua vaga no serviço público.</p>
            </div>
            <div className="corpo_home">
                <h2 className="subtitulo">Nossa Missão:</h2>
                <p className="paragrafo2">Essa empresa nasceu com o objetivo claro de transformar o sonho da estabilidade e realização do profissional em realidade. Oferecer uma metodologia de ensino de ponta, material atualizado e corpo discente capacitado para garantir que nossos alunos estejam sempre um passo à frente da concorrência. Acreditamos no seu potencial e fornecemos as ferramentas para você alcançar o sucesso.</p>
                <h3 className="subtitulo1">Nossas áreas de especialidade:</h3>
                <ul className="h3-list">
                    <li>Área Policial (PF, PRF, PMMG, etc.)</li>
                    <li>Área Administração (INSS, IBGE, Bancos)</li>
                    <li>Área Fiscal e de Controle(Receita Federal, ICMS)</li>
                    <li>Educação (Magistério e Apoio Escolar)</li>
                    <li>Diversos Níveis (Médio, Técnico e Superior)</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;