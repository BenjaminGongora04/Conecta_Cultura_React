import { useState, useEffect } from "react";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import Bienvenida from "./components/Bienvenida";
import Cartelera from "./pages/Cartelera";
import MisInscripciones from "./components/MisInscripciones";
import PiePagina from "./components/PiePagina";
import { actividades } from "./data/actividades";

function App() {
  // Estado para el filtro por categoría
  const [categoria, setCategoria] = useState("Todas");

  // Estado con inicializador perezoso desde localStorage
  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  // Guardar en localStorage cada vez que cambia inscripciones
  useEffect(() => {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  }, [inscripciones]);

  // Filtrado de la lista
  const visibles = categoria === "Todas"
    ? actividades
    : actividades.filter((actividad) => actividad.categoria === categoria);

  // Funciones de inscripción sin duplicados y eliminación
  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);
    if (yaExiste) return;
    setInscripciones([...inscripciones, actividad]);
  }

  function eliminarInscripcion(id) {
    setInscripciones(inscripciones.filter((item) => item.id !== id));
  }

  return (
    <>
      <Cabecera />
      <Navegacion />
      <main className="container py-4">
        <Bienvenida />

        {/* Filtro por Categoría */}
        <div className="row mb-4">
          <div className="col-12 col-md-4">
            <label htmlFor="select-categoria" className="form-label fw-bold">
              Filtrar por categoría:
            </label>
            <select
              id="select-categoria"
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Todas">Todas</option>
              <option value="Música">Música</option>
              <option value="Artes visuales">Artes visuales</option>
            </select>
          </div>
        </div>

        {/* Cartelera dinámicamente filtrada */}
        <Cartelera
          actividades={visibles}
          onInscribir={inscribir}
        />

        {/* Lista de inscripciones almacenada en estado / localStorage */}
        <MisInscripciones
          inscripciones={inscripciones}
          onEliminar={eliminarInscripcion}
        />
      </main>
      <PiePagina />
    </>
  );
}

export default App;