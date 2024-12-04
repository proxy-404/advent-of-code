// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input/puzzleInput");

  const linesArray = text.split(/\r\n|\n/);

  var matrix = <Array<Array<string>>>[];

  for (const line of linesArray) {
    const charsArray = line.split("");
    matrix.push(charsArray);
  }

  const matrixXLength = matrix[0].length;
  const matrixYLength = matrix.length;

  let count = 0;
  for (let i = 0; i < matrixYLength; i++) {
    for (let j = 0; j < matrixXLength; j++) {
      if (hasLeftToRightXmas(j, i, matrixXLength)) {
        count++;
      }
      if (hasRightToLeftXmas(j, i)) {
        count++;
      }
      if (hasUpToDownXmas(j, i, matrixYLength)) {
        count++;
      }
      if (hasDownToUpXmas(j, i)) {
        count++;
      }
      if (hasTopRightXmas(j, i, matrixXLength)) {
        count++;
      }
      if (hasBottomRightXmas(j, i, matrixXLength, matrixYLength)) {
        count++;
      }
      if (hasBottomLefttXmas(j, i, matrixYLength)) {
        count++;
      }
      if (hasTopLefttXmas(j, i)) {
        count++;
      }

      hasUpToDownXmas;
    }
  }
}

function hasLeftToRightXmas(x: number, y: number, maxX: number) {
  if (
    maxX > x + 3 &&
    matrix[y][x] === "X" &&
    matrix[y][x + 1] === "M" &&
    matrix[y][x + 2] === "A" &&
    matrix[y][x + 3] === "S"
  ) {
    return true;
  }
  return false;
}

function hasRightToLeftXmas(x: number, y: number) {
  if (
    x - 3 >= 0 &&
    matrix[y][x] === "X" &&
    matrix[y][x - 1] === "M" &&
    matrix[y][x - 2] === "A" &&
    matrix[y][x - 3] === "S"
  ) {
    return true;
  }
  return false;
}

function hasUpToDownXmas(x: number, y: number, maxY: number) {
  if (
    maxY > y + 3 &&
    matrix[y][x] === "X" &&
    matrix[y + 1][x] === "M" &&
    matrix[y + 2][x] === "A" &&
    matrix[y + 3][x] === "S"
  ) {
    return true;
  }
  return false;
}

function hasDownToUpXmas(x: number, y: number) {
  if (
    y - 3 >= 0 &&
    matrix[y][x] === "X" &&
    matrix[y - 1][x] === "M" &&
    matrix[y - 2][x] === "A" &&
    matrix[y - 3][x] === "S"
  ) {
    return true;
  }
  return false;
}

function hasBottomRightXmas(x: number, y: number, maxX: number, maxY: number) {
  if (
    maxY > y + 3 &&
    maxX > x + 3 &&
    matrix[y][x] === "X" &&
    matrix[y + 1][x + 1] === "M" &&
    matrix[y + 2][x + 2] === "A" &&
    matrix[y + 3][x + 3] === "S"
  ) {
    return true;
  }
  return false;
}

function hasBottomLefttXmas(x: number, y: number, maxY: number) {
  if (
    maxY > y + 3 &&
    x - 3 >= 0 &&
    matrix[y][x] === "X" &&
    matrix[y + 1][x - 1] === "M" &&
    matrix[y + 2][x - 2] === "A" &&
    matrix[y + 3][x - 3] === "S"
  ) {
    return true;
  }
  return false;
}

function hasTopLefttXmas(x: number, y: number) {
  if (
    y - 3 >= 0 &&
    x - 3 >= 0 &&
    matrix[y][x] === "X" &&
    matrix[y - 1][x - 1] === "M" &&
    matrix[y - 2][x - 2] === "A" &&
    matrix[y - 3][x - 3] === "S"
  ) {
    return true;
  }
  return false;
}

function hasTopRightXmas(x: number, y: number, maxX: number) {
  if (
    maxX > x + 3 &&
    y - 3 >= 0 &&
    matrix[y][x] === "X" &&
    matrix[y - 1][x + 1] === "M" &&
    matrix[y - 2][x + 2] === "A" &&
    matrix[y - 3][x + 3] === "S"
  ) {
    return true;
  }
  return false;
}
