import styles from  './Header.module.css'
import logo from '../assets/logo-with-name.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo to-do"/>
        </header>
    );
}