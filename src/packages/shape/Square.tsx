export class Square {
  diameter = 20;

  constructor({ diameter }: { diameter: number }) {
    this.diameter = diameter;
  }

  getDiameter = () => this.diameter;

  getCorner = () => this.diameter / Math.SQRT2;
}
