"use strict";

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
var table = prompt("which table do you want");
var length = prompt("how much length do you want");
document.write("<h6>", "Table of ".concat(table), "</h6>");
document.write("<h6>", "length  ".concat(length), "</h6>");

for (var i = 1; i <= length; i++) {
  //   table[i] = [];
  document.write("".concat(table, " x ").concat(i, " = ").concat(table * i), "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("".concat(fruits, " <br>"));

for (var _i = 0; _i < fruits.length; _i++) {
  document.write("element at index ".concat(_i, " is ").concat(fruits[_i], " <br>"));
}

document.write("<h4> counting </h4>");

for (var _i2 = 1; _i2 <= 10; _i2++) {
  document.write("".concat(_i2, ", "));
}

document.write("<h4> Reverse Counting </h4>");

for (var _i3 = 10; _i3 >= 1; _i3--) {
  document.write("".concat(_i3, ", "));
}

document.write("<h4> Even </h4>");

for (var _i4 = 1; _i4 <= 20; _i4++) {
  if (_i4 % 2 == 0) {
    document.write("".concat(_i4, ", "));
  }
}

document.write("<h4> Odd </h4>");

for (var _i5 = 1; _i5 <= 20; _i5++) {
  if (_i5 % 2 != 0) {
    document.write("".concat(_i5, ", "));
  }
}

document.write("<h4> Series </h4>");

for (var _i6 = 1; _i6 <= 20; _i6++) {
  if (_i6 % 2 == 0) {
    document.write("".concat(_i6, "k, "));
  }
}

document.write("<br>");
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

for (var _i7 = 0; _i7 < arr.length; _i7++) {
  var search = prompt("search");

  if (arr[_i7] == search) {
    document.write("".concat(arr[_i7], " is available at index ").concat(_i7, " <br>"));
    break;
  } else {
    document.write("".concat(arr[_i7], " is not available <br>"));
  }
}

var message = [24, 53, 78, 91, 12];
var highest = 0;

for (var _i8 = 0; _i8 < message.length; _i8++) {
  if (message[_i8] > highest) {
    highest = message[_i8];
  }
}

document.write("the largest number is ", highest, "<br>");
var message2 = [24, 53, 78, 91, 12];
var lowest = "";

for (var _i9 = 0; _i9 < message.length; _i9++) {
  if (message2[_i9] != lowest) {
    lowest = message2[_i9];
  }
}

document.write("the lowest number is ", lowest, "<br>");

for (var _i10 = 1; _i10 <= 20; _i10++) {
  document.write("".concat(5 * _i10, ", ")); //   `${5 * i},`;
}