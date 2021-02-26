import { PolarCoordinate } from "../coordinate/PolarCoordinate";

// For more info:
// https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths

export type ArcParams = Pick<
  Arc,
  "coordX" | "coordY" | "startAngle" | "endAngle" | "radius"
>;

export class Arc {
  coordX: number = 0;
  coordY: number = 0;
  radius: number = 0;
  startAngle: number = 0;
  endAngle: number = 0;

  constructor(props: ArcParams) {
    this.coordX = props.coordX;
    this.coordY = props.coordY;
    this.radius = props.radius;
    this.startAngle = props.startAngle;
    this.endAngle = props.endAngle;
  }

  getDrawPath(): string {
    const start = new PolarCoordinate({
      coordX: this.coordX,
      coordY: this.coordY,
      radius: this.radius,
      angle: this.endAngle,
    }).toCartesian();

    const end = new PolarCoordinate({
      coordX: this.coordX,
      coordY: this.coordY,
      radius: this.radius,
      angle: this.startAngle,
    }).toCartesian();

    const largeArcFlag = this.endAngle - this.startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      this.radius,
      this.radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");

    return d;
  }
}
