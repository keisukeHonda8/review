"use strict";
// 1行目に記載している 'use strict' は削除しないでください

// TEST-code
// test(sumArray([1, 2, 3, 4]),10);

// JSON-block
/**
 * @param {Array<number>} arrNums 数値型の要素を持つ配列
 * @returns {number} sumResalt 与えられた配列のすべての数字の合計
 */

/* from here */
/* 関数入門 ウォーミングアップ */
/* 1.greeting という名前の関数を作成し、引数に文字列型の値を 1 つ渡しましょう。
渡された名前を使って挨拶文を返してください。テストも試してみましょう。 */
//func
/**
 *
 * @param {string} name     名前を指す文字列型の引数を1つ取り
 * @returns {string}        "Hell, 引数!"の形で文字列を返す
 */
function greeting(name) {
  return `Hello, ${name}!`;
}
//test
console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

/* 2. average という名前の関数を宣言してください。この関数は引数として
数値型の値を 2 つ取り、その 2 つの数の平均を返します。テストを書くのを忘れずに！*/
//func
/**
 *
 * @param {number} num1     数値型の引数を二つ取り
 * @param {number} num2
 * @returns {number}        第一、第二引数の平均を数値型の値で返す
 */
function average(num1, num2) {
  return (num1 * 10 + num2 * 10) / 2 / 10;
}
//test
test(average(3, 8), 5.5);
test(average(38, 88), 63);
test(average(3.8, 8.3), 6.05);

/* 比較入門 */
/* 基礎演習 */
/* 6. 日本では 20 歳以上になるとお酒を飲めるようになります。script.js に 数値 型の
引数を 1 つ取り、与えられた年齢がお酒を飲める年齢かどうかを boolean 型の値で返す
isOfAge という関数を宣言しましょう。*/
//func
/**
 *
 * @param {number} age      年齢を指す数値型の引数を1つ取り
 * @returns {boorean}       お酒を飲める年齢（20歳以上）かどうかをboolean型の値で返す
 */
// function isOfAge(age) {
//   return 20 <= age;
// }
// //test
// test(isOfAge(18), false);
// test(isOfAge(23), true);
// test(isOfAge(20), true);

/* 中級演習 */
/* 1.先ほど作成した関数 isOfAge が「boolean 型の値を返す動きに加えて、飲酒可能年齢なのか
どうかを表す文字列をコンソールに表示する関数」になるよう修正しましょう。 */
//func
/**
 *
 * @param {number} age          年齢を指す数値型の引数を1つ取り
 * @returns {boorean,string}    お酒を飲める年齢（20歳以上）かどうかをboolean型の値で返す
 *                              加えて飲酒可能がどうかの文字列を返す
 */
function isOfAge(age) {
  if (20 <= age) {
    return console.log(`${age}歳か...酒飲んで良し！`);
  } else {
    return console.log(`${age}歳...出直してこい小僧！`);
  }
}
//test
isOfAge(18);
isOfAge(23);
isOfAge(20);

/* 2. 引数に数字 n をとる isEven という名前の関数を作成しましょう。引数が偶数であれば true を、
そうでなければ false を返してください。*/
//func
/**
 *
 * @param {number} num      数値型の引数を1つ取り
 * @returns {boolean}       引数が偶数なら true を、奇数なら false を返す
 */
// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// //test
// test(isEven(3), false);
// test(isEven(8), true);
// test(isEven(0), true);

/* 3. 2 つの引数 username と password をとる validCredentials という名前の関数を作成しましょう。
両方の引数が十分な長さであれば true を、そうでなければ false を返してください。「十分な長さ」は自由に決めてください。*/
//func
/**
 *
 * @param {string} username     名前とパスワードからなる文字列型の引数を二つ取り
 * @param {string} password
 * @returns {boolean}           両方の引数のlengthが十分な長さであればtrue,そうでなければfalseを返す
 */
function validCredentials(username, password) {
  if (username.length > nameSetValue()) {
    console.log(`username: ${username.length} > ${nameSetValue()}`);
    if (password.length > passSetValue()) {
      console.log(`password: ${password.length} > ${passSetValue()}`);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
//func
function nameSetValue() {
  return 11;
}
//func
function passSetValue() {
  return 6;
}
//test
test(validCredentials("KeisukeHonda", "1311079"), true);
test(validCredentials("KeisukeHonda", "1"), false);
test(validCredentials("kei", "1311079"), false);

/* 応用演習 */
/* 1.％ 演算子を使用しないで isEven 関数を書き換えてください。 */
// func
/**
 *
 * @param {number} num      数値型の引数を1つ取り
 * @returns {boolean}       引数が偶数なら true を、奇数なら false を返す
 */
function isEven(num) {
  if ((num & 1) === 0) {
    return true;
  } else {
    return false;
  }
}
//test
test(isEven(3), false);
test(isEven(8), true);
test(isEven(0), true);

/* 2. 2つの引数のうち大きい数字を返す getGreaterValue という名前の関数を作成してください。*/
//func
/**
 *
 * @param {number} num1   比較用に数値型の引数を二つ取る
 * @param {number} num2
 * @returns {number}      第一、第二引数のうち、大きい方の数値型の値を返す
 */
function getGreaterValue(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
//test
console.log(getGreaterValue(10, 18)); // 15 を表示
console.log(getGreaterValue(18, 10)); // 15 を表示
console.log("-----------------------------");

/* 3. 与えられた引数のうち一番大きい数字を返すgetGreatestValue という名前の関数を作成して
ください。*/
//func
/**
 *
 * @param {*}     引数を取らずに
 * @returns       一番大きい数字を返す
 */
//★restParameterを使用
// function getGreatestValue(...args) {
//   return Math.max(...args);
// }
//★The argument objectを使用
// function getGreatestValue() {
//   return Math.max(...arguments);
// }
//★配列リテラルを仕様
function getGreatestValue() {
  let args = [].slice.call(arguments);
  return Math.max(...args);
}
//test
console.log(getGreatestValue(10, 15)); // 15 を表示
console.log(getGreatestValue(15, 10)); // 15 を表示
console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示
console.log("-----------------------------");

/* ナイトメア問題 */
/* 1.flatten という名前の関数を作成しましょう。引数に、入れ子になった配列を与えると、
全部の要素を入れ子のない一つの配列に入れて返すようにしてください。
もともと JavaScript に組み込まれている Array.prototype.flatというメソッドを使っては
いけません。 */
//func
/**
 *
 * @returns   引数を取らずに、入れ後になった配列を1つの配列にして返す
 */
function flatten() {
  //sliceでは浅い　shiftによる削除時にobjectが開かれる　スプレッド構文最高
  const nested = [].shift.call(arguments);
  const flat = [].concat(...nested);
  return flat;
}
//test
console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [1, 2, 3, 4, 5, 6]
console.log("-----------------------------");
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log("-----------------------------");
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log("-----------------------------");
