export const factor = (a, b, c) => {
  // Calculate the value inside the square root which determines if there will be complex roots
  const q = Math.pow(b, 2) - 4 * a * c;

  // Calculate the root pair
  const r1 = (-1 * b + Math.sqrt(q)) / (2 * a);
  const r2 = (-1 * b - Math.sqrt(q)) / (2 * a);

  if (q < 0) {
    return { r1: NaN, r2: NaN };
  } else {
    return { r1: r1, r2: r2 };
  }
};
