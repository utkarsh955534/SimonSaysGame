let gameSeq = [];
let userseq = [];

let btns = ["pink", "orange", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("Game started")
        started = true;
    }

    levelUp();
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 250);
}


function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`)
    // console.log(randColor); 
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randbtn);
}

function checkAns(idx){
    // console.log(`curr level: ${level}`)
    // let idx = level-1;
    if(userseq[idx] === gameSeq[idx]){
        if(userseq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any to start`
        reset();
    }
}

function btnPress() {
    let btn = this;
    
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}


function reset(){
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}
