// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input/puzzleInput");

  const lineArray = text.split(/\r\n|\n/);

  let safeReportCount = 0;
  const arrayLength = lineArray.length;
  for (let i = 0; i < arrayLength; i++) {
    if (isReportSafe(lineArray[i])) {
      safeReportCount++;
    }
  }

  console.log("safeReportCount is ", safeReportCount);
}

function isReportSafe(report: string): boolean {
  const numberArray = report.split(" ").map(Number);

  const direction =
    Number(numberArray[1]) - Number(numberArray[0]) > 0 ? "asc" : "desc";

  if (direction === "asc") {
    return validateReportAscending(numberArray);
  }

  return validateReportDescending(numberArray);
}

function validateReportAscending(numberArray: Array<number>): boolean {
  const numberArrayLength = numberArray.length;

  for (let i = 0; i < numberArrayLength - 1; i++) {
    if (
      !(
        numberArray[i] < numberArray[i + 1] &&
        numberArray[i + 1] - numberArray[i] <= 3
      )
    ) {
      return false;
    }
  }

  return true;
}

function validateReportDescending(numberArray: Array<number>): boolean {
  const numberArrayLength = numberArray.length;

  for (let i = 0; i < numberArrayLength - 1; i++) {
    if (
      !(
        numberArray[i] > numberArray[i + 1] &&
        numberArray[i] - numberArray[i + 1] <= 3
      )
    ) {
      return false;
    }
  }

  return true;
}
