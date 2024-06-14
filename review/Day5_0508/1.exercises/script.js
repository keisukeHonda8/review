"use strict";
// 1行目に記載している 'use strict' は削除しないでください

/* from here */
/* 条件分岐入門 ウォーミングアップ */
/*1. 以下のコードの誤りを修正してください。 */
//JSDoc
/**
 *
 * @param {number} temperature      温度を表す数値型の引数を1つ取り
 * @returns {string}                temperture >= 30 なら"暑い！"、でなければ"暑くない"を返す
 */
//func
function isHot(temperature) {
  if (temperature >= 30) {
    return "暑い！";
  } else {
    return "暑くない";
  }
}
//test
console.log(isHot(31)); // "暑い！"
console.log(isHot(2)); // "暑くない"
console.log(isHot(30)); // "暑くない"
console.log(`-----------------------------`);

/* 2. 以下も同様に修正しましょう。*/
//JSDoc
/**
 *
 * @param {number} age      年齢を指定する数値型の引数を1つ取り
 * @returns {string}        age <6: "幼稚園"、<11: "小学校"、<15: "中学校"、<18: "高校"、それ以外は"高校卒業後"を返す
 */
//func
function getTypeOfSchool(age) {
  if (age < 6) {
    return "幼稚園";
  } else if (age < 11) {
    return "小学校";
  } else if (age < 15) {
    return "中学校";
  } else if (age < 18) {
    return "高校";
  } else {
    return "高校卒業後";
  }
}
//test
console.log(getTypeOfSchool(3)); // "幼稚園"
console.log(getTypeOfSchool(8)); // "小学校"
console.log(getTypeOfSchool(13)); // "中学校"
console.log(getTypeOfSchool(16)); // "高校"
console.log(getTypeOfSchool(30)); // "高校卒業後"
console.log(`-----------------------------`);

/* テスト駆動開発 */
/* 基礎演習 */
/* 1. 関数 getFullName を修正してください。*/
//JSDoc
/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */
//func
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
//test
test(getFullName("Ken", "Watanabe"), "Ken Watanabe");
test(getFullName("Keisuke", "Honda"), "Keisuke Honda");

/* 2. 関数 simpleGreeting を宣言してください。*/
//JSDoc
/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありなら true、無しなら false）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
 */
//func
function simpleGreeting(name, isFormal) {
  if (isFormal === true) {
    return `Hello, ${name}-san.`;
  } else if (isFormal === false) {
    return `Hello, ${name}.`;
  }
}
//test
test(simpleGreeting("Amy", true), "Hello, Amy-san.");
test(simpleGreeting("Matt", false), "Hello, Matt.");
test(simpleGreeting("Keisuke", true), "Hello, Keisuke-san.");

/* 3. 関数 isGreaterThan を宣言してください。*/
//JSDoc
/**
 * @param {number} num1 - 1 番目の数字
 * @param {number} num2 - 2 番目の数字
 * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
 */
//func
function isGreaterThan(num1, num2) {
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}
//test
test(isGreaterThan(5, 4), true);
test(isGreaterThan(3, 4), false);
test(isGreaterThan(0, -1), true);

/* 4. 省略 */
/* 5. 関数 operate を宣言してください。*/
//JSDoc
/**
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} mathOperator - 使用する算術演算子を表す文字列
 * @param {number} num1 - 1 番目の被演算子
 * @param {number} num2 - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
 */
//func
function operate(mathOperator, num1, num2) {
  if (mathOperator === "+") {
    return num1 + num2;
  } else if (mathOperator === "-") {
    return num1 - num2;
  } else if (mathOperator === "*") {
    return num1 * num2;
  } else if (mathOperator === "/") {
    return num1 / num2;
  } else if (mathOperator === "**") {
    return num1 ** num2;
  } else if (mathOperator === "%") {
    return num1 % num2;
  }
}
//test
test(operate("+", 1, 2), 3);
test(operate("-", 100, 33), 67);
test(operate("*", 10, 33), 330);
test(operate("/", 100, 2), 50);
test(operate("**", 2, 8), 256);
test(operate("%", 100, 8), 4);

/* 6. 英語では、虹色は以下の７色で表現されます。これを踏まえて次の問題に取り組みましょう。
red
orange
yellow
green
blue
indigo
violet
関数 isRainbowColor を宣言してください。*/
//JSDoc
/**
 * @param {string} colorName - 確認したい色の名前
 * @returns {boolean} 与えられた色が虹色に含まれているかどうか
 */
//func
function isRainbowColor(colorName) {
  if (colorName.toLowerCase() === "red") {
    return true;
  } else if (colorName.toLowerCase() === "orange") {
    return true;
  } else if (colorName.toLowerCase() === "yellow") {
    return true;
  } else if (colorName.toLowerCase() === "green") {
    return true;
  } else if (colorName.toLowerCase() === "blue") {
    return true;
  } else if (colorName.toLowerCase() === "indigo") {
    return true;
  } else if (colorName.toLowerCase() === "violet") {
    return true;
  } else {
    return false;
  }
}
//test
test(isRainbowColor("red"), true);
test(isRainbowColor("rEd"), true);
test(isRainbowColor("Brown"), false);
test(isRainbowColor("orange"), true);
test(isRainbowColor("Orange"), true);
test(isRainbowColor("skyblue"), false);
test(isRainbowColor("yellow"), true);
test(isRainbowColor("yeLlow"), true);
test(isRainbowColor("black"), false);
test(isRainbowColor("green"), true);
test(isRainbowColor("greeN"), true);
test(isRainbowColor("white"), false);
test(isRainbowColor("blue"), true);
test(isRainbowColor("bLue"), true);
test(isRainbowColor("oceanyellow"), false);
test(isRainbowColor("indigo"), true);
test(isRainbowColor("iNdigo"), true);
test(isRainbowColor("indigoblue"), false);
test(isRainbowColor("violet"), true);
test(isRainbowColor("violEt"), true);
test(isRainbowColor("clear"), false);

/* 中級演習 */
/* 1.関数 typeOfFriendly を宣言してください。 */
//JSDoc
/**
 * @param {any} argument - 確認する値
 * @returns {string} 与えられた引数のデータ型を表す分かりやすいメッセージ
 */
//func
function typeOfFriendly(argument) {
  if (typeof argument === "string") {
    return `与えられた引数は文字列です。`;
  } else if (typeof argument === "number") {
    return `与えられた引数は数値です。`;
  } else if (typeof argument === "null") {
    return `与えられた引数は空白ですが言語エラーでオブジェクトと判定されます。`;
  } else if (typeof argument === "undefined") {
    return `与えられた引数は未定義です。`;
  } else if (typeof argument === "boolean") {
    return `与えられた引数はブーリアンです。`;
  } else if (typeof argument === "object") {
    return `与えられた引数はオブジェクトです。`;
  }
}
//test
test(typeOfFriendly("Hello"), "与えられた引数は文字列です。");
test(typeOfFriendly(5), "与えられた引数は数値です。");
test(
  typeOfFriendly(null),
  "与えられた引数は空白ですが言語エラーでオブジェクトと判定されます。"
);
test(typeOfFriendly(undefined), "与えられた引数は未定義です。");
test(typeOfFriendly(false), "与えられた引数はブーリアンです。");
test(typeOfFriendly([1, 2, 3]), "与えられた引数はオブジェクトです。");
console.log(`-----------------------------`);

/* 2. 関数 compare を宣言してください。*/
//JSDoc
/**
 * @param {"=="|"==="|"<"|"<="|">"|">="} compareOperator - 使用したい比較演算子
 * @param {number} num1 - 1 番目の被演算子
 * @param {number} num2 - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
 */
//func
function compare(compareOperator, num1, num2) {
  if (compareOperator === "==") {
    return num1 == num2;
  } else if (compareOperator === "===") {
    return num1 === num2;
  } else if (compareOperator === "<") {
    return num1 < num2;
  } else if (compareOperator === "<=") {
    return num1 <= num2;
  } else if (compareOperator === ">") {
    return num1 > num2;
  } else if (compareOperator === ">=") {
    return num1 >= num2;
  }
}
//test
test(compare("===", 1, 1), true);
test(compare("===", 1, "1"), false);
test(compare("==", 1, "1"), true);
test(compare("<", 1, 0), false);
test(compare(">", 1, 0), true);
test(compare(">=", -6, -5), false);
test(compare(">=", -5, -5), true);
test(compare("<=", 8, 7), false);
test(compare("<=", 8, 8), true);
console.log(`-----------------------------`);

/* 応用演習 */
/* 1.関数 concatenateNumbers を宣言してください。
  デフォルト関数パラメータ：値が渡されなかったりundefinedが渡された場合に、初期値を設定しておくことが可能 */
//JSDoc
/**
 * @param {number} num1 - 1 番目の数値
 * @param {number} [num2] - 2 番目の数値 (任意)
 * @param {number} [num3] - 3 番目の数値 (任意)
 * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
 */
//func
function concatenateNumbers(num1, num2 = "", num3 = "") {
  if (num1 !== x() && num2 === x() && num3 === x()) {
    return num1 + "";
  } else if (num1 !== x() && num2 !== x() && num3 === x()) {
    return (num1 + "").concat(num2 + "");
  } else if (num1 !== x() && num2 !== x() && num3 !== x()) {
    return (num1 + "").concat(num2 + "", num3 + "");
  }
}
//func
function x() {
  return "undefined";
}
//test
test(concatenateNumbers(7), "7");
test(concatenateNumbers(7, 9), "79");
test(concatenateNumbers(7, 8, 9), "789");
test(concatenateNumbers(0, "", 0), "00");
test(concatenateNumbers("", "", 0), "0");
console.log(`-----------------------------`);

/* 2.関数 halfLife を宣言してください。 */
//JSDoc
/**
 * @param {number} firstNumber - 初めの数量
 * @param {number} halfLife - 半減期（数量が半分になるまでの時間）
 * @param {number} elapsedTime - 経過時間
 * @returns {number} 与えられた時間が経過したあとに残っている数量
 */
//func
function halfLife(firstNumber, halfLife, elapsedTime) {
  return firstNumber * (1 / 2) ** (elapsedTime / halfLife);
}
//test
test(halfLife(1, 1, 1), 1 / 2); //H-1
test(halfLife(8, 4, 2), 4 * Math.SQRT2); //O-8
test(halfLife(2, 2, 4), 1 / 2); //He-2
test(halfLife(92, 4500000000, 113880), 91.99838621964615); //U-92
console.log(`-----------------------------`);

/* 3.関数 invertCase を宣言してください。 */
//JSDoc
/**
 * @param {string} sentence - 文字列
 * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
 */
//func
function invertCase(sentence) {
  const arraySplitSyntax = [...sentence];
  const arrayReverseSyntax = [];
  for (let character of arraySplitSyntax) {
    if (character === character.toUpperCase()) {
      arrayReverseSyntax.push(character.toLowerCase());
    } else {
      arrayReverseSyntax.push(character.toUpperCase());
    }
  }
  return arrayReverseSyntax.join("");
}
// }
//test
test(invertCase("Have a nice day"), "hAVE A NICE DAY");
test(invertCase("My dog is 2 years old"), "mY DOG IS 2 YEARS OLD");
console.log(`-----------------------------`);

/* ナイトメア問題  😈*/
/* 1.関数 isPrime を宣言してください。 */
//JSDoc
/**
 * @param {number} primeNumber - 確認したい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */
//func
function isPrime(primeNumber) {
  if (primeNumber === 2 || primeNumber === 3) {
    return true;
  } else if (
    primeNumber === 1 ||
    primeNumber % 2 === 0 ||
    primeNumber % 3 === 0
  ) {
    return false;
  } else {
    return true;
  }
}

//test
test(isPrime(1), false);
test(isPrime(2), true);
test(isPrime(3), true);
test(isPrime(4), false);
test(isPrime(5), true);
test(isPrime(104728), false);
test(isPrime(104729), true);
test(isPrime(10), false);
test(isPrime(12), false);
test(isPrime(14), false);
test(isPrime(0), false);
test(isPrime(7), true);
test(isPrime(113), true);
