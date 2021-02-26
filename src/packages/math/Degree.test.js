import React from "react";
// import { sum } from "../../src/utils/Array";
import { Degree } from "./Degree";

describe("Converter From Degree To Radian", (): void => {
  it("90 deg == π/2 rad", () => {
    const degree = 90;
    const radian = new Degree(degree).toRadian();

    expect(Number(radian.toFixed(13))).toBe(1.5707963267949);
  });

  it("45 deg == π/4", () => {
    const degree = 45;
    const radian = new Degree(degree).toRadian();

    expect(Number(radian.toFixed(13))).toBe(0.7853981633974);
  });

  it("180 deg == π", () => {
    const degree = 180;
    const radian = new Degree(degree).toRadian();

    const result = Number(radian.toFixed(13));
    const actualResult = Number(Math.PI.toFixed(13));

    expect(result).toBe(actualResult);
  });

  it("270 deg == 3π/2", () => {
    const degree = 270;
    const radian = new Degree(degree).toRadian();

    const result = Number(radian.toFixed(13));
    const actualResult = Number(((3 * Math.PI) / 2).toFixed(13));

    expect(result).toBe(actualResult);
  });

  it("360 deg == 2π", () => {
    const degree = 360;
    const radian = new Degree(degree).toRadian();

    const result = Number(radian.toFixed(13));
    const actualResult = Number((2 * Math.PI).toFixed(13));

    expect(result).toBe(actualResult);
  });
});
