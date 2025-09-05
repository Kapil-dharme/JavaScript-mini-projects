let button = document.querySelectorAll(".container button");
let reset = document.querySelector(".resetbutton");
let winner = document.querySelector(".messagewinner p");
let gamenew = document.querySelector(".newg");
let msgwinner = document.querySelector(".messagewinner");
let clickbtn = 0;
let turnx = true;

let winarray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

const hide = () => {
    msgwinner.classList.toggle("hide");
};

const checkwinner = () => {
    let iswinner = false;


    for (const patterns of winarray) {
        let pos1 = button[patterns[0]].innerText;
        let pos2 = button[patterns[1]].innerText;
        let pos3 = button[patterns[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner.innerText = `WINNER IS :- ${pos1}`;
                button.forEach(el => el.disabled = true);
                hide();
                iswinner = true;
                break;
            }
        }
    }

    if (!iswinner && clickbtn === 9) {
        winner.innerText = `DRAW`;
        button.forEach(el => el.disabled = true);
        hide();
    }
};

const resetGame = () => {
    clickbtn = 0;
    turnx = true;
    button.forEach(el => {
        el.innerText = "";
        el.disabled = false;
    });
};


button.forEach(el => {
    el.addEventListener("click", () => {
        if (turnx) {
            el.innerText = "X";
            turnx = false;
        } else {
            el.innerText = "O";
            turnx = true;
        }
        el.disabled = true;
        clickbtn++; 
        checkwinner();
    });
});


reset.addEventListener("click", resetGame);
gamenew.addEventListener("click", () => {
    resetGame();
    hide();
});
