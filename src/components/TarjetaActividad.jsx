function TarjetaActividad({ actividad, onInscribir }) {
  return (
    <article className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <span className="badge bg-secondary mb-2">{actividad.categoria}</span>
          <h2 className="h5 card-title">{actividad.nombre}</h2>
          <p className="card-text text-muted">{actividad.descripcion}</p>
          <p className="fw-bold mb-1">
            {actividad.precio === 0 ? "Gratis" : `$${actividad.precio.toLocaleString()}`}
          </p>
          <p className="small mb-2">Cupos disponibles: {actividad.cupos}</p>

          {actividad.cupos > 0 && actividad.cupos <= 5 && (
            <p className="text-danger fw-bold small">¡Últimos cupos!</p>
          )}
        </div>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => onInscribir(actividad)}
          disabled={actividad.cupos === 0}
        >
          {actividad.cupos === 0 ? "Agotado" : "Inscribirme"}
        </button>
      </div>
    </article>
  );
}

export default TarjetaActividad;