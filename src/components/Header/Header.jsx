import styles from "./Header.module.css";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

function MyHeader() {

    return(
        <header className={styles.header}>
            <TopBar></TopBar>
            <NavBar></NavBar>
        </header>
    );
}

export default MyHeader