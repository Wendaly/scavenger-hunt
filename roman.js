var number = prompt("What number do you want to convert?");
alert(convert(number));
function convert(number){
  var tens= Number(number.toString().charAt(0));
  var tensroman= "X".repeat(tens);
  var ones= number.toString().charAt(1);
  var onesroman;
  if(ones < 4){
    onesroman= "I".repeat(ones);
  } 
  else{
    var oneshardcoded={
      "4":"IV",
      "5":"V",
      "6":"VI",
      "7":"VII",
      "8":"VIII",
      "9":"IX"
    };
    onesroman= oneshardcoded[ones];
  }
  var finalnumber= tensroman+onesroman;
  return finalnumber;
}