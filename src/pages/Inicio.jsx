import Bienvenida from "../components/Bienvenida";

function Inicio() {
  return (
    <main className="container py-4">
      <Bienvenida />
      <div className="p-4 bg-light rounded-3 border">
        <h2>Bienvenido al Portal Cultural</h2>
        <p>Explora la cartelera, inscribe actividades o administra los eventos culturales locales.</p>
      </div>
    </main>
  );
}

export default Inicio;