// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input/puzzleInput.example");

  const regex = /mul\((\d+),(\d+)\)/g;
  const operationArray = text.match(regex);

  let count = 0;

  operationArray?.forEach((op) => {
    count += eval(op);
  });
  console.log("🚀 ~ count:", count);
}

function mul(a: number, b: number): number {
  return a * b;
}
