////Date methods
////1. Write a program that displays current date and time in your browser

// var currentDate = new Date();
// document.write(currentDate);

////2. Write a program that alerts the current month in words. For example December.

// var currentDate = new Date();
// var currentMonthIndex = currentDate.getMonth();
// var arryMonths = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
// document.write("<h1> Current Month : " + arryMonths[currentMonthIndex] + "</h1>");

////3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

//  var currentDate = new Date();
//  var indexDay = currentDate.getDay();
//  var  arrDay  = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]; 
//  document.write("<h1> Today is : " + arrDay[indexDay] + "</h1>");


////4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//  var currentDate = new Date();
//  var indexDay = currentDate.getDay();
// if(indexDay == 0 || indexDay == 6)
// {
//  document.write("<h1> It's Fun day </h1>");
// } 
// else
// {
//  document.write("<h1> It's not Fun day </h1>");

// }

////5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var currentDate = new Date();
// var currentDateIndex = currentDate.getDate();
// if(currentDateIndex < 16)
// {
// document.write("<h1> First fifteen days of the month </h1>");
// }
// else
// {
// document.write("<h1> Last days of the month </h1>");
// }


////6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
//  var currentDate = new Date();
//  var currentMilliSecond = currentDate.getTime();
//  var currentMinute = currentMilliSecond/(1000*60);
// document.write("Current Date : " + currentDate + "</br>");
// document.write("Elapsed milliseconds since January 1, 1970 : " + currentMilliSecond + "</br>");
// document.write("Elapsed minutes since January 1, 1970 : " + currentMinute + "</br>");


////7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
//  var currentDate = new Date();
//  var hour = currentDate.getHours();
//  if(hour<12)
//  {
//      alert( "Its AM");
//  }
//  else
//  {
//      alert("Its PM");
//  }


////8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// var current = new Date("December 31,2020 00:00:00");
// document.write("Later Date : " + current );


////9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

//  var current = new Date();
//  var lastRamzan = new Date("June 18,2015");
//  var miliSecondTotal = current.getTime();
//  var miliSecondLastRamzan = lastRamzan.getTime();
//  var timeDiff = miliSecondTotal - miliSecondLastRamzan;
//  var convert = Math.round(timeDiff/(1000*60*60*24));
//  document.write(convert + " days have passed since 1st Ramzan,2015");
 
////10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var begin2015 =  new Date("January 1,2015 00:00:00");
// var ref2015 = new Date("December 5,2015 22:50:16");
// var diff =  ref2015.getTime() - begin2015.getTime();
// var conv = diff/1000;
// document.write("On reference date" + ref2015 + ", " + conv +" seconds had passed since beginning of 2015 " );

////11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
// var currentTme = new Date();
// var hour = currentTme.getHours()-1;
// var oneHourMinus = new Date();
// var newTime = oneHourMinus.setHours(hour);
// document.write("current date: " + currentTme +"<br>" + "1 hour ago, it was " + oneHourMinus);

////12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var currentTme = new Date();
// var year = currentTme.getFullYear()-100;
// var oneYearMinus = new Date();
// var newTime = oneYearMinus.setFullYear(year);
// document.write("current date: " + currentTme +"<br>" + "100 years back, it was " + oneYearMinus);
