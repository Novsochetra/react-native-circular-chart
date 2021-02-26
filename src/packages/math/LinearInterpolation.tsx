// this linear interpolation is suppoprt only clamp.
export function LinearInterpolation({
  value,
  inputRange,
  outputRange,
}: {
  value: number;
  inputRange: [number, number];
  outputRange: [number, number];
}) {
  const minInputRange = Math.min(...inputRange);
  const maxInputRange = Math.max(...inputRange);
  const minOutPutRange = Math.min(...outputRange);
  const maxOutPutRange = Math.max(...outputRange);

  if (value > maxInputRange) {
    return maxOutPutRange;
  } else if (value < minInputRange) {
    return minOutPutRange;
  }

  const percentage = getPercentageRange({
    value,
    min: minInputRange,
    max: maxInputRange,
  });

  // formula: (1 - percentage) * min + percentage * max; 😎
  return (1 - percentage) * minOutPutRange + percentage * maxOutPutRange;
}

function getPercentageRange({
  value,
  min,
  max,
}: {
  value: number;
  min: number;
  max: number;
}): number {
  //formula calclate percentange by range ((input - min) * 100) / (max - min) 😎

  // return between 0 -> 1
  return ((value - min) * 100) / (max - min) / 100;
}
