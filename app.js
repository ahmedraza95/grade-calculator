let userName = prompt("type your name!");
let start = alert("Hello" + " " + userName + " " + "lets start to calculate your percentage%!");
let obtainMarks = prompt("Type you obtain marks");
let totalMarks = prompt("Type your total marks");
let multiply = +obtainMarks * 100;
let result = (multiply / totalMarks);


if (result > 80) {
    alert("congratulation you achieve A1 Grade and your percentage is" + " " + result + "%" ) ;
  }else if (result > 60) { 
    alert("nice effort you achieve B Grade and your percentage is" + " " + result  + "%");
  }else if (result > 40) { 
    alert("great achieve C Grade and your percentage is" + " " + result  + "%");
  }
   else {
    alert("oh my God You are Fail your grade is F your percentage is" + " " + result + "%");
  }