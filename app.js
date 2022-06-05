let player = "O"
let wins = [0,0]
if(localStorage.getItem("player_1")){
    wins[0] = parseInt(localStorage.getItem('player_1'))
    wins[1] = parseInt(localStorage.getItem('player_2'))
}else{
    document.getElementById("resume").disabled = true
}
updateGame()
function resume(){
    document.getElementById("game").style.display = "block"
    document.getElementById("restart").style.display = "block"
    document.getElementById("start").style.display = "none"
    document.getElementById("resume").style.display = "none"
}
function start(){
    document.getElementById("game").style.display = "block"
    document.getElementById("restart").style.display = "block"
    document.getElementById("start").style.display = "none"
    document.getElementById("resume").style.display = "none"
    wins = [0,0]
    updateGame()
}

let field = [" "," "," "," "," "," "," "," "," "]
function updateGame(){
    document.getElementById("score_1").innerHTML = wins[0]
    document.getElementById("score_2").innerHTML = wins[1]
    if (player==="O"){
        document.getElementById("msg").innerHTML = "Player one's turn"
        
    }else if(player === "X"){
        document.getElementById("msg").innerHTML = "Player two's turn"
    }else{
        document.getElementById("msg").innerHTML = "Something went wrong try refreshing..."
    }
}


function makeRed(index){
    document.getElementById("d"+index).classList += " red"
}

function changePlayer(){
    if (player==="X"){
        player = "O"
        
    }else if(player === "O"){
        player = "X"
    }else{
        document.getElementById("msg").innerHTML = "Something went wrong try refreshing..."
    }
    updateGame()
    return player
}
function checkEnd(){
    winner = 'Winner is '
    if(field[0]===field[1] && field[1] ===field[2] && field[2] !==" "){
        winner += field[0]
    }else if(field[3]===field[4] && field[4] ===field[5] && field[5] !==" "){
        winner += field[3]
    }else if(field[6]===field[7] && field[7] ===field[8] && field[8] !==" "){
        winner += field[6]
    }else if(field[0]===field[4] && field[4] ===field[8] && field[8] !==" "){
        winner += field[0]
    }else if(field[2]===field[4] && field[4] ===field[6] && field[6] !==" "){
        winner += field[2]
    }else if(field[0]===field[3] && field[3] ===field[6] && field[6] !==" "){
        winner += field[6]
    }else if(field[1]===field[4] && field[4] ===field[7] && field[7] !==" "){
        winner += field[0]
    }else if(field[2]===field[5] && field[5] ===field[8] && field[8] !==" "){
        winner += field[2]
    }else{
        for(let i=0;i<9;i++){
            if(field[i] === " "){
                winner = 'continue'
                return winner
            }
        }
        winner = 'draw'
    }
    return winner

}

function markCell(index){
    if(document.getElementById("p"+index).innerHTML !== " "){
        alert("Already Selected My Friend!")
        return
    }
    document.getElementById("p"+index).innerHTML = player
    field[index-1] = player
    
    if (checkEnd()!=="continue"){
        endGame()
    }
    changePlayer()
}

function endGame(){
    if(player === "X"){
        alert("Game over\n" + "Player Two Wins!"+ ": X")
    }else if(player ==="O"){
        alert("Game over\n" + "Player One Wins!"+ ": O")
    }else{
        alert("Game over\n" + "Draw!")
    }
    if(checkEnd()!=="draw"){
        if (player==="O"){
            wins[0]+=1
        }else {
            wins[1]+=1
        }
    }
    localStorage.setItem("player_1", wins[0])
    localStorage.setItem("player_2", wins[1])
    location.reload()
    
}
function restartGame(){
    localStorage.clear()
    location.reload()
}