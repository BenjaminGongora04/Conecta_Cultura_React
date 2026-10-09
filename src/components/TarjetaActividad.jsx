import { Link } from "react-router-dom";
import { formatearPrecio } from "../utils/precio";

function TarjetaActividad({ actividad, onInscribir }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h2 className="h5 card-title">{actividad.nombre}</h2>
        <p className="badge bg-info text-dark w-auto align-self-start">{actividad.categoria}</p>
        <p className="card-text">{actividad.descripcion}</p>
        <p className="fw-bold">Precio: {formatearPrecio(actividad.precio)}</p>
        <p>Cupos disponibles: {actividad.cupos}</p>
        {actividad.cupos > 0 && actividad.cupos <= 5 && (
          <p className="text-danger fw-bold">¡Últimos cupos!</p>
        )}
        <div className="mt-auto d-flex gap-2">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onInscribir(actividad)}
            disabled={actividad.cupos === 0}
          >
            Inscribirme
          </button>
          <Link to={`/actividades/${actividad.id}`} className="btn btn-outline-secondary btn-sm">
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
}

export default TarjetaActividad;