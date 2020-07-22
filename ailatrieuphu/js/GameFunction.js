let game = new Game();
game.showQuestion();
function PlayAgain() {
    game.restartGame();
}
function StopTheGame() {
    game.getElement('alert').innerHTML = 'Bạn sẽ ra về với ' + game.currentPoint + '$';
    game.isOver = true;
    return game.isOver;

}
function WinTheGame() {
    if (game.currentPoint === 1000000){
        game.getElement('alert').innerHTML = ' CHÚC MỪNG BẠN ĐÃ TRỞ THÀNH TRIỆU PHÚ ';
    }

}

// chọn đáp án
function answer1() {
    //if (game.makeSure()) {
        if (game.getElement('boxA').innerHTML === game.getCorrect()) {
            right.play()
            setTimeout(function () {
                game.getElement('boxA').style.backgroundColor = 'yellow';
            }, 500)
            //
            game.getElement('point').innerHTML = game.getPoint();
            WinTheGame();
            //
            setTimeout(function () {
                game.switchQuestion();
                game.getElement('boxA').style.backgroundColor = '#3498db';
            }, 3000);
            game.changeColorStep();
        } else if (game.getElement('boxA').innerHTML !== game.getCorrect()) {
            game.getWrongAnswer();
        }
    }

//}
function answer2() {
    //if (game.makeSure()) {
        if (game.getElement('boxB').innerHTML === game.getCorrect()) {
            right.play();
            setTimeout(function () {
                game.getElement('boxB').style.backgroundColor = 'yellow';
            }, 500)
            //
            game.getElement('point').innerHTML = game.getPoint();
            WinTheGame();
            //
            setTimeout(function () {
                game.switchQuestion();
                game.getElement('boxB').style.backgroundColor = '#3498db';
            }, 3000);
            game.changeColorStep();
        } else if (game.getElement('boxB').innerHTML !== game.getCorrect()) {
            game.getWrongAnswer();
        }
    }
//}
function answer3() {
   // if (game.makeSure()) {
        if (game.getElement('boxC').innerHTML === game.getCorrect()) {
            right.play();
            setTimeout(function () {
                game.getElement('boxC').style.backgroundColor = 'yellow';
            }, 500)
            //
            document.getElementById('point').innerHTML = game.getPoint();
            WinTheGame();
            //
            setTimeout(function () {
                game.switchQuestion();
                game.getElement('boxC').style.backgroundColor = '#3498db';
            }, 3000)
            game.changeColorStep();
        } else if (game.getElement('boxC').innerHTML !== game.getCorrect()) {
            game.getWrongAnswer();
        }
    }
//}

function answer4() {
   // if (game.makeSure()) {
        if (game.getElement('boxD').innerHTML === game.getCorrect()) {
            right.play();
            setTimeout(function () {
                game.getElement('boxD').style.backgroundColor = 'yellow';
            }, 500)
            //
            document.getElementById('point').innerHTML = game.getPoint();
            WinTheGame();
            //
            setTimeout(function () {
                game.switchQuestion();
                game.getElement('boxD').style.backgroundColor = '#3498db';
            }, 3000);
            game.changeColorStep();
        } else if (game.getElement('boxD').innerHTML !== game.getCorrect()) {
            game.getWrongAnswer();
        }
    }
//}