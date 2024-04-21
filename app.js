let userName = prompt("PLZ type your full Name")
let inputForm = document.querySelector("#tableForm");
let inputobtain = document.querySelector("#inputobtain");
let inputtotal = document.querySelector("#inputtotal");
let table = document.querySelector(".time-table");
let userNameDiv = document.querySelector("#username")

userNameDiv.innerHTML = "";

userNameDiv.innerHTML += "Hello, " + userName + "👋👋";

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let obtain = inputobtain.value;
  let total = inputtotal.value;
  
  
  let multiply = obtain * 100;
  let result = (multiply / total);


  console.log(result);

  table.innerHTML = "";

  // if (result => 80) {
  //   table.innerHTML += "<p>Congratulation you achieve A1-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  // } else if (weather < 32 || weather >= 28) {
  //   table.innerHTML += "<p>Congratulation you achieve A1-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  // } else {
  //   table.innerHTML += "<p>oohhhh Your Fail  you achieve F-Grade and your percentage is " + result + "% 😭😭😭 Better luck For next time</p>" ;
  // }
  


  if (result >= 80) {
    table.innerHTML += "<p>Congratulation you achieve A1-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  } else if (result >= 70) {
    table.innerHTML += "<p>Congratulation you achieve A-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  } else if (result >= 65 ) {
    table.innerHTML += "<p>GOOD you achieve B+-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  }else if (result >= 60 ) {
    table.innerHTML += "<p>Nice Need more better you achieve B-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  } else if (result >= 50 ) {
    table.innerHTML += "<p>Well Done you achieve c-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  } else if (result >= 40 ) {
    table.innerHTML += "<p>just passing marks need better for next time you achieve D-Grade and your percentage is " + result + "% 🥳🥳</p>" ;
  } else {
    table.innerHTML += "<p>oohhhh Your Fail  you achieve F-Grade and your percentage is " + result + "% 😭😭😭 Better luck For next time</p>" ;

  }
})

