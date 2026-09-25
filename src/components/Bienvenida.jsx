function Bienvenida() {
  const nombreProyecto = "Conecta Cultura";
  return (
    <section className="mb-4">
      <h1 className="display-5 fw-bold">{nombreProyecto}</h1>
      <p className="lead">Encuentra actividades culturales en tu comunidad.</p>
    </section>
  );
}

export default Bienvenida;