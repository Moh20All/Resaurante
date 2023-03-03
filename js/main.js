let myElem = document.getElementById("srb");
let cas = 0;
let list = document.querySelectorAll('.nav');
console.log(list[0].classList.contains("active-ls"));

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