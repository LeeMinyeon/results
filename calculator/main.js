const zero=document.getElementById("zero"), 
one = document.getElementById("one"),
two=document.getElementById("two"),
three=document.getElementById("three"),
four=document.getElementById("four"),
five=document.getElementById("five"),
six=document.getElementById("six"),
seven=document.getElementById("seven"),
eight=document.getElementById("eight"),
nine=document.getElementById("nine"),
plus=document.getElementById("plus"),
minus=document.getElementById("minus"),
times=document.getElementById("times"),
divid=document.getElementById("divid"),
clear=document.getElementById("clear"),
output=document.getElementById("output");

let checkFlg=true;
let result="";
let resultFlg=false;

function clearWrite(){
    result="";
    return result
}

function appendNumber(number){

    result+=number;
    checkFlg =false;
    return result
}
function appendOperator(operator){
    if(checkFlg) {
        return 
    }
    
    result+=operator;
    checkFlg=true;
    return result
}
function handleClick(input){
    if(resultFlg){
        clearWrite();
        resultFlg=false;
    }
        tempVal=input.target.value;
    if(tempVal==="clear"){
        clearWrite();
    }else if(tempVal==="plus"){
        appendOperator("+");
      
    }else if(tempVal==="minus"){
        appendOperator("-");
    
   
    }else if(tempVal==="times"){
        appendOperator("*");
       

    }else if(tempVal==="divid"){
        appendOperator("/");
       

    }else if(tempVal==="equal"){
        try{
        result=eval(result);
        resultFlg=true;
        }catch(e){
            clearWrite();
        }
        
    }else{
      
        appendNumber(tempVal);
        
        
    }
    if(result===""){
        output.value=0;
    }else{
        output.value=result;
    }
    
   

}


function init(){
  
    zero.addEventListener("click", handleClick);
    one.addEventListener("click", handleClick);
    two.addEventListener("click", handleClick);
    three.addEventListener("click", handleClick);
    four.addEventListener("click", handleClick);
    five.addEventListener("click", handleClick);
    six.addEventListener("click", handleClick);
    seven.addEventListener("click", handleClick);
    eight.addEventListener("click", handleClick);
    nine.addEventListener("click", handleClick);
    plus.addEventListener("click", handleClick);
    minus.addEventListener("click", handleClick);
    times.addEventListener("click", handleClick);
    divid.addEventListener("click", handleClick);
    clear.addEventListener("click", handleClick);
    equal.addEventListener("click", handleClick);
   
}
init();