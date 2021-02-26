export class ViewBox {
  width = 50;
  height = 50;

  constructor({ width, height }: { width: number; height: number }) {
    this.width = width;
    this.height = height;
  }

  getWidth = () => this.width;

  getHeight = () => this.height;

  getCenterCoord = () => ({ x: this.width / 2, y: this.height / 2 });
}
