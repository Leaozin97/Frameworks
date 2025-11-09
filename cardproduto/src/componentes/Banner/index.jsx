import styles from './Banner.module.css';

function Banner() {
    return (
        <div 
            className={styles.banner}
            style={{backgroundImage: "url('/games.png')"}}
        ></div>
    );
}

export default Banner;