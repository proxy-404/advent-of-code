// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  class Guard {
    posX: number;
    posY: number;
    direction: string;
    pointCount: number;
    matrix: string[][];
    matrixXLength: number = 0;
    matrixYLength: number = 0;
    isFinished: boolean = false;
    constructor(
      posX: number,
      posY: number,
      direction: string,
      pointCount: number,
      matrix: string[][],
      matrixXLength: number,
      matrixYLength: number
    ) {
      this.posX = posX;
      this.posY = posY;
      this.direction = direction;
      this.pointCount = pointCount;
      this.matrix = matrix;
      this.matrixXLength = matrixXLength;
      this.matrixYLength = matrixYLength;
    }

    turnRight() {
      switch (this.direction) {
        case "^":
          this.direction = ">";
          break;
        case "v":
          this.direction = "<";
          break;
        case ">":
          this.direction = "v";
          break;
        case "<":
          this.direction = "^";
          break;
      }
    }

    isOutOfBounds() {
      switch (this.direction) {
        case "^":
          return this.posY - 1 < 0;
        case "v":
          return this.posY + 1 >= this.matrixYLength;
        case ">":
          return this.posX + 1 >= this.matrixXLength;
        case "<":
          return this.posX - 1 < 0;
      }
    }

    canMove() {
      if (this.isOutOfBounds()) {
        this.isFinished = true;
        return false;
      }

      switch (this.direction) {
        case "^":
          return this.matrix[this.posY - 1][this.posX] !== "#";
        case "v":
          return this.matrix[this.posY + 1][this.posX] !== "#";
        case ">":
          return this.matrix[this.posY][this.posX + 1] !== "#";
        case "<":
          return this.matrix[this.posY][this.posX - 1] !== "#";
      }
      return false;
    }

    move() {
      switch (this.direction) {
        case "^":
          this.posY--;
          this.matrix[this.posY][this.posX] = "X";
          break;
        case "v":
          this.posY++;
          this.matrix[this.posY][this.posX] = "X";
          break;
        case ">":
          this.posX++;
          this.matrix[this.posY][this.posX] = "X";
          break;
        case "<":
          this.posX--;
          this.matrix[this.posY][this.posX] = "X";
          break;
      }
    }
  }

  const text = await Deno.readTextFile("input/puzzleInput");

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
        matrix[i][j] = "X";
        break;
      }
    }
  }

  const guard = new Guard(
    posX,
    posY,
    direction,
    1,
    matrix,
    matrixXLength,
    matrixYLength
  );

  while (!guard.isFinished) {
    if (guard.canMove()) {
      guard.move();
    } else {
      guard.turnRight();
    }
  }

  let count = 0;
  for (let i = 0; i < guard.matrixYLength; i++) {
    for (let j = 0; j < guard.matrixXLength; j++) {
      if (guard.matrix[i][j] === "X") {
        count++;
      }
    }
  }

  console.log("🚀 ~ spotCount:", count);
}
