function playgame(playerchoice){
    const choices = ["rock","paper","scissor"];
    const computerchoice = choices[Math.floor(Math.random()*3)]
    let result
    console.log(playerchoice)
    if (playerchoice === computerchoice) {
        result = "its a tie"
        
    }else if( playerchoice === "scissor" && computerchoice === "paper" ||
             playerchoice === "stone" && computerchoice === "scissor"||
             playerchoice === "paper" && computerchoice === "stone"){

                return result="congraturlation you won";


             }else{
               return result="sorry you lose";
             }

             document.getElementById("resultdisplay").innerHTML = "HELLO WORLD"
    }