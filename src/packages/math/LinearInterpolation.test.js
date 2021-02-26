import React from "react";
import { LinearInterpolation } from "./LinearInterpolation";

describe("LinearInterpolation: ", (): void => {
  it("should equal 50, when value: 50, inputRange: [0, 100], outputRange: [0, 100]", () => {
    const result = LinearInterpolation({
      value: 50,
      inputRange: [0, 100],
      outputRange: [0, 100],
    });
    const expectedResult = 50;

    expect(result).toBe(expectedResult);
  });

  it("should equal 0, when value: 0, inputRange: [0, 100], outputRange: [0, 100]", () => {
    const result = LinearInterpolation({
      value: 0,
      inputRange: [0, 100],
      outputRange: [0, 100],
    });
    const expectedResult = 0;

    expect(result).toBe(expectedResult);
  });

  it("should equal 100, when value: 100, inputRange: [0, 100], outputRange: [0, 100]", () => {
    const result = LinearInterpolation({
      value: 100,
      inputRange: [0, 100],
      outputRange: [0, 100],
    });
    const expectedResult = 100;

    expect(result).toBe(expectedResult);
  });

  it("should equal 10, when value: 100, inputRange: [0, 100], outputRange: [0, 10]", () => {
    const result = LinearInterpolation({
      value: 100,
      inputRange: [0, 100],
      outputRange: [0, 10],
    });
    const expectedResult = 10;

    expect(result).toBe(expectedResult);
  });

  it("should equal 9, when value: 90, inputRange: [0, 100], outputRange: [0, 10]", () => {
    const result = LinearInterpolation({
      value: 90,
      inputRange: [0, 100],
      outputRange: [0, 10],
    });
    const expectedResult = 9;

    expect(result).toBe(expectedResult);
  });
});
