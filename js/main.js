let myElem = document.getElementById("srb");
let cas = 0;
let list = document.querySelectorAll('.nav');
let menu = document.querySelectorAll('.dishes-container');
let ico = document.getElementById("drop-ic");
let drop = document.getElementById("menu");

function appear() {

    myElem.classList.add("active-sr");

}
function disaper() {
    myElem.classList.remove("active-sr");
}

function listappear() {
    if (list[0].classList.contains("active-ls")) {
        list[0].classList.remove("active-ls");
    } else {
        list[0].classList.add("active-ls");
    }
}

function menu1() {
    menu[0].classList.add('active-menu');
    menu[1].classList.remove('active-menu')
    menu[2].classList.remove('active-menu')
}
function menu2() {
    menu[1].classList.add('active-menu');
    menu[0].classList.remove('active-menu')
    menu[2].classList.remove('active-menu')
}
function menu3() {
    menu[2].classList.add('active-menu');
    menu[1].classList.remove('active-menu')
    menu[0].classList.remove('active-menu')
}
function drop1() {
    if (!drop.classList.contains("inactive")) {
        console.log(drop);
        drop.style.display = 'none'
    }
}