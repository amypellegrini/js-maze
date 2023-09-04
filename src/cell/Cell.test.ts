import { describe, it, expect } from "vitest";
import Cell from "./Cell";

describe("Cell", () => {
  it("can be created with rows and columns", () => {
    const cell = new Cell(1, 1);

    expect(cell).toBeDefined();
    expect(cell.row).toEqual(1);
    expect(cell.column).toEqual(1);
  });
});
