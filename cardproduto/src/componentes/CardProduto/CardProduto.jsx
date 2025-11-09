import './CardProduto.css'

function CardProduto(){
    return (
        <article className='produtos'>
            <h4>Confira nossos produtos:</h4>
                <section className='produtos_grid'>
                    <div className='cardproduto'>
                        <img 
                        src="/PS4_.png" 
                        alt="Imagem do PS4"
                        className='produto_imagem' 
                        />
                        <h2 className='produto_nome'>Console Playstation 4 PRO</h2>
                        <p className='produto_funcao'>Modelo mídia física 1TB</p>
                        <p className='produto_descricao'>À vista por R$3.299 ou 10x de R$274,90.</p>
                        <p className='produto_frete'>Frete grátis</p>
                        <button className='produto_botao'>Adicionar ao carrinho.</button>
                    </div>   
                    <div className='cardproduto'>
                        <img 
                        src="/PS5-PRO.webp"
                        alt="Imagem do PS5" 
                        className='produto_imagem'
                        />
                        <h2 className='produto_nome'>Console Playstation 5 PRO</h2>
                        <p className='produto_funcao'>Modelo mídia digital 1TB</p>
                        <p className='produto_descricao'>À vista por R$6.649 ou 12x de R$554,08.</p>
                        <p className='produto_frete'>Frete grátis</p>
                        <button className='produto_botao'>Adicionar ao carrinho.</button>
                    </div> 
                    <div className='cardproduto'>
                        <img
                        src='/XboxOneS.png'
                        alt='Imagem do Xbox Series S'
                        className='produto_imagem'
                        />
                        <h2 className='produto_nome'>Console Xbox Series S</h2>
                        <p className='produto_funcao'>Modelo mídia digital 1TB</p>
                        <p className='produto_descricao'>À vista por R$4.499 ou 12x de R$374,90.</p>
                        <p className='produto_frete'>Frete grátis</p>
                        <button className='produto_botao'>Adicionar ao carrinho.</button>
                    </div>
                    <div className='cardproduto'>
                        <img
                        src='/xbox-seriesX.webp'
                        alt='Imagem do Xbox Series X'
                        className='produto_imagem'
                        />
                        <h2 className='produto_nome'>Console Xbox Series X</h2>
                        <p className='produto_funcao'>Modelo mídia física 1TB</p>
                        <p className='produto_descricao'>À vista por R$4.499 ou 12x de R$374,90.</p>
                        <p className='produto_frete'>Frete grátis</p>
                        <button className='produto_botao'>Adicionar ao carrinho.</button>
                    </div>
                    <div className='cardproduto'>
                        <img 
                        src="/NintendoSwitch.png" 
                        alt="Imagem do Nintendo Switch" 
                        className='produto_imagem'
                        />
                        <h2 className='produto_nome'>Console Nintendo Switch</h2>
                        <p className='produto_funcao'>Modelo V2 128GB</p>
                        <p className='produto_descricao'>À vista por R$2.999 ou 12x de R$249,90.</p>
                        <p className='produto_frete'>Frete grátis</p>
                        <button className='produto_botao'>Adicionar ao carrinho.</button>
                    </div>
                    <div className='cardproduto'>
                        <img 
                        src="/nintendo-switch-2.jpg" 
                        alt="Imagem do Nintendo Switch 2" 
                        className='produto_imagem'
                        />
                        <h2 className='produto_nome'>Console Nintendo Switch 2</h2>
                        <p className='produto_funcao'>Modelo V2 256GB</p>
                        <p className='produto_descricao'>À vista por R$4.799 ou 12x de R$399,90.</p>
                        <p className='produto_frete'>Frete grátis</p>
                        <button className='produto_botao'>Adicionar ao carrinho.</button>
                    </div>
                </section>    
        </article>    
    );
}

export default CardProduto;