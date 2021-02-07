const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const keeper1 = document.querySelector("#player1");
const keeper2 = document.querySelector("#player2")
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const finishScore = document.querySelector("#score");

finishScore.addEventListener("change",function(){
    choosedScore = parseInt(finishScore.value);
    console.log(choosedScore);
})
let score1 = 0;
let score2 = 0;
btn1.addEventListener("click",function(){
    if(score1 != choosedScore){
        if(score2 < choosedScore){
            score1 +=1;
            keeper1.innerHTML = score1;
            console.log(score1);
        }
    }
    if(score1 == choosedScore){
        keeper2.classList.add("looser");
        keeper1.classList.add("winner");
    }
})
            
btn2.addEventListener("click",function(){
    if(score2 != choosedScore){
        if(score1 < choosedScore){
            score2 += 1;
            keeper2.innerHTML = score2;
            console.log(score2);
        }
    }
    if(score2 == choosedScore){
        keeper1.classList.add("looser");
        keeper2.classList.add("winner");
    }
    
})
btn3.addEventListener("click",function(){
    if(score1 > score2){
        keeper1.classList.remove("winner");
        keeper2.classList.remove("looser");
    }
    else if(score1 < score2){
        keeper1.classList.remove("looser");
        keeper2.classList.remove("winner");
    }
    score1 = 0;
    score2 = 0;
    keeper1.innerHTML = 0;
    keeper2.innerHTML = 0;
})
