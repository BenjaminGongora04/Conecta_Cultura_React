import { vi } from "vitest";
import { guardarInscripciones } from "./persistencia";

describe("persistencia con spy", () => {
  it("Prueba 8: guarda el arreglo de inscripciones serializado usando spyOn", () => {
    const espia = vi.spyOn(Storage.prototype, "setItem");
    const datosPrueba = [{ id: 1, nombre: "Guitarra", precio: 15000 }];
    
    guardarInscripciones(datosPrueba);
    
    expect(espia).toHaveBeenCalledWith("inscripciones", JSON.stringify(datosPrueba));
    espia.mockRestore();
  });
});