"use strict";
// 1行目に記載している 'use strict' は削除しないでください

/* from here */
/* 関数（Functions）, 比較（Comparisons）, 条件分岐（Conditionals）レビュー */
/* 基礎演習 */
/* 1.関数 isLongerThan を宣言してください。 */
//JSDoc
/**
 * @param {string} characterString - テストの対象となる文字列
 * @param {number} wordCount - 確認したい文字数
 * @returns {any} 与えられた文字列の長さが確認したい文字数より長いかどうか
 */
//func
function isLongerThan(characterString, wordCount) {
  if (
    checkString(characterString) === true ||
    checkNumber(wordCount) === true
  ) {
    return "Invalid input.";
  } else if (characterString.length > wordCount) {
    return true;
  } else {
    return false;
  }
}
//test
test(isLongerThan("three", 3), true);
test(isLongerThan("three", 5), false);
test(isLongerThan(3, 5), "Invalid input.");
test(isLongerThan("three", "five"), "Invalid input.");
console.log(`-----------------------------`);

/* 2. 関数 isOddWithoutIf を宣言してください。ただし、if キーワードを使ってはいけません。入力値の型チェックは
必ず行ってください。*/
//JSDoc
/**
 * @param {number} testValue - テストの対象となる数値
 * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
 */
//func
function isOddWithoutIf(testValue) {
  return typeof testValue === "number" && testValue % 2 !== 0;
}
//test
test(isOddWithoutIf(3), true);
test(isOddWithoutIf(4), false);
test(isOddWithoutIf("8"), false);
console.log(`-----------------------------`);

/* 3.関数 getSimpleNumberName を宣言してください。 */
//JSDoc
/**
 * @param {number} zeroTenNumber - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"}
 *          与えられた数値を                    アルファベットで記した時の名前
 */
//func
function getSimpleNumberName(zeroTenNumber) {
  if (checkNumber(zeroTenNumber) === true) {
    return "Invalid Input.";
  } else if (zeroTenNumber === 0) {
    return "zero";
  } else if (zeroTenNumber === 1) {
    return "one";
  } else if (zeroTenNumber === 2) {
    return "two";
  } else if (zeroTenNumber === 3) {
    return "three";
  } else if (zeroTenNumber === 4) {
    return "four";
  } else if (zeroTenNumber === 5) {
    return "five";
  } else if (zeroTenNumber === 6) {
    return "six";
  } else if (zeroTenNumber === 7) {
    return "seven";
  } else if (zeroTenNumber === 8) {
    return "eight";
  } else if (zeroTenNumber === 9) {
    return "nine";
  } else if (zeroTenNumber === 10) {
    return "ten";
  }
}
//test
test(getSimpleNumberName(0), "zero");
test(getSimpleNumberName("three"), "Invalid Input.");
