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
/* 変数入門 ウォーミングアップ*/
/* 1.JavaScript の演算子 typeof を使ってみましょう。この演算子に関する情報は、ここ で見つかります。
最初の問題は解答例を載せてあります。 */
const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

const variableNumber = 100; // "number"と表示させるにはどんな値を代入すればいいでしょう？
console.log(typeof variableNumber); // "number"と表示されましたか？

const variableBoolean = true;
console.log(typeof variableBoolean);

const variableUndefined = undefined;
console.log(typeof variableUndefined);

/* 2.2 つの number の平均を計算して変数に格納しましょう。 */
const numberA = 156;
const numberB = 498;

const average = (numberA + numberB) / 2;
console.log(average); // numberA と numberB の平均が表示される。

/* 関数入門 */
/* 基礎演習 */
/* 1.以下の 2 行を script.js ファイルに書き加えてみましょう。そして index.html ファイルをブラウザで開き、
コンソールを開いてみましょう。何が表示されますか？*/
5 + 6;
console.log(6 + 6);

/* Functions（関数） */
/* 1.以下の add 関数を使って、2 つの number の合計を計算しましょう。script.js ファイルに以下を入力してみてください。 */
function add(numOne, numTwo, numThree) {
  return numOne + numTwo + numThree;
}

// テスト
console.log(add(4, 3)); // => 7 を表示
console.log(add(100, 42)); // => 142 を表示

/* 2. 上記の関数に値を 1 つしか渡さないと何が起こるでしょう？ 逆に仮引数より多くの値を渡したら何が起こるでしょうか？*/
console.log(add(100)); // -> NaN
console.log(add(1, 4, 5)); // 5？
console.log(add(3, 5, 5, 100)); // 5？

/* 3.次のコードを見て、まず実行する前に何が起こるか、どうしてそうなるのかを考えてみましょう。考えがまとまったら、
実際に実行してみてください。コンソール上の出力結果の右端にどのファイルのどの行からの出力なのかが示されるので、
それをもとに予想とあっていたか確認しましょう。 */
function simpleFunctionA() {
  return "Hello simple function A";
}

function simpleFunctionB() {
  console.log("Hello simple function B");
}

console.log("simpleFunctionA: ", simpleFunctionA());
console.log("simpleFunctionB: ", simpleFunctionB());

/* 4. subtract という名前の関数を宣言しましょう。この関数は第 1 引数から第 2 引数を引き算する関数です。宣言ができたら、
関数が正しく動いているかどうかテストをしてください。*/
//func
/**
 *
 * @param {number} num1 数値型の引数を二つ取り
 * @param {number} num2
 * @returns {number} 第1引数から第2引数を引いた数値型の値を返す
 */
function subtract(num1, num2) {
  return num1 - num2;
}
//test
console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58
console.log(subtract(123, 123)); // -> 0
console.log(subtract(0, 789)); // -> -789
console.log(subtract(456, 0)); // -> 456
console.log(subtract(-4565, 456)); // -> -5021
console.log(subtract(-46.3, -456.8)); // -> 410.5

/* 5.greeting という名前の関数を宣言しましょう。文字列型（string） のデータを引数に渡し、矢印（=>）の右側に
ある挨拶文をコンソールに表示してください。 */
//func
/**
 * @param {string} name 文字列型の引数を1つ取り
 * @returns {string} 挨拶文にして文字列型を返す
 */
function greeting(name) {
  return `Hello, ${name}!`;
}

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Bob")); // => "Hello, Bob!"

/* 6.average2 という名前の関数を宣言しましょう。2 つの数値型のデータを引数に取り、それらの数値の平均を返します。
この関数に関しては、テストも自分で考えて書いてみましょう！ */
//func
/**
 *
 * @param {number} num1 数値型の引数を二つ取り
 * @param {number} num2
 * @returns {number}　二つの引数の平均を数値型で返す
 */
function average2(num1, num2) {
  return (num1 + num2) / 2;
}
console.log(average2(123, 123));
console.log(average2(-123, 456));
console.log(average2(798, -135));
console.log(average2(123.156, 4654.44));
console.log(average2(-456, -123));

/* 7.引数の二乗を返す関数を作りたいのですが、以下の宣言には誤りがあります。
何が間違っているのでしょうか。 */
//func
// function square(5) { //引数に直接数値が入っている
//   return 5 * 5;
// }
//func
// function square("x") {   //引数が文字列になっている
//   return "x" * "x";      //文字列動詞の乗算になっている
// }
//func
function Square(monkey) {
  //正方形の面積を求める関数に結び付かない引数名
  return monkey * monkey; //monkey改めarea
}

/* 8.cube という名前の関数を宣言しましょう。x の 3 乗を返してください。 */
//func
function cube(x) {
  return x ** 3;
}
//test
console.log(cube(2));
console.log(cube(10));
console.log(cube(10, 10));

/* 中級演習 */
/* 1.次のコードを実行したら何が表示されますか？なぜそうなるのでしょうか？ */
//func
function simpleHelloA() {
  console.log("hello"); //returnが無いからundefinedが返る
}
//func
function simpleHelloB() {
  return "hello";
}
//test
const a = simpleHelloA();
const b = simpleHelloB();
console.log(a, b); // -> (undefined,"hello")

/* 2.下の関数を 3 回呼び出し、それぞれの返り値を適切な変数に代入して、
最後の console.log の 3行でコメントと同じ表示が出るようにしてください。 */
//func
function createGreeting(phrase, friend) {
  return phrase + ", " + friend + "!";
}

//test
let morningGreeting;
let dayGreeting;
let eveningGreeting;

morningGreeting = createGreeting("Good morning", "Mike");
dayGreeting = createGreeting("Hello", "Bob");
eveningGreeting = createGreeting("Good evening", "Alex");

console.log(morningGreeting); // "Good morning, Mike!" を表示
console.log(dayGreeting); // "Hello, Bob!" を表示
console.log(eveningGreeting); // "Good evening, Alex!" を表示

/* 3.この PDF に記載されている公式の関数を作成しましょう。 */
/* square */
//func area
/**
 *
 * @param {number} area 正方形の一辺を示す数値型の引数を１つ取り
 * @returns 一辺を2乗した数値型の値を返す
 */
function areaOfSquare(area) {
  return area ** 2;
}
//test
test(areaOfSquare(2), 4);
test(areaOfSquare(10), 100);
test(areaOfSquare(2.4), 5.76);
//func peri
/**
 *
 * @param {number} sideOfSquare 正方形の一辺を示す数値型の引数を１つ取り
 * @returns {number} 一辺を4倍した数値型の値を返す
 */
function perimeterOfSquare(sideOfSquare) {
  return sideOfSquare * 4;
}
test(perimeterOfSquare(4), 16);
test(perimeterOfSquare(10), 40);
test(perimeterOfSquare(4.5), 18);
/* rectangle */
//func area
/**
 *
 * @param {number} sideOfRectangle1      長辺、短辺を示す数値型の引数を二つ取り
 * @param {number} sideOfRectangle2
 * @returns {number}                     長辺と短辺を乗算した数値型の値を返す
 */
function areaOfRectangle(sideOfRectangle1, sideOfRectangle2) {
  return sideOfRectangle1 * sideOfRectangle2;
}
//test
test(areaOfRectangle(2, 4), 8);
test(areaOfRectangle(10, 50), 500);
test(areaOfRectangle(2.4, 4.2), 10.08);
//func peri
/**
 *
 * @param {number} area1  短辺と長辺からなる数値型の引数を二つ取り
 * @param {number} area2
 * @returns {number}      それらを各々2倍して合計した数値型の値を返す
 */
function perimeterOfRectangl(area1, area2) {
  return ((area1 * 10 + area2 * 10) * 2) / 10;
}
//test
test(perimeterOfRectangl(3, 8), 22);
test(perimeterOfRectangl(10, 30), 80);
test(perimeterOfRectangl(3.8, 8.3), 24.2);
/* Paralleogram */
//func area
/**
 *
 * @param {number} base     底辺と高さからなる数値型の引数を二つ取り
 * @param {number} height
 * @returns {number}        それらを乗算した数値型の値を返す
 */
function areaOfParalleogram(base, height) {
  return (base * 10 * (height * 10)) / 100;
}
//test
test(areaOfParalleogram(3, 8), 24);
test(areaOfParalleogram(33, 88), 2904);
test(areaOfParalleogram(3.8, 8.3), 31.54);
//func peri
/**
 *
 * @param {number} area1  短辺と長辺からなる数値型の引数を二つ取り
 * @param {number} area2
 * @returns {number}      それらを各々2倍して合計した数値型の値を返す
 */
function perimeterOfParalleogram(area1, area2) {
  return ((area1 * 10 + area2 * 10) * 2) / 10;
}
//test
test(perimeterOfParalleogram(3, 38), 82);
test(perimeterOfParalleogram(13, 83), 192);
test(perimeterOfParalleogram(8.3, 38.3), 93.2);
/* Trapezoid */
//func area
/**
 *
 * @param {number} base1    上辺、下辺、高さからなる数値型の引数を3個取り
 * @param {number} base2
 * @param {number} height
 * @returns {number}        base1,base2を加算したものに高さを乗算し、それを2で除算した数値型の引数を返す
 */
function areaOfTrapezoid(base1, base2, height) {
  return ((base1 + base2) * height) / 2;
}
//test
test(areaOfTrapezoid(3, 8, 38), 209);
test(areaOfTrapezoid(38, 83, 100), 6050);
test(areaOfTrapezoid(3.8, 8.3, 10.2), 61.71);
//func peri
/**
 *
 * @param {number} base1    上辺、下辺、左辺、右辺からなる数値型の引数を4個取り
 * @param {number} base2
 * @param {number} side1
 * @param {number} side2
 * @returns {number}        それぞれを加算した数値型の値を返す
 */
function perimterOfTranpezoid(base1, base2, side1, side2) {
  return base1 + base2 + side1 + side2;
}
test(perimterOfTranpezoid(1, 2, 3, 4), 10);
test(perimterOfTranpezoid(14, 23, 32, 41), 110);
test(perimterOfTranpezoid(1.3, 2.3, 3.3, 4.3), 11.2);
/* Triangle */
//func area
/**
 *
 * @param {number} base     底辺と高さからなる数値型の引数を二つ取り
 * @param {number} height
 * @returns {number}        第一引数と第二引数を乗算し、2で除算した三角形の面積を表す数値型の値を返す
 */
function areaOfTraiangle(base, height) {
  return (base * 10 * (height * 10)) / 2 / 100;
}
//test
test(areaOfTraiangle(3, 8), 12);
test(areaOfTraiangle(38, 83), 1577);
test(areaOfTraiangle(3.8, 8.3), 15.77);
//func peri
/**
 *
 * @param {number} base     三辺を表す数値型の引数を三つ取り
 * @param {number} side1
 * @param {number} side2
 * @returns {number}        合計した三角形の外周を表す数値型の値を返す
 */
function perimeterOfTriangle(base, side1, side2) {
  return (base * 10 + side1 * 10 + side2 * 10) / 10;
}
//test
test(perimeterOfTriangle(3, 8, 8), 19);
test(perimeterOfTriangle(38, 83, 88), 209);
test(perimeterOfTriangle(3.8, 8.3, 8.8), 20.9);
/* Circle */
//func area
/**
 *
 * @param {number} radius   半径を表す数値型の引数を1つ取り
 * @returns {number}        引数を2乗し、円周率を乗算した数値型の値を返す
 */
function areaOfCircle(radius) {
  return Math.floor(radius ** 2 * Math.PI * 10000) / 10000;
}
//test
test(areaOfCircle(3), 28.2743);
test(areaOfCircle(83), 21642.4317);
test(areaOfCircle(3.8), 45.3645);
//func perimeter
/**
 *
 * @param {number} radius   半径を表す数値型の引数を1つ取り
 * @returns {number}        円周率の2倍に引数を乗算した数値型の値を返す
 */
function perimeterOfCircle(radius) {
  return (2 * (3.14 * 100) * radius) / 100;
}
//test
test(perimeterOfCircle(3), 18.84);
test(perimeterOfCircle(38), 238.64);
test(perimeterOfCircle(3.8), 23.864);

/* 応用演習 */
/* 1. functions-intro フォルダに advanced.js という名前のファイルを作成しましょう。
script.js と advanced.js の両方が使えるように functions-intro フォルダの index.html を
修正してください。そして、新しく作成したファイルに次のコードを追加します。コンソールには
どのように表示されますか？ (もし script.js に作った simpleFunctionA の定義をコメントアウト
していた場合はコメントアウトを外しておいてください。)
アドバイス： index.html のコードを見てください。2 つの JavaScript ファイルはどうやって
つながっているのでしょう？*/

/* HTMLScriptElement:src property */
/* HTMLのscript要素のコンテンツ属性であるsrc属性を反映します */
/* コンソールには"advanced.js から simpleFunctionA を呼び出しています。:  Hello simple 
function A"と表示される。
これは同じHTML上でscript要素のsrc属性によってscript.jsとadvanced.jsが展開されて実行され
るため。しかし、advancedを先に実行した場合は返り値のための関数があるscriptは実行されていない
ため simpleFunctionA is not defined となるので実行順序に注意が必要*/

/* 2.下記に guessMyNumber と randomNumber というコードがあります。これらのコードを読んで、
コンソールで関数のテストを行いましょう。guess は推測するという意味です。 */
//func
/**
 *
 * @param {number} n  ランダムな数値型の値の引数を1つ取り
 * @returns           分岐結果として文字列を返す
 */
function guessMyNumber(n) {
  if (n > upperBound()) {
    return console.log(`0～${upperBound()} の間の数字を入力してください。`);
  } else if (n === upperBound()) {
    return console.log(`${n}!当たりです！`);
  }
  return console.log(
    `${n}ですか...残念！はずれです。正解は${upperBound()}でした！`
  );
}
//func
/**
 *
 * @param {number} n    数値型の引数を1つ取り
 * @returns {number}    引き数に1を加算し、0～１までの不動小数点の疑似乱数を乗算した数値型の値を返す
 */
function randomNumber(n) {
  console.log(Math.floor(Math.random() * (n + 1)));
  return Math.floor(Math.random() * (n + 1));
}
//test
guessMyNumber(5);

/* 3.上限を入れる変数 upperBound を宣言し、5 という数字の代わりにその変数を使うように修正し
てください。こうすれば、上限をほかの数値（たとえば 7 ）に変更する場合、この変数を変更するだけ、
つまり 1 ヶ所の変更だけで済みます。 */
//func
/**
 *
 * @param {number} upperLimit 引数を取らず
 * @returns {number}          guessMyNumber関数の引数として数値型の値を返す
 */
function upperBound() {
  return 9;
}

/* 4. guessMyNumberに渡した数値が間違っていた場合は、正しい答えと一緒にメッセージが出力される
ようにguessMyNumber を編集しましょう。例: "残念！正解は x でした。" （xに正解が入る。）*/
