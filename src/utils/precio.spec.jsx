import { formatearPrecio } from "./precio";

describe("formatearPrecio", () => {
  it("Prueba 1: muestra cero como Gratis", () => {
    expect(formatearPrecio(0)).toBe("Gratis");
  });

  it("Prueba 2: formatea un valor positivo con convención chilena", () => {
    expect(formatearPrecio(15000)).toContain("15.000");
  });
});
