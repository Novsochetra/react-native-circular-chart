export function sum(arrays: Array<number>): number {
  if (arrays.length == 0) {
    return 0;
  }
  return arrays.reduce((total, prev) => (total += prev));
}
