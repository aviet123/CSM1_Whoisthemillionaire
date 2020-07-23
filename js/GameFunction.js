let game = new Game();
game.showQuestion();
function PlayAgain() {
    game.restartGame();
}
function StopTheGame() {
    game.getElement('alert').innerHTML = 'Bạn sẽ ra về với ' + game.currentPoint + '$';
    game.isOver = true;
    game.getElement('play-again').style.display = 'block';
    return game.isOver;
}
function coutinueGame() {
    game.switchQuestion();
    game.getElement('box1').style.backgroundColor = '#3498db';
    game.getElement('box2').style.backgroundColor = '#3498db';
    game.getElement('box3').style.backgroundColor = '#3498db';
    game.getElement('box4').style.backgroundColor = '#3498db';
    document.getElementById('left').style.display = 'none'

}
function WinTheGame() {
    if (game.currentPoint === 1000000){
        game.getElement('alert').innerHTML = ' CHÚC MỪNG BẠN ĐÃ TRỞ THÀNH TRIỆU PHÚ ';
    }

}
function Help5050(){
    helpsound.play();
    if (game.count === 1) return;
    game.clearHalf();

}

// chọn đáp án
function answer1() {
    //if (game.makeSure()) {
        if (game.getElement('box1').innerHTML === game.getCorrect()) {
            right.play()
            game.getElement('box1').style.backgroundColor = 'yellow';
            game.getElement('point').innerHTML = game.getPoint();
            document.getElementById('left').style.display = 'block'
            WinTheGame();
            game.changeColorStep();
        } else {
            game.getWrongAnswer();

        }
}

//}
function answer2() {
    //if (game.makeSure()) {
        if (game.getElement('box2').innerHTML === game.getCorrect()) {
            right.play();
            game.getElement('box2').style.backgroundColor = 'yellow';
            game.getElement('point').innerHTML = game.getPoint();
            document.getElementById('left').style.display = 'block'
            WinTheGame();
            game.changeColorStep();
        } else {
            game.getWrongAnswer();

        }
    }
//}
function answer3() {
   // if (game.makeSure()) {
        if (game.getElement('box3').innerHTML === game.getCorrect()) {
            right.play();
            game.getElement('box3').style.backgroundColor = 'yellow';
            document.getElementById('point').innerHTML = game.getPoint();
            document.getElementById('left').style.display = 'block'
            WinTheGame();
            game.changeColorStep();
        } else {
            game.getWrongAnswer();
        }
    }
//}

function answer4() {
   // if (game.makeSure()) {
        if (game.getElement('box4').innerHTML === game.getCorrect()) {
            right.play();
            game.getElement('box4').style.backgroundColor = 'yellow';
            document.getElementById('point').innerHTML = game.getPoint();
            document.getElementById('left').style.display = 'block'
            WinTheGame();
            game.changeColorStep();
        } else {
            game.getWrongAnswer();
        }
    }
//}