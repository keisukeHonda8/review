"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// TEST-code
// test(sumArray([1, 2, 3, 4]),10);

// jb
/**
 * @param {Array<number>} arrNums 数値型の要素を持つ配列
 * @returns {number} sumResalt 与えられた配列のすべての数字の合計
 */

/* from here */
/* 比較入門 ウォーミングアップ */
/* 1.isMultipleOfThree という名前の関数を宣言しましょう。引数の数字が 3 
の倍数であれば true、そうでなければ false を返してください。 */
//jb
/**
 *
 * @param {number} num      数値型の引数を１つ取り
 * @returns {boolean}        ３の倍数ならtrue、そうでなければfalseのbooleanを返す
 */
//func
function isMultipleOfThree(num) {
  if (num % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
//test
console.log(isMultipleOfThree(6)); // => true
console.log(isMultipleOfThree(10)); // => false

/* 2. isMultipleOf という名前の関数を宣言しましょう。1 つ目の引数が 2 つ目の引数の
倍数であれば true 、そうでなければ false を返してください。*/
//jb
/**
 *
 * @param {number} num1     数値型の引数を二つ取り
 * @param {number} num2
 * @returns {boolean}       第一引数が第二引数の倍数であればtrue、そうでなければfalseのbooleanを返す
 */
//func
function isMultipleOf(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}

//test
console.log(isMultipleOf(6, 3)); // => true
console.log(isMultipleOf(10, 4)); // => false

/* 条件分岐入門 */
/* 基礎演習 */
/* 1.次のコードには誤りがあります。用意されているテストコードを実行したとき、期待された値が表示されるように
修正してください。 */
//jb
/**
 *
 * @param {string} password         パスワードにあたる文字列型の引数を１つ取り
 * @returns {string}                合っていれば"パスワードが合いました。ようこそ！"、そうでなければ"パスワードが違います。もう一度入力してください。";の文字列を返す
 */
//func
function simplePasswordLock(password) {
  if (password === "password") {
    return "パスワードが合いました。ようこそ！";
  }
  return "パスワードが違います。もう一度入力してください。";
}
//test
// => "パスワードが違います。もう一度入力してください。" と表示されるようにする。
console.log(simplePasswordLock("qwerty"));
// => "パスワードが合いました。ようこそ！" と表示されるようにする。
console.log(simplePasswordLock("password"));

/* 2. .length を覚えていますか？　.length プロパティを使うと、文字列の長さを簡単に知ることができます。
以下のコードは何を表示するでしょうか？　コードを実行して確かめてみましょう！ */
console.log("Hello".length); // => 5
console.log("The length of this string is 31".length); // => 31
console.log(" spaces! ".length); // => 9

/* 3. isItTooLong という名前の関数を宣言しましょう。この関数は文字列型の引数を 1 つ取ります。
引数の文字列の長さが 10 より大きかったら true を返し、10 以下であれば false を返すように実装してください。
実装には .length を使いましょう。テストケースもいくつか書いてみましょう。*/
//jb
/**
 *
 * @param {string} stringTen        文字列型の引数を１つ取り
 * @returns {boolean}               引数の長さが10よりおおきかったらtrue、10以下であればfalseのbooleanを返す
 */
//func
function isItTooLong(stringTen) {
  if (stringTen.length > 10) {
    console.log("10 <", stringTen.length);
    return true;
  } else if (stringTen.length <= 10) {
    console.log("10 =>", stringTen.length);
    return false;
  }
}
//test
test(isItTooLong("Kesieuke.Honda"), true);
test(isItTooLong("Honda!"), false);
test(isItTooLong("Honda-desu"), false);

/* 4. 受け取った 2 つの引数から、どちらの引数が大きいかを表示する関数 biggerNumber を宣言してください。この関数は
第 1 引数の方が大きい場合は The first argument is bigger. 、 
第 2 引数の方が大きい場合は The second argument is bigger. とコンソールに表示します。
ボーナス問題： 2 つの数字が同じだったら関数はどうすればいいと思いますか？ その場合のテストケースも書き加えて、
自分のコードを編集してみましょう。
*/
//jb
/**
 *
 * @param {number} num1     数値型の引数を二つ取り
 * @param {number} num2
 * @log                     第一引数＞のときは The first argumnet is bigger.
 *                          第二引数＞のときは The second argumnet is bigger.とコンソールに表示
 */
//func
function biggerNumber(num1, num2) {
  if (num1 > num2) {
    console.log("The first argumnet is bigger.");
  } else if (num1 < num2) {
    console.log("The second argumnet is bigger.");
  } else if (num1 === num2) {
    console.log("The two numbers are identical.");
  }
}
//test
biggerNumber(3, 8); // -> "The second argumnet is bigger."
biggerNumber(8, 3); // -> "The first argumnet is bigger."
biggerNumber(0, -3); // -> "The first argumnet is bigger."
biggerNumber(0, 0); // -> "The two numbers are identical."
console.log("-----------------------------");

/* 5. printDataType という名前の関数を宣言してください。この関数は引数を 1 つ取り、引数のデータ型を返します。
JavaScript の演算子 typeof を使って解きましょう。*/
//jb
/**
 *
 * @param {any} data  複数のデータ型の引数を1つ取り
 * @log               引数のデータ型をコンソールに表示
 */
//func
function printDataType(data) {
  if (typeof data === "number") {
    console.log("This is a number.");
  } else if (typeof data === "string") {
    console.log("This is a string.");
  } else if (typeof data === "boolean") {
    console.log("This is a boolean.");
  } else if (typeof data === "undefined") {
    console.log("This is not a string, boolean, or number.");
  }
}
//test
printDataType(42); // => "This is a number."
printDataType("Hello!"); // => "This is a string."
printDataType(true); // => "This is a boolean."
printDataType(undefined); // => "This is not a string, boolean, or number."
console.log("-----------------------------");

/* 6. greeting という関数を作りましょう。この関数は文字列型の 2 つの引数を取ります。
第 1 引数で渡された名前に対して、第 2 引数で渡された言語で挨拶を返す関数を実装してください。*/
//jb
/**
 *
 * @param {string} name         名前と言語に当たる文字列型の引数を二つ取り
 * @param {string} language
 * @returns {string}            該当する言語で名前と組み合わせて挨拶を文字列で返す
 */
//func
function greeting(name, language) {
  if (language === "Japanese") {
    return `Konnichiwa, ${name}!`;
  } else if (language === "English") {
    return `Hello, ${name}!`;
  } else if (language === "German") {
    return `Gutentag, ${name}!`;
  } else if (language === "Spanish") {
    return `Hola, ${name}!`;
  }
}
//test
console.log(greeting("Harry Potter", "Japanese")); // => "Konnichiwa, Harry Potter!"
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"
console.log("-----------------------------");

/* 7. isEven という関数を作りましょう。与えられた数字が偶数のときに true を返し、そうでない時は false を返します。
アドバイス： remainder operator（剰余を求める演算子） (%)を使いましょう。
ボーナス問題： 引数が数値ではないときに "This is not a number." と返すよう条件分岐を付け加えましょう。*/
//jb
/**
 *
 * @param {number} num      数値型の引数を1つ取り
 * @returns {boolean}       偶数ならtrue、そうでない時はfalseを返す
 */
//func
function isEven(num) {
  if (typeof num !== "number") {
    return `This is not a number.`;
  } else if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
//test
console.log(isEven(4)); // => true
console.log(isEven(7)); // => false
console.log(isEven("7")); // => This is not a number.
console.log(isEven(true)); // => This is not a number.
console.log(isEven(undefined)); // => This is not a number.
console.log("-----------------------------");

/* 中級演習 */
/* 1.isOdd: 引数が奇数だったら true を返し、奇数でなければ false を返します。*/
//jb
/**
 *
 * @param {number} num      数値型の引数を1つ取り
 * @returns {boolean}       引数が奇数だったらtrue、奇数でなければfalseを返す
 */
//func
function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
//test
test(isOdd(3), true);
test(isOdd(8), false);
test(isOdd(0), false);

/* 2. isPositive: 引数が正の数だったら true を返し、正の数でなければ false を返します。*/
//jb
/**
 *
 * @param {number} num      数値型の引数を1つ取り
 * @returns {boolean}       引数が正の数ならtrue、正の数でなければfalseを返す
 */
//func
function isPositive(num) {
  if (num >= 0) {
    return true;
  } else if (num < 0) {
    return false;
  }
}
//test
test(isPositive(0), true);
test(isPositive(3), true);
test(isPositive(-8), false);

/* 3. isNegative: 引数が負の数だったら true を返し、負の数でなければ false を返します。*/
//jb
/**
 *
 * @param {number} num    数値型の引数を1つ取り
 * @returns {boolean}     引数が負の数だったらtrue、負の数でなければfalseを返す
 */
//func
function isNegative(num) {
  if (num < 0) {
    return true;
  } else if (num >= 0) {
    return false;
  }
}
//test
test(isNegative(0), false);
test(isNegative(3), false);
test(isNegative(-8), true);

/* 4. isZero: 引数が 0 だったら true を返し、 0 でなければ false を返します。*/
//jb
/**
 *
 * @param {number} num      数値型の引数を1つ取り
 * @returns {boolean}       引数が0ならtrue、0でなければfalseを返す
 */
//func
function isZero(num) {
  if (num === 0) {
    return true;
  } else {
    return false;
  }
}
//test
test(isZero(3), false);
test(isZero(-8), false);
test(isZero(0), true);

/* ojb1. randomNumber: この関数は数値型のデータ number を引数として取り、0 以上 number（引数の数字） 未満の
ランダムな値を返します。
Math.random()静的メソッド:0以上1未満の浮動小数点数の擬似乱数を返します。*/
//jb
/**
 *
 * @param {number} number     数値型の引数1つ取り
 * @returns {number}          0以上 引数未満 のランダムな値を返す
 */
//func
function randomNumber(number) {
  return Math.random() * number;
}
//test
console.log(randomNumber(3));
console.log(randomNumber(8));
console.log(randomNumber(-1));
console.log("-----------------------------");

/* obj2. guessMyNumber: この関数は数値型のデータ number を引数として取り、引数で与えられた数字と 0 以上 5 以下の
間のランダムな整数を比較します。比較した結果一致すれば "YES!" を、一致しなければ "NO!" を返します。
Math.floor()静的メソッド:常に切り捨て、与えられた数以下の最大の整数を返す。
Math.ceil()静的メソッド:常に切り上げ、指定された値以上の最小の整数を返す*/
//jb
/**
 *
 * @param {number} number     数値型の引数を1つ取り
 * @returns {string}          引数と0以上5以下の間の整数を比較し、一致すればYES!、一致しなければNO!を返す
 */
//func
function guessMyNumber(number) {
  let value = Math.floor(Math.random() * number + 1);
  if (number === value) {
    return `${number} = ${value}: YES!`;
  } else {
    return `${number} ≠ ${value}: NO!`;
  }
}
//test
console.log(guessMyNumber(3));
console.log(guessMyNumber(8));
console.log(guessMyNumber(0));
console.log(`-----------------------------`);

/* 応用演習 */
/* 1. randomStopLight という名前の関数を宣言してください。この関数が呼び出されたら 0 以上 10 以下のランダムな整数を
生成します。生成された数字が 3 未満であれば "🔴Red" を、3 以上 6 以下であれば "🟡Yellow" を、6 より大きければ
 "🟢Green"を返すようにしてください。*/
//jb
/**
 *
 * @param {empty}           引数を取らず
 * @returns {string}        0<=,>=10のランダムな"整数"を生成し、3<なら"Red"、3<=,6<なら"Yellow"、6<なら"Green"を返す
 */
//func
function randomStopLight() {
  let value = Math.floor(Math.random() * 11);
  if (value < 3) {
    return `【${value}】< 3：🔴Red`;
  } else if (3 <= value && value <= 6) {
    return `3 <=【${value}】<= 6：🟡Yellow `;
  } else if (value > 6) {
    return `【${value}】> 6：🟢Green`;
  }
}
//test
console.log(randomStopLight());
console.log(`-----------------------------`);
