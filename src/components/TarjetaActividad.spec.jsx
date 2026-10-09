import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import TarjetaActividad from "./TarjetaActividad";

describe("TarjetaActividad", () => {
  const actividadBase = {
    id: 1,
    nombre: "Taller de Guitarra",
    categoria: "Música",
    descripcion: "Aprende acordes básicos",
    precio: 15000,
    cupos: 4
  };

  const renderConRouter = (componente) => {
    return render(<BrowserRouter>{componente}</BrowserRouter>);
  };

  it("Prueba 3: renderiza y muestra el nombre recibido por props", () => {
    renderConRouter(<TarjetaActividad actividad={actividadBase} onInscribir={() => {}} />);
    expect(screen.getByText("Taller de Guitarra")).toBeInTheDocument();
  });

  it("Prueba 4: muestra aviso de últimos cupos cuando cupos es <= 5 y > 0", () => {
    renderConRouter(<TarjetaActividad actividad={actividadBase} onInscribir={() => {}} />);
    expect(screen.getByText(/¡Últimos cupos!/i)).toBeInTheDocument();
  });

  it("Prueba 5: deshabilita el botón cuando los cupos son cero", () => {
    const sinCupos = { ...actividadBase, cupos: 0 };
    renderConRouter(<TarjetaActividad actividad={sinCupos} onInscribir={() => {}} />);
    const boton = screen.getByRole("button", { name: /inscribirme/i });
    expect(boton).toBeDisabled();
  });

  it("Prueba 6: muestra la categoría correctamente recibida", () => {
    renderConRouter(<TarjetaActividad actividad={actividadBase} onInscribir={() => {}} />);
    expect(screen.getByText("Música")).toBeInTheDocument();
  });

  it("Prueba 7: ejecuta el callback onInscribir al hacer clic en el botón", async () => {
    const usuario = userEvent.setup();
    const mockOnInscribir = vi.fn();
    renderConRouter(<TarjetaActividad actividad={actividadBase} onInscribir={mockOnInscribir} />);
    
    const boton = screen.getByRole("button", { name: /inscribirme/i });
    await usuario.click(boton);
    
    expect(mockOnInscribir).toHaveBeenCalledWith(actividadBase);
  });
});
