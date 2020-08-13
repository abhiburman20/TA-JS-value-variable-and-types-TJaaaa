// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = prompt("Enter any number");
(Number(number) % 2 === 0) ? alert("number is even") : alert("number is odd");
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = Number(prompt("Enter your first number")), num2 = Number(prompt("Enter your second number"));
(num1 > num2) ? alert(`The MAX number is ${num1}`) : alert (`The MAX number is ${num2}`);
// 3. Convert the above code using`?` terniary operator
let num1 = Number(prompt("Enter your first number")), num2 = Number(prompt("Enter your second number"));
(num1 > num2) ? alert(`The MAX number is ${num1}`) : alert (`The MAX number is ${num2}`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("What's your House name?");
switch(true){
  case houseName === "stark" :
    alert("Winter is coming");
    break;
  case houseName === "lannister" :
    alert("A lannister always pays his debt");
  break ;
  default :
  alert(" All men must die");
}
// 5. Convert the above code using`?` terniary operator
let houseName = prompt("What's your House name?");
(houseName === "stark") ? alert("Winter is coming") : 
(houseName === "lannister") ? alert("A lannister always pays his debt"):
alert(" All men must die")
// Switch
let houseName = prompt("What's your House name?");
switch(true){
  case houseName === "stark" :
    alert("Winter is coming");
    break;
  case houseName === "lannister" :
    alert("A lannister always pays his debt");
  break ;
  default :
  alert(" All men must die");
}
// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = Number(prompt("What is your month",12));
(month === 1 ||3||5||7||8||10||12) ? alert("Your months has 31 days") :
(month === 4 || 6||8||10||11) ? alert("Your months has 31 days") :
alert("Your months has 28 days") ;


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("What is your Salary?"));
(Salary <= 20000) ? alert(`Your in hand salary is ${salary - (salary/10)}`) :
(Salary <= 40000) ? alert(`Your in hand salary is ${salary - (salary/5)}`) :
(salary > 50000) ? alert(`Your in hand salary is ${salary - (salary*3)/10}`):
alert(`Your in hand salary is ${salary - (salary*3)/10}`);

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
//if - else
if (marks > 100){
  alert("Marks can't be greater than 100");
  } else if (marks > 80 && marks < 100) {
    alert("Grade A");
  } else if (marks > 50 && marks < 80) {
    alert ("Grade B") ;
  } else if (marks > 30 && marks < 50) {
    alert ("Grade C");
  } else if (marks > 0){
    alert("Grade D")
  }
  // switch
switch (true) {
  case marks > 100:
    alert("Marks can't be greater than 100");
  break;
  case marks > 80 && marks < 100 :
    alert("Grade A");
  break;
  case marks > 50 && marks < 80 :
    alert ("Grade B") ;
  break;
  case marks > 30 && marks < 50 :
    alert ("Grade C");
  break;
  case marks > 0:
    alert("Grade D")
  break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside?");
(weather==="sunny") ? alert("Wear a T-shirt") :
(weather==="rainy") ? alert("Don't forget to take your raincoat"):
(weather==="hot") ? alert("Get a hanky"):
(weather==="freezing") ? alert("Get your sweeter on"):
alert("Not a valid input");