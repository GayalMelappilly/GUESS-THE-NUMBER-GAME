function submit(){
    let rand = parseInt((Math.random()*1000));
    var answer = document.getElementById('answer').value
    
    if(answer==rand){
        var win = "YOU WON!"
        document.getElementById('screen').value=rand
        document.getElementById('win-lose').value=win
        console.log(win)  
    }else{
        var lose = "YOU LOSE!"
        document.getElementById('screen').value=rand
        document.getElementById('win-lose').value=lose
        console.log(lose)
    }
}

