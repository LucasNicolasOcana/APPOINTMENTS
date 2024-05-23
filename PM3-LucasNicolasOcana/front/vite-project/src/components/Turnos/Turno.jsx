import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import styles from "./Turno.module.css";

const Turno = ({ turno, onUpdateTurno }) => {
  const [isCanceling, setIsCanceling] = useState(false);

  const handleCancel = async () => {
    const today = new Date();
    const turnoDate = new Date(turno.date);
    const differenceInTime = turnoDate.getTime() - today.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    if (differenceInDays >= 1) {
      setIsCanceling(true);
      try {
        await axios.put(`http://localhost:3000/appointments/cancel/${turno.id}`, {
          status: "cancelled"
        });
        setIsCanceling(false);
        onUpdateTurno({ ...turno, status: "cancelled" });
      } catch (error) {
        console.error("Error al cancelar el turno:", error);
        setIsCanceling(false);
      }
    } else {
      console.log("No se puede cancelar el turno porque es menos de un día antes.");
    }
  };

  const fecha = new Date(turno.date);

  return (
    <div className={styles.turno}>
      <p>Fecha: {fecha.toLocaleDateString()}</p>
      <p>Hora: {turno.time}</p>
      {turno.userId && <p>Usuario ID: {turno.userId}</p>}
      <p>
        Estado:{" "}
        <span
          className={
            turno.status === "active" ? styles.activo : styles.cancelado
          }
        >
          {turno.status}
        </span>
      </p>
      {turno.status === "active" && (
        <button onClick={handleCancel} disabled={isCanceling}>
          {isCanceling ? "Cancelando..." : "Cancelar"}
        </button>
      )}
    </div>
  );
};

Turno.propTypes = {
  turno: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["active", "cancelled"]).isRequired,
    userId: PropTypes.number
  }).isRequired,
  onUpdateTurno: PropTypes.func.isRequired,
};

export default Turno;
