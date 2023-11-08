// output functions -> functions that will help you to show output
// document.write(), console.log(), alert()
// console.clear(), console.error(), console.info(), console.warn()

document.write("Welcome to JS Program");
document.write("<h1>Welcome to JS Program</h1>");
document.write("<h2>Welcome to JS Program</h2>");


// this will be display in console
console.log("Welcome to JS Program  1233");

//this alert() will display an alert message
alert("welcome to js program");








// code 2




//you can run this program by using the command =>   node program2.js

// keywords -> reserved words for specific reasons. example -> for,while, do while, if, else, else if, break, try,catch, function, var, const, let etc.

// data type
// primitive data type - String, Number (int,float,double), Boolean, Undefined, Null
// Reference data type - Array, Object.
// use typeof() to check the data type
// comment -> single line comment, double line comment

//This is a single line comment

/*
This is 
multiple line
comment
*/

console.log(typeof 123);
console.log(typeof 123.5);
console.log(typeof "123");
console.log(typeof true);
console.log(typeof false);

//collected from w3school's website
var car; // Value is undefined, type is undefined
var car = ""; // The value is "", the typeof is "string"

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null; // Now value is null, but type is still an object

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined; // Now both value and type is undefined

typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof true; // Returns "boolean"
typeof false; // Returns "boolean"
typeof x; // Returns "undefined" (if x has no value)



// code 3







////you can run this program by using the command =>   node program3 .js or add the file to html

// understanding variables
// variables naming rules (collected from w3school)
/*
    The general rules for constructing names for variables (unique identifiers) are:
    Names can contain letters, digits, underscores, and dollar signs.
    Names must begin with a letter
    Names can also begin with $ and _ (but we will not use it in this tutorial)
    Names are case sensitive (y and Y are different variables)
    Reserved words (like JavaScript keywords) cannot be used as names
*/

/*
Underscore:first_name, last_name
Upper Camel Case (Pascal Case):FirstName, LastName
Lower Camel Case:firstName, lastName
*/
// printing student details
// variable can be declared first and then initialize
// var name, age, cgpa, lineBreak;
// name = "Anisul Islam";
// age = 29;
// cgpa = 3.92;
// lineBreak = "<br/>";

var name = "Anisul Islam";
var age = 29;
var cgpa = 3.92;
var lineBreak = "<br/>";

// variable can be declared and initialize at the same time
// var name = "Anisul Islam",age = 29,cgpa = 3.92,lineBreak = "<br/>"

document.write("Name : " + name + lineBreak);
document.write("Age : " + age + lineBreak);
document.write("CGPA : " + cgpa + lineBreak);








// code4


//you can run this program by using the command =>   node program4 .js or adding this file in html

// string  -> a sequnces of characters
// string concatenation -> adding multiple strings

var fName = "Anisul";
var lName = "Islam";

// adding multiple strings here
var fullName = fName + " " + lName;
console.log(fullName);
console.log("Today is" + " a " + "beautiful day");
console.log("My name is " + fullName);

var num1 = 20;
var num2 = 30;
var sum = num1 + num2;
console.log(num1 + " + " + num2 + " = " + sum);







// code5

// string related library functions
// length, prompt(), chartAt(5),
// string.toUpperCase(), string.toLowerCase()
// string1.concat(string2)
// string.slice(0,3)

// getting the input from user as string
var text = prompt("Enter your name : ");
document.write("Your name : " + text + "<br/>");

//finding the length of a string
var len = text.length;
document.write("Number of characters : " + len + "<br/>");

// finding the character at a specific position
document.write(text.charAt(2) + "<br/>");

// converting the string into uppercase or lowercase
document.write(text.toUpperCase() + "<br/>");
document.write(text.toLowerCase() + "<br/>");

// concatenation function
var text1 = " hi";
var text2 = "bye";
var text3 = text1.concat(text2);
document.write(text3 + "<br/>");

// slice function
var text4 = "hello";
var result = text4.slice(0, 2);
document.write(result + "<br/>");

//collected from w3school
var x = new String("John");
var y = new String("John");

// (x === y) is false because x and y are different objects

/*
There are 3 methods for extracting a part of a string:
    slice(start, end)
    substring(start, end)
    substr(start, length)
1) slice can take positive and negative parameter. 
    If a parameter is negative, the position is counted from the end of the string.
    
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(-12, -6); // output - Banana
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(7); // output - Banana, Kiwi
2) substring() is similar to slice().
    The difference is that substring() cannot accept negative indexes.
    var str = "Apple, Banana, Kiwi";
    var res = str.substring(7, 13); // output - Banana
3)substr() is similar to slice().
    The difference is that the second parameter specifies the length of the extracted part.
    var str = "Apple, Banana, Kiwi";
    var res = str.substr(7, 6); // output - Banana 
*/






// COAD6


//you can run this program by using the command =>   node program6 .js or adding this file in html

var num = "20";
num = num.toString();
console.log(typeof num);

var number = 20;
console.log(typeof number);

number = toString(20);
console.log(typeof number);

var x = 2.56789;
// number of characters after the decimal point
console.log(x.toFixed(1));
console.log(x.toFixed(2));

// total number of characters including the decimal point
console.log(x.toPrecision(1));
console.log(x.toPrecision(2));

console.log(Number(true));
console.log(Number(false));
console.log(Number(" 10"));
console.log(Number(" 10 "));
console.log(Number("10.25"));






// CODE7

// //you can run this program by using the command =>   node program7 .js or adding this file in html

// Arithmetic operator -> +, -, *, / , %, ++, --, ** (exponentiation)
// Assignment operator -> =, +=, -=, *=, /=, %=

var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
var lineBreak = "<br/>";

var result = num1 + num2;
document.write("The sum is : " + result + lineBreak);

result = num1 - num2;
document.write("The sub is : " + result + lineBreak);

result = num1 * num2;
document.write("The multiplication is : " + result + lineBreak);

result = num1 / num2;
document.write("The division is : " + result + lineBreak);

result = num1 % num2;
document.write("The remainder is : " + result + lineBreak);


// CODE8





// Area of various shapes
//Area of triangel

//getting user input for base
var base = parseFloat(prompt("Enter Base = "));

//getting user input for height
var height = parseFloat(prompt("Enter Height = "));

//calculating area
var area = 0.5 * base * height;

//printing area
document.write("Area of triangle = " + area);






// CODE9






//Temperature converter program

var farn = parseFloat(prompt("Enter Fahrenheit = "));
var cels = (farn - 32) * (5 / 9);
document.write("Celsius = " + cels + "<br/>");

// var cels = parseFloat(prompt("Enter Celsius = "));
// var farn = (cels * (9 / 5)) + 32;
// document.write("Fahrenheit = " + farn);



// CODE10



// Relational Operator : >, >=, <, <=,
//  ==(for checking only value), ===(for checking value and data type), !=, !==
// Logical Operator : &&, ||, !

// Relational and logical operators return true / false

var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == num4);
console.log(num1 != num4);
console.log(num1 === num3);
console.log("num2 === num3 : " + (num2 === num3));
console.log("num2 == num3 : " + (num2 == num3));
console.log(num1 !== num3);

// logical operators helps us to compine multiple conditions
console.log(num1 > num2 && num1 > num5);
console.log(num1 > num2 || num1 > num5);



// CODE11


// a program that will find a large number between 2 numbers
var num1 = parseInt(prompt("Enter first numebr : "));
var num2 = parseInt(prompt("Enter second numebr : "));


// third method - more efficient than first and second method
if (num1 > num2) {
    console.log("Large Number is : " + num1);
  } else if (num1 < num2) {
    console.log("Large Number is : " + num2);
  } else {
    console.log("Equal numbers");
  }




//   CODE12


// A program that will find a letter is vowel or consonant
var letter = prompt("Enter a letter : ");

// convert any uppercase input into lower cause we set only lowercase letter in condition
letter = letter.toLowerCase();

// Now check the condition
if (
  letter == "a" ||
  letter == "e" ||
  letter == "i" ||
  letter == "o" ||
  letter == "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}



// CODE13


// A program to understand switch -> digit spelling program
// 0 -> Zero
// 1 -> One
// 2 -> Two
// ...
// ...
// 9 -> Nine
// if input is not a number then program will display "not a digit"

var digit = parseInt(prompt("Enter a digit : "));
switch (digit) {
  case 0:
    document.write("Zero");
    break;

  case 1:
    document.write("One");
    break;

  case 2:
    document.write("Two");
    break;

  case 3:
    document.write("Three");
    break;

  case 4:
    document.write("Four");
    break;

  case 5:
    document.write("Five");
    break;

  case 6:
    document.write("Six");
    break;

  case 7:
    document.write("Seven");
    break;

  case 8:
    document.write("Eight");
    break;

  case 9:
    document.write("Nine");
    break;

  default:
    document.write("Not a digit");
}


// CODE14

//A program to demonstrate for loop

// for loop syntax
for (var i = 1; i <= 10; i++) {
    document.write("Bangladesh" + "<br>");
  }
  
  document.write("End of for loop");
  
  // sum of numbers 1+2+..+100
  var sum = 0;
  for (var x = 1; x <= 100; x++) {
    sum = sum + x;
  }
  document.write("The sum is " + sum);


// CODE15


//A program to demonstrate while loop
// while loop syntax
var i = 1;
while (i <= 10) {
  document.write("Bangladesh" + "<br>");
  i++;
}

document.write("End of for loop");

// sum of numbers 1+2+..+100
var sum = 0;
var x = 1;
while (x <= 100) {
  sum = sum + x;
  x++;
}
document.write(sum);



// CODE16 D0 WHILE

// A program to demonstrate do while loop
// do while loop syntax
var i = 1;
do {
  document.write("Bangladesh" + "<br>");
  i++;
} while (i <= 10);

document.write("End of do while loop");

// sum of numbers 1+2+..+100
var sum = 0;
var x = 1;
do {
  sum = sum + x;
  x++;
} while (x <= 100);
document.write(sum);





// CODE17



// break and continue  program

// The break statement "jumps out" of a loop or switch.
for (var i = 1; i <= 100; i++) {
  if (i == 20) break;
  document.write(i + "<br/>");
}

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
for (var i = 1; i <= 100; i++) {
  if (i == 20) continue;
  document.write(i + "<br/>");
}
// CODE18






// CODE14
// CODE14
// CODE14
// CODE14
// CODE14
// CODE14
// CODE14
// CODE14
// CODE14
// CODE14
// CODE1

// CODE14