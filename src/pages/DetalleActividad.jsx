import { Link, useParams } from "react-router-dom";
import { actividades } from "../data/actividades";
import { formatearPrecio } from "../utils/precio";

function DetalleActividad() {
  const { id } = useParams();
  const actividad = actividades.find(
    (item) => item.id === Number(id)
  );

  if (!actividad) {
    return (
      <main className="container py-4">
        <div className="alert alert-warning">
          <h2>Actividad no encontrada</h2>
          <p>La actividad solicitada no existe o fue eliminada.</p>
          <Link to="/actividades" className="btn btn-primary">Volver a actividades</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container py-4">
      <div className="card p-4 shadow-sm">
        <h1>{actividad.nombre}</h1>
        <p className="text-muted">Categoría: {actividad.categoria}</p>
        <p className="lead">{actividad.descripcion}</p>
        <p><strong>Precio:</strong> {formatearPrecio(actividad.precio)}</p>
        <p><strong>Cupos disponibles:</strong> {actividad.cupos}</p>
        <Link to="/actividades" className="btn btn-outline-primary mt-3 w-auto">
          Volver a la cartelera
        </Link>
      </div>
    </main>
  );
}

export default DetalleActividad;