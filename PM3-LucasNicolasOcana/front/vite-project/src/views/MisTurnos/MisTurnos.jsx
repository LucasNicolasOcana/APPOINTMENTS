import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Turno from "../../components/Turnos/Turno";
import { setUserAppointments } from "../../redux/actions";

const MisTurnos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userAppointments = useSelector((state) => state.userAppointments);

  useEffect(() => {
    const obtenerTurnos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/appointments", {
          params: { userId: user.id }
        });
        dispatch(setUserAppointments(response.data));
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      }
    };

    if (user) {
      obtenerTurnos();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, user]);

  const handleUpdateTurno = (updatedTurno) => {
    dispatch(setUserAppointments(userAppointments.map(turno => turno.id === updatedTurno.id ? updatedTurno : turno)));
  };

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {user && userAppointments.length > 0 ? (
            userAppointments.map((turno, index) => (
              <Turno key={index} turno={turno} onUpdateTurno={handleUpdateTurno} />
            ))
          ) : (
            <p>Debes logearte para ver tus turnos.</p>
          )}
        </>
      )}
    </div>
  );
};

export default MisTurnos;
