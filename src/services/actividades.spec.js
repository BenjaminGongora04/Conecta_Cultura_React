import { vi } from "vitest";

async function obtenerNombresServicio(servicio) {
  const actividades = await servicio.listar();
  return actividades.map((a) => a.nombre);
}

describe("Servicios Asíncronos", () => {
  it("Prueba 9: obtiene nombres desde un servicio mockeado asíncronamente", async () => {
    const servicioMock = {
      listar: vi.fn().mockResolvedValue([
        { id: 1, nombre: "Teatro Comunitario", cupos: 10 }
      ])
    };

    const nombres = await obtenerNombresServicio(servicioMock);
    
    expect(servicioMock.listar).toHaveBeenCalled();
    expect(nombres).toEqual(["Teatro Comunitario"]);
  });
});