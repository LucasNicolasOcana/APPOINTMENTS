import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import validate from "../../helpers/Validation";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        formData
      );
      console.log(response.data);
      setMessage("¡Usuario registrado exitosamente!");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      setFormData({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Error al registrar el usuario:", error.message);
      setMessage("Error al registrar el usuario. Por favor intenta de nuevo.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <div className={styles.form_container}>
      <h2>Register</h2>
      <p className={styles.intro_text}>
        ¡Bienvenido/a! Estamos emocionados de que quieras unirte a nuestra
        comunidad. Completa los campos a continuación para registrarte.
      </p>
      {showMessage && <p className={styles.message}>{message}</p>}{" "}
      {/* Mostrar el mensaje si showMessage es true */}
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.form_input}
          required
        />
        {errors.name && (
          <p className={styles.validation_message}>{errors.name}</p>
        )}
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.form_input}
          required
        />
        {errors.email && (
          <p className={styles.validation_message}>{errors.email}</p>
        )}
        {/* Birthdate */}
        <input
          type="text"
          name="birthdate"
          placeholder="Birthdate (DD/MM/YYYY)"
          value={formData.birthdate}
          onChange={handleChange}
          className={styles.form_input}
          required
        />
        {errors.birthdate && (
          <p className={styles.validation_message}>{errors.birthdate}</p>
        )}
        {/* DNI */}
        <input
          type="text"
          name="nDni"
          placeholder="DNI"
          value={formData.nDni}
          onChange={handleChange}
          className={styles.form_input}
          required
        />
        {errors.nDni && (
          <p className={styles.validation_message}>{errors.nDni}</p>
        )}
        {/* Username */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className={styles.form_input}
          required
        />
        {errors.username && (
          <p className={styles.validation_message}>{errors.username}</p>
        )}
        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.form_input}
          required
        />
        {errors.password && (
          <p className={styles.validation_message}>{errors.password}</p>
        )}
        <button type="submit" className={styles.form_button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
