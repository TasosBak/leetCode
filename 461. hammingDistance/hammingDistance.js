/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  count = 0;

  x = x.toString(2);
  y = y.toString(2);

  difference = Math.abs(x.length - y.length);

  if (x.length > y.length) y = "0".repeat(difference).concat(y);
  else x = "0".repeat(difference).concat(x);

  console.log(x);
  console.log(y);

  X = x.split("");
  Y = y.split("");

  for (let i = 0; i < X.length; i++) if (X[i] !== Y[i]) count++;

  return count;
};

console.log(hammingDistance(1, 50));
