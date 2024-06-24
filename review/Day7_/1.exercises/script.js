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

/* 4.関数 getPolygonName を宣言してください。 */
//JSDoc
/**
 * @param {number} angles - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ正多角形の英語名
 */
//func
function getPolygonName(angles) {
  switch (angles) {
    case 3:
      return "triangle";
    case 4:
      return "square";
    case 5:
      return "pentagon";
    case 6:
      return "hexagon";
    case 7:
      return "heptagon";
    case 8:
      return "octagon";
    default:
      return "Invalid Input.";
  }
}

//test
test(getPolygonName(3), "triangle");
test(getPolygonName(4), "square");
test(getPolygonName(5), "pentagon");
test(getPolygonName(6), "hexagon");
test(getPolygonName(7), "heptagon");
test(getPolygonName(8), "octagon");
test(getPolygonName(9), "Invalid Input.");
test(getPolygonName("three"), "Invalid Input.");
console.log(`-----------------------------`);

/* 中級演習 */
/* 1. 関数 getTimeOfDay を宣言してください。
      4:00  AM から - 12:00 PM の間（12:00 は除く） : morning
      12:00 PM から - 5:00  PM の間（5:00 は除く）  : afternoon
      5:00  PM から - 8:30  PM の間（8:30 は除く）  : evening
      8:30  PM から - 4:00  AM の間（4:00 は除く）  : night
*/
//JSDoc
/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} hours - 時 (12時間制)
 * @param {number} minutes - 分
 * @param {"AM"|"PM"} amOrPm - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
 */
//func
function getTimeOfDay(hours, minutes, amOrPm) {
  if (
    checkNumber(hours) === true &&
    checkNumber(minutes) === true &&
    checkString(amOrPm) === true
  ) {
    return "Invalid Input.";
  } else if (amOrPm === "AM" && hours >= 4 && hours < 12) {
    return "morning";
  } else if (
    amOrPm === "PM" &&
    ((hours >= 12 && hours < 13) || (hours >= 1 && hours < 5))
  ) {
    return "afternoon";
  } else if (
    amOrPm === "PM" &&
    ((hours >= 5 && hours < 8) || (hours === 8 && minutes < 30))
  ) {
    return "evening";
  } else if (
    hours >= 8 ||
    (amOrPm === "PM" && hours === 8 && minutes >= 30 && hours < 12) ||
    (amOrPm === "AM" &&
      ((hours >= 12 && hours < 13) || (hours >= 1 && hours < 4)))
  ) {
    return "night";
  }
}

//test
test(getTimeOfDay(4, 0, "AM"), "morning");
test(getTimeOfDay(12, 0, "PM"), "afternoon");
test(getTimeOfDay(12, 59, "PM"), "afternoon");
test(getTimeOfDay(1, 0, "PM"), "afternoon");
test(getTimeOfDay(4, 59, "PM"), "afternoon");
test(getTimeOfDay(5, 0, "PM"), "evening");
test(getTimeOfDay(7, 0, "PM"), "evening");
test(getTimeOfDay(8, 0, "PM"), "evening");
test(getTimeOfDay(8, 29, "PM"), "evening");
test(getTimeOfDay(8, 30, "PM"), "night");
test(getTimeOfDay(12, 0, "AM"), "night");
test(getTimeOfDay(3, 59, "AM"), "night");
