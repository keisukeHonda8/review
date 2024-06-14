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
/* 変数入門 */
/* 中級演習 */
/* 1.変数 circleCircumference と circleArea を宣言して、円の円周と面積を計算した値を代入し出力してみましょう。
あなたが予想した答えとは若干異なるかもしれませんが、心配しないでください。
結果が予想した値とほぼ同じであれば正解です。 */
const circleDiameter = 10;
let circleCircumference = 2 * 3.14 * (circleDiameter / 2); // -> 31.400000000000002
let circleArea = 3.14 * (circleDiameter / 2) ** 2; // -> 78.5

console.log(circleCircumference); // "31.41592653589793" に近い値を表示
console.log(circleArea); // "78.53981633974483" に近い値を表示

/* 2.直接、値を再代入せずに a と b の値を入れ替えて期待通りの値が出力されるようにしましょう。
アドバイス： データを一時的に保存するために別の変数を作成する必要があります。 */
let a = "B";
let b = "A";
let c = a;
let d = b;
a = d;
b = c;

console.log(a); // "A" を表示
console.log(b); // "B" を表示

/* 3.指数関数的成長 (Exponential growth) を実装してみましょう。変数 の値を変更して、2 のべき乗を求めましょう。 */
let value = 1;

console.log(value); // "1" を表示

value = ++value;

console.log(value); // "2" を表示

value = value * 2;

console.log(value); // "4" を表示

value = value * 2;

console.log(value); // "8" を表示

value = value * 2;

console.log(value); // "16" を表示

value = value * 2;

console.log(value); // "32" を表示

value = value * 2;

console.log(value); // "64" を表示

/* 4.文字列結合に挑戦しましょう。"???"の部分を書き換えて様々な変数を連結し、期待している結果を表示してください。 */
const firstName = "Keisuke";
const lastName = "Honda";
const city = "Aichi";
// "Hello, my name is Yan Fan. I live in Tokyo." を表示
console.log(`Hello, my name is ${firstName} ${lastName}. I live in ${city}.`);

/* 応用演習 */
/* 1.counter という関数を宣言します。これが呼び出されたら、常に前回呼び出された時よりも 1 つ大きい数値を console.log
 で表示しましょう。 */
// アドバイス： ここで何かする必要があるかもしれません
/**
 * @param {} 引数を取らない
 * @returns {number} 前回呼び出された時よりも1つ大きい数値を返す
 */

let result = 0;
function counter() {
  result = result + 1;
  return console.log(result);
}

counter(); // => 1
counter(); // => 2
counter(); // => 3
// etc.

/* 2. isOdd という関数を宣言します。これが呼び出されたら、与えられた数値が奇数かどうかを console.log で表示しましょう。*/
/**
 *
 * @param {number} givenNumber 数値型の引数を1つ取り
 * @returns {string} 奇数か偶数かを表す文字列を1つ返す
 */
function isOdd(givenNumber) {
  if (givenNumber % 2 === 1) {
    console.log(`Yes, It's odd`);
  } else {
    console.log(`No, It's even`);
  }
}
// 与えられた数値によって、"Yes, it's odd" もしくは "No, it's even" を表示
isOdd(1);
isOdd(10);
isOdd(111);
isOdd(1000);
isOdd(11111);
