import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styles from './CrearTurno.module.css'

const CrearTurno = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        setError("Error: Usuario no autenticado. Por favor, inicia sesión.");
        setSuccessMessage(null);
        return;
      }
      const currentDate = new Date();
      const selectedDate = new Date(formData.date);
      const selectedTime = new Date(`01/01/2000 ${formData.time}`);
      if (selectedDate < currentDate) {
        setError("La fecha del turno no puede ser anterior al día de hoy.");
        setSuccessMessage(null);
        return;
      }
      if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        setError("Los turnos solo se pueden programar de lunes a sábados.");
        setSuccessMessage(null); 
        return;
      }
      const startTime = new Date(`01/01/2000 07:00`);
      const endTime = new Date(`01/01/2000 17:00`);
      if (selectedTime < startTime || selectedTime > endTime) {
        setError("Los turnos solo se pueden programar entre las 07:00 y las 17:00 horas.");
        setSuccessMessage(null);
        return;
      }

      await axios.post("http://localhost:3000/appointments/schedule", {
        ...formData,
        userId: user.id,
      });
      setFormData({ date: "", time: "" });
      setError(null);
      setSuccessMessage("Turno creado con éxito.");
    } catch (error) {
      console.error("Error al crear el turno:", error);
      setError("Error al crear el turno. Por favor, inténtelo de nuevo.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* Introducción para el cliente */}
      <h1 className={styles.formTitle}>Crear Turno</h1>

      <p>
        ¡Bienvenido! Estamos encantados de que hayas decidido programar un turno con nosotros.
        En este proceso, te guiaremos paso a paso para que puedas reservar tu cita de manera rápida y sencilla.
      </p>
      <p>
        <strong>¿Cómo funciona?</strong><br/>
        En primer lugar, necesitaremos que ingreses la fecha y la hora en la que te gustaría agendar tu turno.
        Asegúrate de seleccionar una fecha y hora que te convenga y esté dentro de nuestro horario de atención.
      </p>
      <p>
        <strong>Importante:</strong><br/>
        - Nuestro horario de atención es de lunes a sábados, de 7:00 a 17:00 horas.<br/>
        - Los turnos se programan con base en la disponibilidad de agenda, así que intenta reservar con la mayor anticipación posible para asegurar tu lugar.
      </p>
      <p>
        <strong>Proceso de reserva:</strong><br/>
        1. Selecciona la fecha: Utiliza el calendario para elegir el día en el que deseas tu cita. Solo podrás seleccionar fechas de lunes a sábados.<br/>
        2. Elige la hora: Indica la hora exacta en la que te gustaría tu cita. Recuerda que nuestro horario de atención es de 7:00 a 17:00 horas, así que asegúrate de seleccionar un horario dentro de este rango.<br/>
        3. Confirma tu reserva: Una vez que hayas seleccionado la fecha y la hora, simplemente haz clic en "Crear Turno" y tu reserva será procesada.
      </p>
      {error && <p className={styles.formError}>{error}</p>}
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.formLabel}>Fecha:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.formInput}
            min={(new Date()).toISOString().split('T')[0]}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="time" className={styles.formLabel}>Hora:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.formInput}
            min="07:00"
            max="17:00"
            required
          />
        </div>
        <button type="submit" className={styles.formButton}>Crear Turno</button>
      </form>
    </div>
  );
};

export default CrearTurno;
