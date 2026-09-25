function MisInscripciones({ inscripciones, onEliminar }) {
  if (inscripciones.length === 0) {
    return (
      <div className="alert alert-info mt-4">
        No tienes actividades inscritas actualmente.
      </div>
    );
  }

  return (
    <section className="mt-5">
      <h3 className="h4 mb-3">Mis Inscripciones</h3>
      <ul className="list-group">
        {inscripciones.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.nombre}</strong> — <span className="text-muted">{item.categoria}</span>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => onEliminar(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MisInscripciones;