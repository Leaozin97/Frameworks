import './Concurso.css'
function Concurso(){

    return(
        <section className="container-card">
            <div className="cabecalho">
                <h1>Nossos Cursos Preparatórios</h1>
                <p>Encontre o curso perfeito para o seu objetivo e comece a estudar hoje mesmo.</p>
            </div>
            <div>
                <img 
                src="/escudo.png" 
                alt="icone escudo carreiras policiais" 
                className="curso_imagem"
                />
                <h2 className="curso_nome">Carreiras Policiais</h2>
                <p className="curso_descricao">Preparação completa para a PF, PRF, Policia Civil e Militar. Foco em Legislação Especial e Raciocício Lógico.</p>
                <button className="curso_botao">Ver detalhes</button>
            </div>
            <div>
                <img 
                src="/pasta.png" 
                alt="icone pasta administrativa" 
                className="curso_imagem"
                />
                <h2 className="curso_nome">Área Administrativa</h2>
                <p className="curso_descricao">Aulas de Português, Direito Administrativo e Constitucional para concursos federais e estaduais (INSS, Bancos, TRT).</p>
                <button className="curso_botao">Ver detalhes</button>
            </div>
            <div>
                <img 
                src="/barras.png" 
                alt="icone gráfico de barras" 
                className="curso_imagem"
                />
                <h2 className="curso_nome">Fiscal e Controle</h2>
                <p className="curso_descricao">Conteúdo avançado para Receita Federal (RFB), ICMS e ISS. Ênfase em Contabilidade Pública e Auditoria.</p>
                <button className="curso_botao">Ver detalhes</button>
            </div>
            <div>
                <img 
                src="/arquivotexto.png" 
                alt="icone arquivo de texto" 
                className="curso_imagem"
                />
                <h2 className="curso_nome">Tribunais e Jurídicos</h2>
                <p className="curso_descricao">Cursos específicos para TJ, TRF, MPU e OAB. Material focado em Teoria Geral do Direito e Processos.</p>
                <button className="curso_botao">Ver detalhes</button>
            </div>
            <div>
                <img 
                src="/bookopen.png" 
                alt="icone bookopen" 
                className="curso_imagem"
                />
                <h2 className="curso_nome">Educação e Magistério</h2>
                <p className="curso_descricao">Preparação para concursos de áreas educacionais. Legislação educacional e pedagógica.</p>
                <button className="curso_botao">Ver detalhes</button>
            </div>
            <div>
                <img 
                src="/chapeufor.png" 
                alt="icone chapeu de formatura" 
                className="curso_imagem"
                />
                <h2 className="curso_nome">Diversos Médio Geral</h2>
                <p className="curso_descricao">Cursos específicos com foco nas matérias básicas para a maioria dos concursos de nível médio. Raciocínio, Português e Informática.</p>
                <button className="curso_botao">Ver detalhes</button>
            </div>
        </section>
    );
}

export default Concurso;