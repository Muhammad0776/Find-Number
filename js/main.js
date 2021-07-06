let son = Math.floor(Math.random() * 100);

const count = document.querySelector("#count");
const status = document.querySelector("#status");
const statusp = document.querySelector("#statusp");
const number = document.querySelector("#number");
const modal = document.querySelector("#modal");
const success = document.querySelector("#success");
const error = document.querySelector("#error");
const player = document.querySelector("#player");

let step = 10;

const checkNumber = () => {
    let currentNumber = number.value;
    if (currentNumber == "") return;

    count.innerHTML = --step;
    statusp.classList.remove("invisible");

    if (currentNumber == son) {
        //modal oynani ochish
        modal.classList.remove("d-none");
        success.classList.remove("d-none");

        //win mp3ni yoqish
        player.src = "./audio/win.mp3";
        player.play();
    } else if (currentNumber > son) {
        status.innerHTML = "katta";
    } else if (currentNumber < son) {
        status.innerHTML = "kichik";
    }

    if (step == 0) {
        //modal oynani ochish
        modal.classList.remove("d-none");
        error.classList.remove("d-none");

        //yutqizgan mp3ni yoqish
        player.src = "./audio/over.mp3";
        player.play();
    }
};

const reload = () => {
    modal.classList.add("d-none");
    success.classList.add("d-none");
    error.classList.add("d-none");

    son = Math.floor(Math.random() * 100);

    step = 10;
    count.innerHTML = step;
    number.value = "";

    statusp.classList.add("invisible");
};
