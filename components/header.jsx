import Head from "next/head";
import styles from "../styles/Home.module.css";

const Header = () => (
  <header className={styles.header}>
    <Head>
      <title>Critica Otaku</title>
      <meta name="description" content="Página de crítica de Anime" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav className="flex items-center flex-wrap p-3">       
        <h1>CriticaOtaku</h1>
        <p>Tu página de critica sobre Anime</p>
    </nav>
    

  </header>
);

export default Header;
