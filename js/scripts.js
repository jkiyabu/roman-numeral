

var roman = function(input) {

  var value = [ 1000, 500, 100, 50, 10, 5, 4, 1 ];
  var symbol = ["M", "D", "C", "L", "X", "V", "IV", "I"];

  var result = " ";

  for (var index = 0; index < value.length; index++) {
    while (value[index] <= input) {
      console.log(index)
      result += symbol[index];
      input -= value[index];
    }
  }

  return result;
}

// var value = [1,5,10,50,100,500,1000];
// var symbol = ["I","V","X","L","C","D","M"];
//
// var roman = function(input) {
//   for(input = 0; input < 4; input += input){
//     return symbol[0] += symbol[0];
//   }
// }


//
$(document).ready(function() {
  $("form#romanNumeral").submit(function() {
    event.preventDefault();
    var input = parseInt($("#inputNumber").val());
    console.log(result);
    $("#result").text(roman(input));
  });
});
