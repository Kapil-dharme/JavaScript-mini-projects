let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let parauser = document.querySelector(".userpara");
let paracomp = document.querySelector(".comppara")
let paragraph = document.querySelector(".paragraph");
let Rock = 1;
let Paper = 2;
let Scissors = 3;
let userchoice, compchoice, userscore = 0, compscore = 0;

const computerchoice = () => {
    compchoice = Math.floor(1 + Math.random() * 3);
    return compchoice;
}

const checkwinner = () => {
    if (userchoice == compchoice) {

        paragraph.innerHTML = "TIE"
    }
    else if (userchoice = 1 && compchoice == 2) {

        compscore++;
        paracomp.innerHTML = compscore;
        paragraph.innerHTML = "COMPUTER WINS.PAPER beats your ROCK"
    }
    else if (userchoice = 1 && compchoice == 3) {

        userscore++;
        parauser.innerHTML = userscore
        paragraph.innerHTML = "YOU WIN.Your ROCK beats Computer's SCISSORS "
    }
    else if (userchoice = 2 && compchoice == 1) {

        userscore++;
        parauser.innerHTML = userscore
        paragraph.innerHTML = "YOU WIN.Your PAPER beats Computer's ROCK "
    }
    else if (userchoice = 2 && compchoice == 3) {

        compscore++;
        paracomp.innerHTML = compscore;
        paragraph.innerHTML = "COMPUTER WINS.SCISSORS beats your PAPER"
    }
    else if (userchoice = 3 && compchoice == 1) {

        compscore++;
        paracomp.innerHTML = compscore;
        paragraph.innerHTML = "COMPUTER WINS.ROCK beats your SCISSORS"
    }
    else if (userchoice = 3 && compchoice == 2) {

        userscore++;
        parauser.innerHTML = userscore
        paragraph.innerHTML = "YOU WIN.Your SCISSORS beats Computer's PAPER "
    }
}

rock.addEventListener("click", () => {
    userchoice = 1
    computerchoice();
    checkwinner();
    paragraph.classList.remove("hide")
})
paper.addEventListener("click", () => {
    userchoice = 2
    computerchoice();
    checkwinner();
    paragraph.classList.remove("hide")
})
scissors.addEventListener("click", () => {
    userchoice = 3
    computerchoice();
    checkwinner();
    paragraph.classList.remove("hide")
})