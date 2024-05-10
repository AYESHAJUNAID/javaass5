// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

var table = prompt("which table do you want");
var length = prompt("how much length do you want");
document.write("<h6>", `Table of ${table}`, "</h6>");
document.write("<h6>", `length  ${length}`, "</h6>");

for (let i = 1; i <= length; i++) {
  //   table[i] = [];
  document.write(`${table} x ${i} = ${table * i}`, "<br>");
}
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(`${fruits} <br>`);

for (let i = 0; i < fruits.length; i++) {
  document.write(`element at index ${i} is ${fruits[i]} <br>`);
}
document.write("<h4> counting </h4>");
for (let i = 1; i <= 10; i++) {
  document.write(`${i}, `);
}

document.write("<h4> Reverse Counting </h4>");
for (let i = 10; i >= 1; i--) {
  document.write(`${i}, `);
}

document.write("<h4> Even </h4>");
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(`${i}, `);
  }
}

document.write("<h4> Odd </h4>");

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(`${i}, `);
  }
}

document.write("<h4> Series </h4>");
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(`${i}k, `);
  }
}
document.write("<br>");

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
for (let i = 0; i < arr.length; i++) {
  var search = prompt("search");
  if (arr[i] == search) {
    document.write(`${arr[i]} is available at index ${i} <br>`);
    break;
  } else {
    document.write(`${arr[i]} is not available <br>`);
  }
}

var message = [24, 53, 78, 91, 12];
var highest = 0;

for (let i = 0; i < message.length; i++) {
  if (message[i] > highest) {
    highest = message[i];
  }
}
document.write("the largest number is ", highest, "<br>");

var message2 = [24, 53, 78, 91, 12];
let lowest = "";

for (let i = 0; i < message.length; i++) {
  if (message2[i] != lowest) {
    lowest = message2[i];
  }
}
document.write("the lowest number is ", lowest, "<br>");

for (let i = 1; i <= 20; i++) {
  document.write(`${5 * i}, `);
  //   `${5 * i},`;
}
