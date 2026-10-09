import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Inicio from "./pages/Inicio";
import Actividades from "./pages/Actividades";
import DetalleActividad from "./pages/DetalleActividad";
import AdminActividades from "./pages/admin/AdminActividades";
import NoEncontrada from "./pages/NoEncontrada";
import { guardarInscripciones } from "./utils/persistencia";

function App() {
  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  useEffect(() => {
    guardarInscripciones(inscripciones);
  }, [inscripciones]);

  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);
    if (yaExiste) {
      alert("Ya estás inscrito en esta actividad.");
      return;
    }
    setInscripciones([...inscripciones, actividad]);
    alert(`Inscripción exitosa en: ${actividad.nombre}`);
  }

  return (
    <>
      <Cabecera />
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/actividades" element={<Actividades onInscribir={inscribir} />} />
        <Route path="/actividades/:id" element={<DetalleActividad />} />
        <Route path="/admin/actividades" element={<AdminActividades />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </>
  );
}

export default App;
