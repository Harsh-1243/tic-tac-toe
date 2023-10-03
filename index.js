 var boxes = document.querySelectorAll(".box");

 var turn = "x";

 var isGameOver = false;

boxes.forEach((b)=>{
    
    b.innerHTML = "";

    b.addEventListener("click",()=>{

        if (!isGameOver && b.innerHTML === "") {

            b.innerHTML = turn;

            checkWin();
            checkDraw();
            changeTurn();

        }
       
    })
    
})

function checkWin() {
    
    let winCondition = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    for (let i = 0; i < winCondition.length; i++) {
        
        let temp1 = boxes[winCondition[i][0]].innerHTML;
        let temp2 = boxes[winCondition[i][1]].innerHTML;
        let temp3 = boxes[winCondition[i][2]].innerHTML;

        if (temp1 !== "" && temp1 === temp2 && temp2 === temp3) {
            
            isGameOver = true;

            document.querySelector("#result").innerHTML = turn + " WON";

            document.querySelector("#play-again").style.display = "inline";


            for (let j = 0; j < 3; j ++) {
                
                    boxes[winCondition[i][j]].style.backgroundColor = "#08d0d6";

                    boxes[winCondition[i][j]].style.color = "#000";


            }
        }
    }
}

function checkDraw() {

    if (!isGameOver) {
        
        let isDraw = true;

        boxes.forEach(b =>{

            if (b.innerHTML === "") {
                
                isDraw = false;
            }
        })

        if (isDraw) {
            
            isGameOver = true;

            document.querySelector("#result").innerHTML = "Draw";

            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

function changeTurn() {

    if (turn === "x") {
        turn = "o";
        document.querySelector(".bg").style.left = "100px";

    }
    else{

        turn = "x";
        document.querySelector(".bg").style.left = "0";
    }

}

document.querySelector("#play-again").addEventListener("click",()=>{

    isGameOver = false;

    turn = "x";

    document.querySelector(".bg").style.left = "0";

    document.querySelector("#result").innerHTML = "";

    document.querySelector("#play-again").style.display = "none";


    boxes.forEach((e)=>{

        e.innerHTML = "";

        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    })
})