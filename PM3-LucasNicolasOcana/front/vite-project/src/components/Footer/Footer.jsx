import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 HENRY. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
