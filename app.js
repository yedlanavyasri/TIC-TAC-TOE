if(typeof window !== "undefined"){
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbutton");
let newGame = document.querySelector("#new-Game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn1 = true; //player1,player2

let firstPlayer = prompt("Enter the name of First Player : ");
let secondPlayer = prompt("Enter the name of Second Player : ")

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turn1=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    box.innerText=" ";

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn1){
            box.innerText="O";
            turn1=false;
        }else{
            box.innerText="X";
            turn1=true;
        }
        box.disabled = true;

        checkWinner();
 });
});

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled=true;
        //box.innerText=" ";
    }
};

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
};

const showWinner = (position1, position2, position3,Winner)=>{
    if(position1 === position2 && position2 === position3){
        if(position1=='O'){
            Winner=firstPlayer;
    }else{
        Winner = secondPlayer;
    }
    }
    
            msg.innerText = `Congratulations ${Winner}! You did it.`;
            
            msgContainer.classList.remove("hide");
            disableBoxes();

};

const checkWinner =()=> {
    for(pattern of winPatterns){
        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                let WonPlayer = pos1;
                showWinner(pos1,pos2,pos3,WonPlayer);
            }
        }
    }
};

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
}
