"use strict";
// 1行目に記載している 'use strict' は削除しないでください

/* from here */
/* テスト駆動開発（Test-driven Development [TDD]） Warmup */
/* 1. 関数: compareTwoNumbers を宣言してください。*/
//JSDoc
/**
 * @param {number} number1 - 1 番目の数字
 * @param {number} number2 - 2 番目の数字
 * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
 */
//func
function compareTwoNumbers(number1, number2) {
  if (number1 === number2) {
    return `${number1} は ${number2} と等しい`;
  } else if (number1 < number2) {
    return `${number1} は ${number2} より小さい`;
  } else if (number1 > number2) {
    return `${number1} は ${number2} より大きい`;
  }
}
//test
test(compareTwoNumbers(1, 1), "1 は 1 と等しい");
test(compareTwoNumbers(3, 4), "3 は 4 より小さい");
test(compareTwoNumbers(8, 4), "8 は 4 より大きい");
