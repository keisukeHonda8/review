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
console.log(`-----------------------------`);

/* 基礎演習 */
/* 1. 関数 isTeenager を宣言してください。*/
//JSDoc
/**
 * @param {number} age - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）
 *                    かどうか
 */
//func
// function isTeenager(age) {
//   if (age >= 13 && age <= 20) {
//     return true;
//   } else {
//     return false;
//   }
// }
//test
test(isTeenager(3), false);
test(isTeenager(14), true);
test(isTeenager(13), true);
test(isTeenager(20), true);
// console.log(`-----------------------------`);

/* 2.上の関数を書き直しましょう。もう 1 つ条件文を追加して、関数に渡された引数が 数値型 であるかどうかを確認し、
もし数値型でなければ "無効です！与えられた年齢は数字ではありません！" と返すようにしましょう。*/
//JSDoc
/**
 * @param {number} age - 年齢
 * @returns {any} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）
 *                かどうか
 *                引数が 数値型 であるかどうかを確認し、もし数値型でなければ "無効です！与えられた年齢は数字では
 *                ありません！" と返す
 */
//func
function isTeenager(age) {
  if (isNaN(age) === true || typeof age !== "number") {
    return "無効です！与えられた年齢は数字ではありません！";
  } else if (age >= 13 && age <= 20) {
    return true;
  } else {
    return false;
  }
}
//test
test(isTeenager("Hello!"), "無効です！与えられた年齢は数字ではありません！");
test(isTeenager(true), "無効です！与えられた年齢は数字ではありません！");
test(isTeenager(), "無効です！与えられた年齢は数字ではありません！");
test(isTeenager(null), "無効です！与えられた年齢は数字ではありません！");
test(isTeenager(NaN), "無効です！与えられた年齢は数字ではありません！");
console.log(`-----------------------------`);

/* 3.関数 anotherGreeting を宣言してください。 */
//JSDoc
/**
 * @param {string} name - 人の名前
 * @param {boolean} sanYesOrNo - 名前に"san" を付ける場合は true　何もつけない場合は false
 * @param {boolean} HelloGoodbye- "Hello" なら true　"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶文
 */
//func
// function anotherGreeting(name, sanYesOrNo, HelloGoodbye) {
//   let san;
//   let greeting;
//   if (sanYesOrNo === true) {
//     san = "-san.";
//   } else {
//     san = "!";
//   }
//   if (HelloGoodbye === true) {
//     greeting = "Hello, ";
//   } else {
//     greeting = "Goodbye, ";
//   }
//   return greeting + name + san;
// }
//test
test(anotherGreeting("Mary", true, true), "Hello, Mary-san.");
test(anotherGreeting("Mary", false, true), "Hello, Mary!");
test(anotherGreeting("Felix", true, false), "Goodbye, Felix-san.");
test(anotherGreeting("keisuke", false, false), "Goodbye, keisuke!");
// console.log(`-----------------------------`);

/* 中級演習 */
/* 1.上記の 関数 anotherGreeting に型チェックを加えましょう。 */
//JSDoc
/**
 * @param {string} name - 人の名前
 * @param {boolean} sanYesOrNo - 名前に"san" を付ける場合は true　何もつけない場合は false
 * @param {boolean} HelloGoodbye- "Hello" なら true　"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶文と、各引数の型チェックにて型に一致しない場合に
 *                    "無効な入力値です！"と返す
 */
//func
function anotherGreeting(name, sanYesOrNo, HelloGoodbye) {
  if (
    checkString(name) === true ||
    checkBoolean(sanYesOrNo) === true ||
    checkBoolean(HelloGoodbye) === true
  ) {
    return "無効な入力値です！";
  }
  let san;
  let greeting;
  if (sanYesOrNo === true) {
    san = "-san.";
  } else {
    san = "!";
  }
  if (HelloGoodbye === true) {
    greeting = "Hello, ";
  } else {
    greeting = "Goodbye, ";
  }
  return greeting + name + san;
}
//func
function checkNumber(argument) {
  if (typeof argument !== "number") {
    // throw new Error("引数は数値である必要があります");
    return true;
  }
}
//func
function checkString(argument) {
  if (typeof argument !== "string") {
    // throw new Error("引数は文字列である必要があります");
    return true;
  }
}
//func
function checkBoolean(argument) {
  if (typeof argument !== "boolean") {
    // throw new Error("引数はBooleanである必要があります");
    return true;
  }
}
//test
test(anotherGreeting(true, false, true), "無効な入力値です！");
test(anotherGreeting("Sam", true, 0), "無効な入力値です！");
test(anotherGreeting("Honda", true, true), "Hello, Honda-san.");
console.log(`-----------------------------`);

/* 2. 関数 getGrade を宣言してください。次の説明を参考にしましょう。*/
//JSDoc
/**
 * @param {number} score - 0 以上 100 以下の点数（スコア）
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績（グレード）
 */
//func
// function getGrade(score) {
//   if (100 >= score && score >= 90) {
//     return "A";
//   } else if (89 >= score && score >= 80) {
//     return "B";
//   } else if (79 >= score && score >= 70) {
//     return "C";
//   } else if (69 >= score && score >= 60) {
//     return "D";
//   } else if (59 >= score) {
//     return "F";
//   }
// }
//test
test(getGrade(95), "A");
test(getGrade(85), "B");
test(getGrade(75), "C");
test(getGrade(65), "D");
test(getGrade(59), "F");
// console.log(`-----------------------------`);

/* 3. 関数 getGrade に range check（範囲チェック）を加えて、100 より大きい数値、または 0 より小さい数値が与え
られた場合、"無効な点数です。" と返すように修正してください。*/
//JSDoc
/**
 * @param {number} score - 0 以上 100 以下の点数（スコア）
 * @returns {"A"|"B"|"C"|"D"|"F"} 点数に応じた成績（グレード）
 */
//func

function getGrade(score) {
  if (checkRange(score) === true) {
    return "無効な点数です。";
  }
  if (100 >= score && score >= 90) {
    return "A";
  } else if (89 >= score && score >= 80) {
    return "B";
  } else if (79 >= score && score >= 70) {
    return "C";
  } else if (69 >= score && score >= 60) {
    return "D";
  } else if (59 >= score) {
    return "F";
  }
}
//func
function checkRange(argument) {
  if (argument > 100 || 0 > argument) {
    return true;
  }
}
//test
test(getGrade(101), "無効な点数です。");
test(getGrade(0), "F");
test(getGrade(-101), "無効な点数です。");

/* 4.関数 getBestScore を宣言してください。この関数は getGrade と逆のことを行います。 */
//JSDoc
/**
 * @param {"A"|"B"|"C"|"D"|"F"} grade - 成績（グレード）
 * @returns {number} 各成績における最高点（ベストスコア）
 */
//func
// function getBestScore(grade) {
//   if (grade === "A") {
//     return 100;
//   } else if (grade === "B") {
//     return 89;
//   } else if (grade === "C") {
//     return 79;
//   } else if (grade === "D") {
//     return 69;
//   } else if (grade === "F") {
//     return 59;
//   }
// }
//test
test(getBestScore("A"), 100);
test(getBestScore("B"), 89);
test(getBestScore("C"), 79);
test(getBestScore("D"), 69);
test(getBestScore("F"), 59);

/* 5.関数 getBestScore に入力チェックを加えて、無効な文字列を入力した場合、"無効な成績です。"
と返すようにしましょう。 */
//JSDoc
/**
 * @param {"A"|"B"|"C"|"D"|"F"} grade - 成績（グレード）
 * @returns {number} 各成績における最高点（ベストスコア）
 */
//func
function getBestScore(grade) {
  if (checkString(grade) === true) {
    return "無効な成績です。";
  }
  if (grade === "A") {
    return 100;
  } else if (grade === "B") {
    return 89;
  } else if (grade === "C") {
    return 79;
  } else if (grade === "D") {
    return 69;
  } else if (grade === "F") {
    return 59;
  }
}
//test
test(getBestScore(3), "無効な成績です。");
test(getBestScore(true), "無効な成績です。");

/* 応用演習 */
/* 1.|| 演算子を使用せずに、|| のように機能する関数 or を宣言してください。 */
