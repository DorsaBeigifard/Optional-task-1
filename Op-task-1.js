const input = [-3, 1, 2, -5, 4];

function turnObject(arr) {
  const positiveNumbers = arr.filter((num) => num >= 0);
  console.log(positiveNumbers);
  const squares = positiveNumbers.map((num) => num ** 2);
  console.log(squares);
  const sumOfSquares = squares.reduce((sum, num) => sum + num, 0);
  console.log(sumOfSquares);

  return { positiveNumbers, squares, sumOfSquares };
}

console.log(turnObject(input));
