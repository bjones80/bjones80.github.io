var number1 = 4;
var number2 = document.getElementById("number2")

number2.value= 5.5;

function add(num1, num2){
    var total = number1 + parseFloat(number2.value);
    return total;
}

var total = number1 + number2;

console.log(total);
