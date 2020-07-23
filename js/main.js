let Game = function () {
    this.level = 0;
    this.currentPoint = 0;
    this.isOver = false;
    this.count = 0;

    this.getQuestion = function () {
        this.question = questions[this.level].question;
        return this.question;

    }
    this.getAnswer = function (level) {
        this.answer = questions[this.level].answers[level];
        return this.answer;

    }
    this.getElement = function (ID) {
         return document.getElementById(ID);
    }
    this.getCorrect = function () {
        if (this.isOver) return;
        return this.correct = questions[this.level].correct;
    }
    this.getPoint = function () {
        if (this.isOver) return;
        return this.currentPoint = questions[this.level].point;
    }
    // function userAnswer (event) {
    //     var id = event.path[0].id;
    //     id = id.split("_")[1];
    //     debugger
    // }
    this.showQuestion = function () {
        wait.play();
         this.getElement('question').innerHTML = this.getQuestion();
         this.getElement('box1').innerHTML =  this.getAnswer(0);
         this.getElement('box2').innerHTML =  this.getAnswer(1);
         this.getElement('box3').innerHTML =  this.getAnswer(2);
         this.getElement('box4').innerHTML =  this.getAnswer(3);
        for (let i = 0; i < 13; i++) {
            this.getElement('step'+i).innerHTML = questions[i].point +'$'
        }
    }
    this.restartGame = function () {
        this.isOver = false;
        window.location.reload();
    }
    this.switchQuestion = function () {
        if (this.isOver) return;
        this.level += 1;
        this.showQuestion();

    }
    this.makeSure = function () {
      return confirm('Bạn có chắc đáp án này không')
    }
    this.getWrongAnswer = function () {
        if (this.isOver) return;
        wrong.play();
        this.conditional();
        game.getElement('play-again').style.display = 'block';
        game.getElement('alert').innerHTML = 'Rất tiếc bạn đã trả lời sai';
        setTimeout(function () {
            game.getElement('alert').innerHTML = 'Bạn sẽ ra về với ' + game.currentPoint + '$';
        },2000);

        this.isOver = true;

    }
    this.conditional = function () {
        if (game.level > 5){
            wrong611.play();
            game.currentPoint = 1000;
        }
        if (game.level > 10){
            game.currentPoint = 100000;
        }

    }
    this.changeColorStep = function () {
        for (let i = 0; i < 13 ; i++) {
            if (this.currentPoint === questions[i].point){
                document.getElementById('step'+i).style.backgroundColor = 'orange';
                document.getElementById('step'+(i-1)).style.backgroundColor = '#3498db';
            }
            
        }

    }
    this.clearHalf = function () {
        this.count++;
        for (let i = 1; i < 4 ; i++) {
            if (game.getElement('box'+i).innerHTML !== game.getCorrect()){
                game.getElement('box'+i).innerHTML = '';

            }
        }
    }
}
// Set màu background cho alert
let a = document.getElementById('alert')
a.style.backgroundColor = 'orange';
a.style.color = 'white';
a.style.textAlign = 'center';

//Set hidden cho btn
document.getElementById('play-again').style.display = 'none';
document.getElementById('left').style.display = 'none';

//Set biến




