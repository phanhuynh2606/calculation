var lightOff = document.getElementById("light-off");
var lightOn = document.getElementById("light-on");

lightOff.addEventListener("click", function () {
  document.body.style.background = "black";
});
lightOn.addEventListener("click", function () {
  document.body.style.background = "white";
});
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var start = document.getElementById("start");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");

start.addEventListener("click", function () {
  num1.value = getRndInteger(1, 10);
  num2.value = getRndInteger(1, 10);
});
var check = document.getElementById("check");
check.addEventListener("click", function () {
  if (result.value == Number(num1.value) + Number(num2.value)) {
    alert("Đúng");
     num1.value = getRndInteger(1, 10);
     num2.value = getRndInteger(1, 10);
     result.value  ="";
     check.style.background = 'green';
  } else {
    alert("Sai");
     check.style.background = "red";

  }
});
