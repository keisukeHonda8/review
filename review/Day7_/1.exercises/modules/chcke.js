"use strict";
// 1行目に記載している 'use strict' は削除しないでください
//func
function checkNumber(argument) {
  if (typeof argument !== "number") {
    return true;
  } else {
    return false;
  }
}
//func
function checkString(argument) {
  if (typeof argument !== "string") {
    return true;
  } else {
    return false;
  }
}
//func
function checkBoolean(argument) {
  if (typeof argument !== "boolean") {
    return true;
  } else {
    return false;
  }
}
//func
function checkRange(argument) {
  if (argument > 100 || 0 > argument) {
    return true;
  } else {
    return false;
  }
}
//func
function checkEmpty(argument) {
  if (argument !== "") {
    return true;
  } else {
    return false;
  }
}
