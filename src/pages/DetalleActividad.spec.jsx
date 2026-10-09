import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalleActividad from "./DetalleActividad";

describe("DetalleActividad", () => {
  it("Prueba 10: muestra mensaje de error al consultar un id inexistente", () => {
    render(
      <MemoryRouter initialEntries={["/actividades/999"]}>
        <Routes>
          <Route path="/actividades/:id" element={<DetalleActividad />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Actividad no encontrada")).toBeInTheDocument();
  });
});
