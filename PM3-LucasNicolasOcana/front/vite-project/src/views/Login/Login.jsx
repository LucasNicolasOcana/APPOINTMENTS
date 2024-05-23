import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import axios from "axios";
import styles from "./Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username.trim() === "" || formData.password.trim() === "") {
      setMessage("Por favor, completa todos los campos obligatorios.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );
      console.log(response.data);
      dispatch(loginUser(response.data));

      setFormData({
        username: "",
        password: "",
      });
      setMessage("¡Inicio de sesión exitoso!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setMessage("Error al iniciar sesión. Verifica tus credenciales.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <div className={styles.login_container}>
      <h2>LOGIN</h2>
      <p className={styles.intro_text}>
        ¡Bienvenido/a! Estamos emocionados de que desees iniciar sesión en
        nuestra comunidad. Por favor, introduce tus credenciales a continuación
        para acceder a tu cuenta.
      </p>
      {showMessage && (
        <p
          className={
            message.includes("exitoso")
              ? `${styles.message} ${styles.success_message}`
              : `${styles.message} ${styles.error_message}`
          }
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

