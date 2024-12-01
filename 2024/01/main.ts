// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input/puzzleInput");

  const lines = text.split(/\r\n|\n/);

  const firstArray = <Array<number>>[];
  const secondArray = <Array<number>>[];
  for (const line of lines) {
    const splitLine = line.split("   ");

    firstArray.push(Number(splitLine[0]));
    secondArray.push(Number(splitLine[1]));
  }

  firstArray.sort();
  secondArray.sort();

  let totalDistance: number = 0;
  const arrayLength = firstArray.length;
  for (let i = 0; i < arrayLength; i++) {
    totalDistance += Math.abs(firstArray[i] - secondArray[i]);
  }

  console.log("totalDistance is ", totalDistance);
}
