// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = Number(prompt("What is your age ?"));
(12 >= age <= 55 ) ? alert("You can participate in the marathon") :
(4 >= age <= 11 ) ? alert(" You are too young to participate in the marathon") :
(age > 4) ? alert(" Hey Kiddo! Can You Walk ?") :
alert (" You are too old to participate in the marthon");
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let n = Number(prompt("Rate your day to have a greeting!",1));
let e = "e".repeat(n);
alert(`H${e}llo`);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let sum = 0;
let n = Number(prompt("Enter any natural number",1));
for ( let i=0; i<=n; i=i+1) {
  sum = sum + i;
}
  alert(`sum of first n natural number is ${sum}`);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let number = Number(prompt("Enter any number"),1);
switch (number) {
  case 1:
    alert("ONE");
  break; 
  case 2:
    alert("TWO");
  break;
  case 3:
    alert("THREE");
  break;
  case 4:
    alert("FOUR");
  break;
  case 5:
    alert("FIVE");
  break;
  case 6:
    alert("SIX");
  break;
  case 7:
    alert("SEVEN");
  break;
  case 8:
    alert("EIGHT");
  break;
  case 9:
    alert("NINE");
  break;
  default:
    alert("PLEASE TRY AGAIN!");
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = Number(prompt("What is your score ?"),100);
switch(marks) {
  case marks>90 :
    alert("AA");
  break;
  case 80<marks<=90 :
    alert("AB");
  break;
  case 70<marks<=80 :
    alert("BB");
  break;
  case 60<marks<=70 :
    alert("BC");
  break;
  case 50<marks<=60 :
    alert("CC");
  break;
  case 40<marks<=50 :
    alert("CD");
  break;
  case 30<marks<=40 :
    alert("DD");
  break;
  case marks<30 :
    alert("FF");
}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let num1 = Number(prompt("Enter your first number!")), num2 = Number(prompt("Enter your second number!"));
(num1 > num2) ? alert(`Number ${num1} is greater than ${num2}`) : 
alert(`Number ${num2} is greater than ${num1}`);
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let num1 = Number(prompt("Enter your first number!")), 
num2 = Number(prompt("Enter your second number!")),
num3 = Number(prompt("Enter your third number!"));
((num1*num2*num3) === (-num1*num2*num3)) ? alert('the prouduct will have "-" sign') :
alert('the product will have "+" sign');
/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let num1 = Number(prompt("Enter your first number!")), 
num2 = Number(prompt("Enter your second number!")),
operation = prompt("What operation would you like to assign : follow the instruction bellow :- \nAddition type Add  \nSubstraction type Sub \nMultiplication type Mul \nDivision type Div");
switch(operation) {
  case "Add" :
    alert(`Addition of ${num1} & ${num2} is ${num1+num2}`);
  break;
  case "Sub" :
    (num1<num2) ? alert("for substraction number1 should be greater than num2 please re-enter again"):
    alert(`Substraction of ${num1} & ${num2} is ${num1-num2}`);
  break;
  case "Mul" :
    alert(`Multiplication of ${num1} & ${num2} is ${num2*num1}`);
  break;
  case "Div" :
    alert(`Division of ${num1} & ${num2} is ${num1 / num2}`);
  break;
  default :
  alert ("Sorry, this is case sensitive please follow the insructions while assigning the operations!")
}