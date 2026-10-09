import { useState } from "react";
import Cartelera from "./Cartelera";
import { actividades as datosIniciales } from "../data/actividades";

function Actividades({ onInscribir }) {
  const [categoria, setCategoria] = useState("Todas");

  const visibles = categoria === "Todas"
    ? datosIniciales
    : datosIniciales.filter((act) => act.categoria === categoria);

  return (
    <main className="container py-4">
      <h1 className="mb-4">Cartelera de Actividades</h1>
      <div className="mb-4">
        <label htmlFor="filtro-categoria" className="form-label fw-bold">Filtrar por categoría:</label>
        <select
          id="filtro-categoria"
          className="form-select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Música">Música</option>
          <option value="Artes visuales">Artes visuales</option>
          <option value="Teatro">Teatro</option>
          <option value="Danza">Danza</option>
        </select>
      </div>
      <Cartelera actividades={visibles} onInscribir={onInscribir} />
    </main>
  );
}

export default Actividades;
