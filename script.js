var firstInput = document.getElementById('FirstNumber');
var secondInput = document.getElementById('SecondNumber');
var Showboard = document.getElementById('showAnswer')
var ShowboarTwo = document.getElementById('showAnswerTwo')


function minus(){
   var minusCalc = firstInput.value - secondInput.value;
   Showboard.innerHTML= minusCalc;
   ShowboarTwo.innerHTML = "Your final result is: " + minusCalc;
}

function Add(){
    var AddCalc = (Number(firstInput.value)) + (Number(secondInput.value));
    Showboard.innerHTML= AddCalc;
    ShowboarTwo.innerHTML = "Your final result is: "+ AddCalc;
 }