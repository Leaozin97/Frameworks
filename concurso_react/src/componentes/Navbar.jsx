import { Link } from 'react-router-dom';
import { UseState } from 'react';
import './Navbar.css'


function Navbar(){
    return(
        <section>
            <nav className='barra'> 
                <button className='burguer'>☰</button>
                <div className='logo'>Pote de Ouro Concursos</div>
                <ul className='nav-link'>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="concurso">Concurso</Link></li>
                    <li><Link to="sobre">Sobre</Link></li>
                </ul>
            </nav>
        
        </section>
    );
}

export default Navbar;