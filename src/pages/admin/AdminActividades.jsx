import FormularioActividad from "./FormularioActividad";

function AdminActividades() {
  function guardar(actividad) {
    console.log("Actividad guardada exitosamente:", actividad);
    alert(`Actividad "${actividad.nombre}" agregada correctamente.`);
  }

  return (
    <main className="container py-4">
      <h1>Administración de Actividades</h1>
      <p className="text-muted">Agrega nuevas actividades culturales al sistema.</p>
      <FormularioActividad onGuardar={guardar} />
    </main>
  );
}

export default AdminActividades;