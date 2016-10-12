var number = ["A", "B", "C", "D","F"];

var score= Number(prompt("what is score?"));
if(score>90){
    alert(number[0]);
}
else if(score>80){
    alert(number[1]);
}
else if(score>70){
    alert(number[2]);
}
else if(score>60){
    alert(number[3]);
}
else{
    alert(number[4]);
}