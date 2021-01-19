//Chap31-34 Date methods
//1. Write a program that displays current date and time in your browser

var currentDate = new Date();
document.write(currentDate);

//2. Write a program that alerts the current month in words. For example December.

var currentDate = new Date();
var currentMonthIndex = currentDate.getMonth();
var arryMonths = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
document.write("<h1> Current Month : " + arryMonths[currentMonthIndex] + "</h1>");

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

 var currentDate = new Date();
 var indexDay = currentDate.getDay();
 var  arrDay  = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 
 document.write("<h1> Today is : " + arrDay[indexDay] + "</h1>");


//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

 var currentDate = new Date();
 var indexDay = currentDate.getDay();
if(indexDay == 0 || indexDay == 6)
{
 document.write("<h1> It's Fun day </h1>");
} 
else
{
 document.write("<h1> It's not Fun day </h1>");

}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var currentDate = new Date();
var currentDateIndex = currentDate.getDate();
if(currentDateIndex < 16)
{
document.write("<h1> First fifteen days of the month </h1>");
}
else
{
document.write("<h1> Last days of the month </h1>");
}


//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
 var currentDate = new Date();
 var currentMilliSecond = currentDate.getTime();
 var currentMinute = currentMilliSecond/(1000*60);
document.write("Current Date : " + currentDate + "</br>");
document.write("Elapsed milliseconds since January 1, 1970 : " + currentMilliSecond + "</br>");
document.write("Elapsed minutes since January 1, 1970 : " + currentMinute + "</br>");


//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
 var currentDate = new Date();
 var hour = currentDate.getHours();
 if(hour<12)
 {
     alert( "Its AM");
 }
 else
 {
     alert("Its PM");
 }


//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
var current = new Date("December 31,2020 00:00:00");
document.write("Later Date : " + current );


//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

 var current = new Date();
 var lastRamzan = new Date("June 18,2015");
 var miliSecondTotal = current.getTime();
 var miliSecondLastRamzan = lastRamzan.getTime();
 var timeDiff = miliSecondTotal - miliSecondLastRamzan;
 var convert = Math.round(timeDiff/(1000*60*60*24));
 document.write(convert + " days have passed since 1st Ramzan,2015");
 
//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var begin2015 =  new Date("January 1,2015 00:00:00");
var ref2015 = new Date("December 5,2015 22:50:16");
var diff =  ref2015.getTime() - begin2015.getTime();
var conv = diff/1000;
document.write("On reference date" + ref2015 + ", " + conv +" seconds had passed since beginning of 2015 " );

//11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
var currentTme = new Date();
var hour = currentTme.getHours()-1;
var oneHourMinus = new Date();
var newTime = oneHourMinus.setHours(hour);
document.write("current date: " + currentTme +"<br>" + "1 hour ago, it was " + oneHourMinus);

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var currentTme = new Date();
var year = currentTme.getFullYear()-100;
var oneYearMinus = new Date();
var newTime = oneYearMinus.setFullYear(year);
document.write("current date: " + currentTme +"<br>" + "100 years back, it was " + oneYearMinus);


//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var userage = +prompt("Enter your age","20");
var currentdate = new Date();
var cal = currentdate.getFullYear() - userage;
document.write("Your age is " + userage +"<br>"+ "Your birth year is " + cal);

//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
var currentDate = new Date();
var currentMonthIndex = currentDate.getMonth();
var arryMonths = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
var customerName = "ABC Customer";
var month = arryMonths[currentMonthIndex];
var numUnit = 410;
var chargesPerUnit = 16;
var lateCharges = 350;
var netAmount = numUnit*chargesPerUnit;
var grossAmount = netAmount +lateCharges;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <b>" + customerName +"</b><br>");
document.write("Month: <b>" + month +"</b><br>");
document.write("Number of unit: <b>" + numUnit +"</b><br>");
document.write("Charges per unit: <b>" + chargesPerUnit +"</b><br>"+"<br>");
document.write("Net Amount Payble: <b>" + netAmount +"</b><br>");
document.write("Late payment surchage:  <b>" + lateCharges +"</b><br>"); 
document.write("Gross Amount Payable(after Due Date): <b>" + grossAmount +"</b><br>"); 

//Chap 35-38 Function
//1. Write a function that displays current date & time in your browser.
function dateandtime()
{
    var current = new Date();
    document.write(current);
}
dateandtime();

//2. Write a function that takes first & last name and then it greets the user using his full name.
function greet()
{
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
document.write(firstName+" "+lastName+" Hello! How are you?")
}
greet();

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.function 

function add(){
var a = +prompt("Enter first number");
var b = +prompt("Enter  second  number")
var c=a+b;
return c;

}

alert("Sum of two number : "+add());


//4. Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
function calculator(num1,num2,operator)
{
if(operator == "/")
{
    var result = num1/num2;
    alert("Result  = "+ result)
}
else if(operator == "+")
{
    var result = num1+num2;
    alert("Result  = "+ result)
}
if(operator == "-")
{
    var result = num1-num2;
    alert("Result  = "+ result)
}
if(operator == "*")
{
    var result = num1*num2;
    alert("Result  = "+ result)
}
if(operator == "%")
{
    var result = num1%num2;
    alert("Result  = "+ result)
}

}
calculator(+prompt("Enter First Number"),+prompt("Enter Second Number"),prompt("Enter Operator + or - or * or / or %"));

//5. Write a function that squares its argument.

function square(a){
var b =a*a;
alert("Squares of "+ a +" is "+b );
}
square(+prompt("Enter Number for squares"));


//6. Write a function that computes factorial of a number.
function factor(j)
{

var c;
if(j==0 || j==1)
{
    c=1;
    return c;
}
else
{
    c = j*factor(j-1)
 return c;   
}
}

alert("factorial of your number is " + factor(+prompt("Enter number for factorial :")));


//7. Write a function that take start and end number as inputs & display counting in your browser.
function  counting(a,b)
{
for(var a;a<=b;a++)
{
    document.write(a + " ")
}
}
counting(+prompt("Enter start number","1"),+prompt("Enter Last number","100"));

//8. Write a nested function that computes hypotenuse of a right angle triangle. 
function calculateHypotenuse(){
var base = +prompt("Enter base")
var perpendicular = +prompt("Enter perpendicular")
var hypotenus = calculateSquare();

function calculateSquare(squareBase,squarePerpendicular)
{
 squareBase =base*base;
  squarePerpendicular =perpendicular*perpendicular;
return squareBase+squarePerpendicular;
}

return hypotenus;
}

alert(calculateHypotenuse());

//9. Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner: i. Arguments as value ii. Arguments as variables
function area(width,height){

    var a =width*height;
    return a;
}
alert(area(2,4));


//10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function palindrome(a)
{
    if(a == a.split('').reverse().join(''))
    {
        alert("It is palindrome");
    }
    else
    {
        alert("It is not palindrome"); 
    }
}
palindrome(prompt("check palindrome"));
