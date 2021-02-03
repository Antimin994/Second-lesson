var userAge = prompt("Сколько лет?", 18);
var smoke = confirm("Куришь?");
if ((userAge >= 18) && (smoke === true)) {
    alert("Ну и зря");
} else if ((userAge >= 18) && (smoke === false)) {
    alert("Молодец, и не надо");
} else if ((userAge < 18) && (smoke === true)) {
    alert("Маме раскажу");
} else {
    alert("Так держать!");
}


var firstNum = prompt("Первое значение", 0);
var secondNum = prompt("Второе значение", 0);
 if (firstNum > secondNum) {
     alert(firstNum + " больше чем " + secondNum);
 } else if (secondNum > firstNum) {
     alert(secondNum + " больше чем " + firstNum)
 } else {
     alert("Числа одинаковы");
 }
 

var firstDist = prompt("Первое значение", 0);
var secondDist = prompt("Второе значение", 0)*0.305;
 if (firstDist > secondDist) {
     alert(firstDist + " больше чем " + secondDist);
 } else if (secondDist > firstDist) {
     alert(secondDist + " больше чем " + firstDist)
 } else {
     alert("Расстояния одинаковы");
 }