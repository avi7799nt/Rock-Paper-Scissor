let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx]
// rock,paper,scissors
}
const drawgame=()=>{

msg.innerText=" Game Was Draw ! play Again...!! "
msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Win!")
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lose")
          msg.innerText=`You Lose. Comp ${compChoice} beats ${userChoice}`
          msg.style.backgroundColor="red";
          
    }
}
const playGame=(userChoice)=> {
// console.log("user Choice = ",userChoice);
// Generate computer choice
const compChoice=genCompChoice();
// console.log("Comp Choice = ", compChoice);

if(userChoice===compChoice){

drawgame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //Scissors,paper
         userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        // rock,Scissors
       userWin= compChoice==="scissors" ?false:true;
    }
    else{
        // rock,paper
         userWin=compChoice==="rock" ? false:true;
    }

    showWinner(userWin,userChoice,compChoice)
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    // console.log("choice was clicked",userChoice);
playGame(userChoice)
    });
})
