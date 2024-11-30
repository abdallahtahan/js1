var counter = 0;
 function increment(){
 
    counter++
   document.getElementById("demo").innerHTML =counter;


}
 function decrement(){

    counter--
   document.getElementById("demo").innerHTML =counter;


}
function dolar(){
var x = document.getElementById("tx").value;
   var y = document.getElementById("rel");
   

   if(x==""){
     
      y.innerHTML="enter data";

   }

else if (x<=0){
   y.innerHTML="enter postive num";


}
else if(isNaN(x)){
 y.innerHTML="enter  num";
}





else{
    y.innerHTML = x * 50;

 }
   
 document.getElementById("sorry").innerHTML=" اسف علي التاخير يا بشمهندس ";
   return false;



}

var x= "abdallah ahmed FuCk eltahan fuck";
console.log(x.length);
console.log(x.indexOf("e",13))
console.log(x.lastIndexOf("h",15));
console.log(x.search("h"));
console.log(x.slice());
console.log(x.substring(7));
console.log(x.substr(0,8));
console.log(x.replace(/fuck/ig,"###"));
console.log(x.toLocaleUpperCase());
console.log(x.toLocaleLowerCase());
var y =  '       ahmed      ';

console.log(y.trim());

console.log(x.charAt(0));
