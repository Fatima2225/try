
// document.write( "Chapter 1 \n" );
alert("Chapter 1 \nQ1) welcome to our site");
alert  ('Chapter 1 \nQ2) JavaScript Alert\n\n  Error! Please enter a valid password.');
alert  ('Chapter 1 \nQ3) JavaScript Alert\n\n Welcome to JS Land...\n Happy Coding!');
alert  ('Chapter 1 \nQ4) JavaScript Alert\n\n Welcome to JS Land...');
alert  ('Chapter 1 \nQ4) Prevent this page from creating additional dialogues')
alert  ('Chapter 1 \nQ5) look snap for question 5');





//Chapter 2
// document.write("\nChapter 2");

// Question 1
var username
//Question 2
var myName = "Fatima Mughal";
alert("Chapter 2 \nq2)" +" "+ myName);
//Question 3
var message = "Hello World";
alert("Chapter 2 \nq3)" +" "+ message);
//Question 4
var studentName = "Jhon Doe";
var studentAge  = "15 years old";
var studentCourse = "Certified Mobile Application Development";
alert("Chapter 2 \nq4)" +" "+studentName);
alert("Chapter 2 \nq4)" +" "+studentAge);
alert("Chapter 2 \nq4)" +" "+studentCourse);
//Question 5
var a = "PIZZA \n"+"      " + "PIZZ \n"+"      " + " PIZ \n"+"      " + " PI \n"+"      " + " P ";
alert("Chapter 2 \nq5)" +" "+ a );
//Question 6
var email = "fatimamughal291@gmail.com";
alert("Chapter 2 \nq6)" +" "+"My email address is "+ email );
//Question 7
var book = "A smarter way to learn JavaScript.";
alert("Chapter 2 \nq7)" +" "+"I am tryting to learn from the Book "+ book );
//Question 8
document.write( "Chapter 2 \nq8\n)  Yah! I can write HTML content through JavaScript");





//Chapter 3

//question1
var age = 22;
alert("Chapter 3 \nq1)"+"  I am "+ age + " years old.");
//question3
var birthYear = 1997;
document.write("<hr> <br>"+ "Chapter 3 exercise 3:")
document.write(" <br>" + "My birth year is " + birthYear);
document.write( "<br>" +"Data type of my declared varaibale is number" );

 //question4
var visitorsName = "John Doe";
var productTitle = "ordered";
var quantity = "5 T-shirt(s)";
document.write("<hr> <br>"+ "Chapter 3 exercise 4:")
document.write(" <br>"  + visitorsName +" "+ productTitle +" "+ quantity + " on XYZ Clothing Store.");




//Chapter 4

//question1
var a,b,c;
//question2
//legal
var userResponse;
var $userResponseTime;
var _time;
var user3;
var New;
//illegal
// var 4userResponse;
// var @userResponseTime;
// var %time;
// var 1_user;
// var function ;

//question3
//a
document.write("<hr> <br>"+ "Chapter 4 exercise 3:"+ " <br>"+  "<h1>"+ " RULES FOR NAMING JS VARIABLES " + "</h1>")
//b
document.write("<br>"+ " b) Variable names can only contain letters,numbers,dollarsigns and underscores.For example $my_1stVariable ");
//c
document.write("<br>"+ " c)  Variables must begin with a dollarsign,underscores or letters. For example $name, _name or name ");
//d
document.write("<br>"+ " d)  Variable names are case sensitive");
//e
document.write("<br>"+ " e)   Variable names should not be JS keywords");




//chapter 5
document.write("<hr> <br>"+ "Chapter 5 exercise 1:")
var num1 = +prompt("enter a number 1 for add");
var num2 = +prompt("enter a number 2 for add");
var result = num1 + num2;
document.write(" <br>"  + "sum of "+ num1+ " and "+ num2 + " is "+ result );

document.write("<br> <br>"+ "Chapter 5 exercise 2:")
var number1 = +prompt("enter a number 1 for subtract");
var number2 = +prompt("enter a number 2 for subtract");
var subtract = number1 - number2;
document.write(" <br>"  + "subtraction of "+ number1+ " and "+ number2 + " is "+ subtract );

document.write("<br> <br>"+ "Chapter 5 exercise 2:")
var mul1 = +prompt("enter a number 1 for multiplication");
var mul2 = +prompt("enter a number 2 for multiplication");
var multiply = mul1 * mul2;
document.write(" <br>"  + "Multiplication of " +mul1  + " and "+ mul2 + " is "+ multiply );

document.write("<br> <br>"+ "Chapter 5 exercise 2:")
var divi1 = +prompt("enter a number 1 for division");
var divi2 = +prompt("enter a number 2 for division");
var division = divi1 / divi2;
document.write(" <br>"  + "Division of " +divi1 + " and "+ divi2 + " is "+ division );

document.write("<br> <br>"+ "Chapter 5 exercise 2:")
var modu1 = +prompt("enter a number 1 for modulus");
var modu2 = +prompt("enter a number 2 for modulus");
var modulus = modu1 % modu2;
document.write(" <br>"  + "Modulus od " +modu1 + " and "+ modu2 + " is "+ modulus );

//question 3
document.write("<hr> <br>"+ "Chapter 5 exercise 3:")
//a
var un;

//b
document.write(" <br>"  + "Value after variable declaration is "+ un );

//c
var b = 5;

//d
document.write(" <br>"  + "Initial Value : "+ b );

//e
var b = b+ 1;

//f
document.write(" <br>"  + "Value after after increement is "+ b );

//g
var b = b +7

//h
document.write(" <br>"  + "Value after addition is "+ b );

//i
var b = b-1;
 
//j
document.write(" <br>"  + "Value after decreement is "+ b );

//k
var b = b%3;

//l
document.write(" <br>"  + "The remainder is "+ b );

//question 4
document.write("<hr> <br>"+ "Chapter 5 exercise 4:")
var cost = 600;
var buyingFiveTickets = cost * 5;
document.write(" <br>"  + "Total cost to buy 5 tickets to a movie is "+ buyingFiveTickets+ "PKR " );

//question5
document.write("<hr> <br>"+ "Chapter 5 exercise 5:"+ " <br>"+  "<h1>"+ " TABLE OF 4 " + "</h1>");
for(var i = 1; i<=10; i++)
{
    document.write("4" + "x" + i + "=" + 4*i + "<br>")
}

//question 6
document.write("<hr> <br>"+ "Chapter 5 exercise 6:")
//a
var ces = 34;

// b
ces = (94-32)*5/9;
document.write(" <br>"  + "34oC is" + ces +" oF" );

//c
var feh = 94;

//d
feh = (ces*9/5)+32;
document.write(" <br>"  + "94oF is" + feh +" oC" );



alert("hello");





