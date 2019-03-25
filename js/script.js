

function triangleTracker(){

  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var number3 = document.getElementById('num3').value;

  if (number1==0 || number2==0 || number3==0){
    alert("Error, a triangle must have a definate length")
  }

  else if(number1+number2>number3 && number2+number3>number1 && number1+number3>number2 && number1===number2 && number2===number3 ){
    alert('Equilateral Triangle')
  }
  else if(number1+number2>number3 && number2+number3>number1&&number1+number3>number2 &&number1===number2||number2===number3||number1===number3){
    alert("Isoscelese Triangle")

  }
  else if(number1+number2>number3 && number1+number3>number2 && number1!=number2!=number3){
  alert ("Scalene Triangle")
  }
  else
  {
    alert("Not a Triangle")
  }
}
