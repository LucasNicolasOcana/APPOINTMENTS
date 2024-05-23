import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../assets/logonav/logonav.jpg";

const NavBar = () => {
  const user = useSelector((state) => state.user);

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo} />{" "}
      <ul>
        <li>
          <Link to="/" className={styles.navLink}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.navLink}>
            {user ? "LOGIN" : "LOGIN"} {/* Mostrar LOGIN si no hay usuario */}
          </Link>
        </li>
        {/* Utilizar una expresión condicional ternaria correctamente */}
        {(!user && (
          <li>
            <Link to="/register" className={styles.navLink}>
              REGISTER
            </Link>
          </li>
        ))}
        {user && (
          <>
            <li>
              <Link to="/appointments" className={styles.navLink}>
                MIS TURNOS
              </Link>
            </li>
            <li>
              <Link to="/crear-turno" className={styles.navLink}>
                CREAR TURNO
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
