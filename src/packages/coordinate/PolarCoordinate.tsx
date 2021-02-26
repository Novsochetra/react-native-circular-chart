import { Degree } from "../math";
import { CartesianCoordinate } from "./CartesianCoordinate";
import { Coordinate } from "./Coordinate";

// https://www.mathsisfun.com/polar-cartesian-coordinates.html
export class PolarCoordinate extends Coordinate {
  coordX: number = 0;
  coordY: number = 0;
  radius: number = 0;
  angle: number = 0;

  constructor({
    coordX,
    coordY,
    radius,
    angle,
  }: {
    coordX: number;
    coordY: number;
    radius: number;
    angle: number;
  }) {
    super();
    this.coordX = coordX;
    this.coordY = coordY;
    this.angle = angle;
    this.radius = radius;
  }

  toCartesian = (): CartesianCoordinate => {
    const startAngle = this.angle - 90
    const angleInRadians = new Degree(startAngle).toRadian();

    return {
      x: this.coordX + this.radius * Math.cos(angleInRadians),
      y: this.coordY + this.radius * Math.sin(angleInRadians),
    };
  };
}
