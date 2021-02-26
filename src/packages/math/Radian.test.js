import React from "react";
// import { sum } from "../../src/utils/Array";
import { Radian } from "./Radian";

describe("Converter From Radian To Radian", (): void => {
  it("π/2 == 90 deg", () => {
    const radian = Math.PI / 2;
    const degree = new Radian(radian).toDegree();

    const result = Number(degree.toFixed(13));
    const actualResult = 90;

    expect(result).toBe(actualResult);
  });

  it("π/4 == 45 deg", () => {
    const radian = Math.PI / 4;
    const degree = new Radian(radian).toDegree();

    const result = Number(degree.toFixed(13));
    const actualResult = 45;

    expect(result).toBe(actualResult);
  });

  it("π == 180deg", () => {
    const radian = Math.PI;
    const degree = new Radian(radian).toDegree();

    const result = Number(degree.toFixed(13));
    const actualResult = 180;

    expect(result).toBe(actualResult);
  });

  it("3π/2 == 270 deg", () => {
    const radian = (3 * Math.PI) / 2;
    const degree = new Radian(radian).toDegree();

    const result = Number(degree.toFixed(13));
    const actualResult = 270;

    expect(result).toBe(actualResult);
  });

  it("2π == 360 deg", () => {
    const radian = 2 * Math.PI;
    const degree = new Radian(radian).toDegree();

    const result = Number(degree.toFixed(13));
    const actualResult = 360;

    expect(result).toBe(actualResult);
  });
});
