import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const inicial = { nombre: "", categoria: "", descripcion: "", precio: "", cupos: "" };

function FormularioActividad({ onGuardar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};
    if (!datos.nombre.trim()) nuevosErrores.nombre = "Nombre obligatorio";
    if (!datos.categoria) nuevosErrores.categoria = "Selecciona categoría";
    if (datos.precio === "" || Number(datos.precio) < 0) nuevosErrores.precio = "Precio inválido";
    if (datos.cupos === "" || Number(datos.cupos) < 0) nuevosErrores.cupos = "Cupos inválidos";

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    onGuardar({
      ...datos,
      precio: Number(datos.precio),
      cupos: Number(datos.cupos)
    });
    setDatos(inicial);
  }

  return (
    <Form onSubmit={enviar} noValidate className="border p-4 rounded bg-light">
      <h3>Nueva Actividad</h3>
      
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre de la Actividad</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={datos.nombre}
          onChange={cambiar}
          isInvalid={Boolean(errores.nombre)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.nombre}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          name="categoria"
          value={datos.categoria}
          onChange={cambiar}
          isInvalid={Boolean(errores.categoria)}
        >
          <option value="">-- Seleccionar --</option>
          <option value="Música">Música</option>
          <option value="Artes visuales">Artes visuales</option>
          <option value="Teatro">Teatro</option>
          <option value="Danza">Danza</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errores.categoria}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="descripcion"
          value={datos.descripcion}
          onChange={cambiar}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio ($)</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          value={datos.precio}
          onChange={cambiar}
          isInvalid={Boolean(errores.precio)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.precio}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="cupos">
        <Form.Label>Cupos</Form.Label>
        <Form.Control
          type="number"
          name="cupos"
          value={datos.cupos}
          onChange={cambiar}
          isInvalid={Boolean(errores.cupos)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.cupos}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="success">Guardar Actividad</Button>
    </Form>
  );
}

export default FormularioActividad;