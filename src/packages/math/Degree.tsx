export class Degree {
  _value = 0;

  constructor(value: number) {
    this._value = value;
  }

  // degree = radian * 180 / Math.PI => radian = degree * Math.PI / 180
  toRadian = (): number => (this._value * Math.PI) / 180;
}
