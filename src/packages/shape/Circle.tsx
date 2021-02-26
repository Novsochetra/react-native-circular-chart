export class Circle {
  radius = 20;

  constructor({ r }: { r: number }) {
    this.radius = r ?? 50;
  }

  circumference = () => this.radius * 2 * Math.PI;

  getArcByPercentage = (percentage: number) => {
    const degreeInPercentage = 360 * percentage;
    return (degreeInPercentage / 360) * this.circumference();
  };

  getAngleByPercentange = (percentage: number) => {
    return (
      (this.getArcByPercentage(percentage) * 360) / 2 / Math.PI / this.radius
    );
  };
}
