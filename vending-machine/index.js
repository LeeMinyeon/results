const tea=document.getElementById("tea"),
coffee=document.getElementById("coffee"),
water=document.getElementById("water"),
oneThou=document.getElementById("1000"),
fiveHun=document.getElementById("500"),
oneHun=document.getElementById("100");


const currentMoney=document.querySelector(".current-money");
let coin=0;

function colorChange(){
    if(coin>=1000){
        tea.style.color="blue";
        coffee.style.color="blue";
        water.style.color="blue";

    }else if(coin>=700){
        tea.style.color="red";
        coffee.style.color="blue";
        water.style.color="blue";
    }else if(coin>=500){
        tea.style.color="red";
        coffee.style.color="red";
        water.style.color="blue";
    }else{
        tea.style.color="red";
        coffee.style.color="red";
        water.style.color="red";
    }

}

function handleClick(event){
    let insertPrice=Number(event.target.value);
    console.log(typeof(oneThou.value));
    if(insertPrice===Number(oneThou.value)){
        coin+=insertPrice;
        colorChange();
        currentMoney.innerHTML=coin;
    }
    if(insertPrice===Number(fiveHun.value)){
        coin+=insertPrice;
        colorChange();
        currentMoney.innerHTML=coin;

    }
    if(insertPrice===Number(oneHun.value)){
        coin+=insertPrice;
        colorChange();
        currentMoney.innerHTML=coin;
        
    }


}
function menuClick(menu){
    let choice=menu.target.value;
    if(choice===tea.value){
        if(coin<1000){
            alert("お金を入れてください。");
        }else{
        coin-=1000;
        colorChange();
        currentMoney.innerHTML=coin;
        }
    }else if(choice===coffee.value){
        if(coin<700){
            alert("お金を入れてください。");
        }else{
        coin-=700;
        colorChange();
        currentMoney.innerHTML=coin;
        }
    }else{
        if(coin<500){
            alert("お金を入れてください。");
        }else{
        coin-=500;
        colorChange();
        currentMoney.innerHTML=coin;
        }
    }
}
function init(){
    currentMoney.innerHTML=coin;
    oneThou.addEventListener("click",handleClick);
    fiveHun.addEventListener("click",handleClick);
    oneHun.addEventListener("click",handleClick);
    tea.addEventListener("click", menuClick);
    coffee.addEventListener("click", menuClick);
    water.addEventListener("click", menuClick);
    
}
init();