 function playgame(playerchoice){
    const choices = ["rock","paper","scissor"];
    const computerchoice= choices[Math.floor(Math.random()*3)]
    console.log(computerchoice)
    let result;
    if (playerchoice === computerchoice) {
        result = "its a tie"
        
    }else if( playerchoice === "scissor" && computerchoice === "paper" ||
             playerchoice === "stone" && computerchoice === "scissor"||
             playerchoice === "paper" && computerchoice === "stone")
            {
               result="congraturlation you won";
             }else{
               result="sorry you loose";
             }
            
             document.getElementById("result").innerHTML = "playerchoice: " + playerchoice +" <br>" +
             "computerChoice: " + computerchoice + "<br>" +
             "result: " + result ;
             
    }