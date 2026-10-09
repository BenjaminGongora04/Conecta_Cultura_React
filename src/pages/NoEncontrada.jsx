import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <main className="container py-4 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h2>Página no encontrada</h2>
      <p>La dirección solicitada no corresponde a una vista disponible.</p>
      <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
    </main>
  );
}

export default NoEncontrada;
