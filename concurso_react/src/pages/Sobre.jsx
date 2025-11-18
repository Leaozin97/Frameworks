import './Sobre.css'

function Sobre(){

    return(
        <section>
            <div className="cabecalho">
                <h1 className="titulo1">Sobre o Desenvolvedor</h1>
                <p>Conheça um pouco sobre a pessoa por trás da estrutura do site.</p>
            </div>
            <div className="corpo_sobre">
                <h2 className="subtitulo">Natália Pinheiro Leão</h2>
                <img 
                src="/Eu.jpg" 
                alt="NataliaDev" 
                className="sobre_imagem"
                />
                <p className="descricao1">Acadêmica do curso de Análise e Desenvolvimento de Sistemas</p>
                <p className="descricao2">Olá! Meu nome é Natália e sou a resposável pela arquitetura e desenvolvimento deste modelo de projeto para a Pote de Ouro Concursos.</p>
                <p>Minha paixão pela tecnologia e a busca por soluções eficientes me guiaram ao curso de Ánalise e Desenvolvimento de Sistemas. Este site foi construído com o objetivo de demonstrar habilidades com <strong>React</strong> e <strong>CSS</strong>, focando na criação de um site com cards que oferece uma experiência de navegação fluída e moderna, essencial para plataformas de ensino online.</p>
                <p>A funcionalidade de navegação interna e a organização do código garantem facilidade de manutenção e escabilidade.</p>
            </div>
        </section>
    );
}

export default Sobre;