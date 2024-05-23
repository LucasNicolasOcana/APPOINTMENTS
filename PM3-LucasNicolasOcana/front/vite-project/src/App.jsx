import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import CrearTurno from "./views/CrearTurno/CrearTurno";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<MisTurnos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crear-turno" element={<CrearTurno />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
