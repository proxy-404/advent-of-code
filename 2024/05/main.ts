// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input/puzzleInput");

  const textArray = text.split(/\n\s*\n/);

  const rulesArray = textArray[0]
    .trim()
    .split(/\r\n|\n/)
    .map((rule) => rule.split("|"));

  const pagesArray = textArray[1]
    .trim()
    .split(/\r\n|\n/)
    .map((page) => page.split(","));

  const pageArrayLength = pagesArray.length;

  let sumOfMiddlePages = 0;
  for (let i = 0; i < pageArrayLength; i++) {
    const rules = getRules(rulesArray, pagesArray[i]);

    let isCorrect = true;
    for (let j = 0; j < rules.length; j++) {
      const indexA = pagesArray[i].indexOf(rules[j][0]);
      const indexB = pagesArray[i].indexOf(rules[j][1]);

      if (indexA > indexB && indexB !== -1) {
        // console.log("fail");
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      // console.log("correct");
      sumOfMiddlePages += Number(
        pagesArray[i][Math.floor(pagesArray[i].length / 2)]
      );
    }
  }

  console.log("🚀 ~ sumOfMiddlePages:", sumOfMiddlePages);
}

function getRules(
  rulesArray: Array<Array<string>>,
  pages: Array<string>
): Array<Array<string>> {
  const rules: Array<Array<string>> = [];
  pages.forEach((page) => {
    for (let i = 0; i < rulesArray.length; i++) {
      if (rulesArray[i][0] === page) {
        rules.push(rulesArray[i]);
      }
    }
  });

  return rules;
}
