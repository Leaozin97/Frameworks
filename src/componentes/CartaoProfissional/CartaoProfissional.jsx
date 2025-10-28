import './CartaoProfissional.css'

function CartaoProfissional(){
    return (
        <div className='cartao_profissional'>
            <img 
             src="/imagemreact.png"
             alt="Usuario do perfil" 
             className='perfil_imagem'
            />
            <h2 className='perfil_nome'>Natália Leão</h2>
            <p className='perfil_funcao'>Aluna de ADS da Uninorte.</p>
            <p className='perfil_descricao'>Morena gamer.</p>
            <button className='perfil_botao'>Se precisar, desprecise.</button>
        </div>
    );
}

export default CartaoProfissional;