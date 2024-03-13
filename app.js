let start = alert("Hello lets start to calculate your percentage%!");
let obtainMarks = prompt("Type you obtain marks");
let totalMarks = prompt("Type your total marks");
let multiply = +obtainMarks * 100;
let result = (multiply / totalMarks);



if (result > 80) {
    alert("congratulation you achieve A1 Grade and your percentage is" + " " + result);
  } else {
    alert("nice effort you achieve B Grade and your percentage is" + " " + result);
  }

