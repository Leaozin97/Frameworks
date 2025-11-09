import styles from './Header.module.css';

function Header() {
    return (    
        <header className={styles.header}>
            <span>Gamer Store</span>
            <nav>
                <a href="#">Home </a>
                <a href="#">Carrinho </a>
            </nav>
        </header>
    );
}

export default Header;