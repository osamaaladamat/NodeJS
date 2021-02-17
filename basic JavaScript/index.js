//Importing hhtp module
const http = require("http");
//write a variable without initial value
let variable;
//write a variable with initial value
let variable2 = "mrmr";
//write 3 variables in same line without initial value
let var3, var4, var5;
//write 3 variables in same line with initial value
let var6 = "six",
  var7 = "seven",
  var8 = "eight";
//write 3 variables with Boolean value
let var9 = true,
  var10 = false,
  var11 = true;
//write a constant
const var12 = "var 12";
//write an empty array without initializing its size
let arr = [];
//write an array of number from 1 to 10
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//write an array of strings has letters from A to J
let arr3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
//Write an Object has at least 3 attributes (keys) and give each one a numeric value
let obj = { key1: 1, key2: 2, key3: 3 };
//write an object has at least 3 attributes (keys) and give each one a string value
let obj2 = { key1: "1", key2: "2", key3: "3" };
//write an object has at least 3 attributes (keys) and give each one a Boolean value
let obj3 = { key1: true, key2: false, key3: true };
//write an object has at least 3 attributes (keys) and give each one an array value
let obj5 = {
  key1: ["jacob", "firas"],
  key2: ["lojain", "maria"],
  key3: ["adam", "bass"],
};
//write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
let obj55 = {
  OBJ: {
    key1: {
      JACOB: "****",
    },
  },
  OBJ2: { key1: "1" },
  OBJ3: { key3: true },
};
//Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, //object
let obj6 = {
  key1: 1,
  key2: "master piece",
  key3: true,
  key4: ["adam", "bass"],
  key5: { key1: true, key2: false, key3: true },
};
//Write an array of objects
let obj7 = [{ key1: true }, { key2: "string" }];
//write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object
let obj8 = [{ key1: [{ ARR: [{ OBJ: "LLL" }] }] }];
//Write a function to sum two numbers passed in parameters
//es6
let sum = (x, y) => {
  return x + y;
};
console.log(sum(5, 8));
//es5
function sum2(x, y) {
  return x + y;
}
console.log(sum2(5, 8));
//write a function to multiply two numbers
//es6
let multiply = (x, y) => {
  return x * y;
};
console.log(multiply(5, 8));
//es5
function multiply2(x, y) {
  return x * y;
}
console.log(multiply2(5, 8));
//write a function to sum two numbers entered by user
//es6
let sum3 = (x, y) => {
  return x + y;
};
console.log(sum3(5, 8));
//es5
function sum4(x, y) {
  return x + y;
}
console.log(sum4(5, 8));
//write a function to multiply two numbers entered by user
//es6
let multiply3 = (x, y) => {
  return x * y;
};
console.log(multiply3(5, 8));
//es5
function multipl4(x, y) {
  return x * y;
}
console.log(multipl4(5, 8));
//
//
//
//Write a function to return a value
//Display output on server
let returnVal = () => {
  return "return";
};
returnVal();
//Write a function to print a value
let printVal = () => {
  return "this is displaying on the server";
};
const server = http.createServer((req, res) => {
  res.end(printVal());
});
server.listen(8000, "127.0.0.1");
