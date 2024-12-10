// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input/puzzleInput.example");

  const lines = text.split(/\r\n|\n/);

  const matrix = lines.map((line) => line.split(""));

  // find fist position
  const matrixXLength = matrix[0].length;
  const matrixYLength = matrix.length;
  let posX = 0;
  let posY = 0;
  let direction = "";
  for (let i = 0; i < matrixYLength; i++) {
    for (let j = 0; j < matrixXLength; j++) {
      if (matrix[i][j] !== "." && matrix[i][j] !== "#") {
        posX = j;
        posY = i;
        direction = matrix[i][j];
        break;
      }
    }
  }

  let count = 0;
  while (notOutOfBounds(posX, posY, matrixXLength, matrixYLength)) {
    console.log("🚀 ~ direction:", direction);
    switch (direction) {
      case "^":
        if (matrix[posY][posX] === "#") {
          posY++;
          posX++;
          direction = ">";
        } else {
          posY--;
          count++;
        }
        break;

      case "v":
        if (matrix[posY][posX] === "#") {
          posY--;
          posX--;
          direction = "<";
        } else {
          posY++;
          count++;
        }
        break;

      case ">":
        if (matrix[posY][posX] === "#") {
          posX--;
          posY++;
          direction = "v";
        } else {
          posX++;
          count++;
        }
        break;

      case "<":
        if (matrix[posY][posX] === "#") {
          posX++;
          posY--;
          direction = "^";
        } else {
          posX--;
          count++;
        }
        break;

      default:
        break;
    }
    if (count > 200) {
      break;
    }
  }
  console.log("🚀 ~ count:", count);

  // ^>v<
}

function move() {
  switch (direction) {
    case "^":
      if (matrix[posY][posX] === "#") {
        posY++;
        posX++;
        direction = ">";
      } else {
        posY--;
        count++;
      }
      break;

    case "v":
}

function notOutOfBounds(
  x: number,
  y: number,
  xLength: number,
  yLength: number
) {
  return x >= 0 && x < xLength && y >= 0 && y < yLength;
}
