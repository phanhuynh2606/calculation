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
  if (document.querySelector(".show") != null) {
    showKey.click();
  }
});
var check = document.getElementById("check");
var opt = document.getElementById("opt");
var key = document.getElementById("key");
var showKey = document.getElementById("showKey");
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function calcultion(num1, num2) {
  var ketQua;
  switch (opt.value) {
    case "+":
      ketQua = Number(num1.value) + Number(num2.value);
      break;
    case "-":
      ketQua = Number(num1.value) - Number(num2.value);
      break;
    case "*":
      ketQua = Number(num1.value) * Number(num2.value);
      break;
    case "/":
      if (Number(num1.value) % Number(num2.value) == 0) {
        ketQua = Number(num1.value) / Number(num2.value);
      } else {
        var ucln = gcd(Number(num1.value), Number(num2.value));
        var res = Number(num1.value) / ucln + "/" + Number(num2.value) / ucln;
        ketQua = res;
      }
      break;
    default:
      break;
  }

  return ketQua;
}

check.addEventListener("click", function () {
  if (result.value == calcultion(num1, num2)) {
    alert("Đúng");
    num1.value = getRndInteger(1, 10);
    num2.value = getRndInteger(1, 10);
    result.value = "";
    check.style.background = "green";
    start.click();
  } else {
    alert("Sai");
    check.style.background = "red";
  }
});

showKey.addEventListener("click", function () {
  key.classList.toggle("show");
  key.innerHTML =
    num1.value +
    " " +
    opt.value +
    " " +
    num2.value +
    " = " +
    calcultion(num1, num2);
});
