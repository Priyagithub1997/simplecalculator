var screen=document.getElementById("screen");
var clear=document.getElementByClassName("clear");
var num=document.getElementByClassName("num");

function displayvalue(val)
 {
   
    console.log(val);
    screen.value=screen.value + val;

 }

 function displayclear(){
   screen.value="";
 }

 function calculate(){
   var result=eval(screen.value);

 screen.value=result;

 }