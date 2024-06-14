"use strict";
// 1行目に記載している 'use strict' は削除しないでください

/* from here */
/* テスト駆動開発（Test-driven Development [TDD]） Warmup */
/* 1. 関数: compareTwoNumbers を宣言してください。*/
/**
 * @param {number} ??? - 1 番目の数字
 * @param {number} ??? - 2 番目の数字
 * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
 */
// ここに関数を定義しましょう

let actual = compareTwoNumbers(1, 1);
let expected = "1 は 1 と等しい";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compareTwoNumbers(3, 4);
expected = "3 は 4 より小さい";

if (actual === expected) {
  console.log("OK! Test PASSED.");
} else {
  console.error("Test FAILED. Try again!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// 期待値が "X は Y より大きい" になるテストを書いてみましょう
