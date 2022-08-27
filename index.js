const btnTry = document.getElementById("try");
const piano = document.getElementById("piano");

// Chords
const chord = document.getElementById("chord");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const a = document.getElementById("a");

// Not Angka
const DO = document.getElementById("1");
const RE = document.getElementById("2");
const MI = document.getElementById("3");
const FA = document.getElementById("4");
const SOL = document.getElementById("5");
const LA = document.getElementById("6");
const SI = document.getElementById("7");
const DOHI = document.getElementById("i");

btnTry.addEventListener("click", () => {
    btnTry.classList.add("hide");
    piano.classList.remove("hide");
    piano.classList.add("show");
    chord.classList.remove("hide");
    chord.classList.add("show");
});

c.addEventListener("click", () => {
    DO.classList.toggle("show-hint");
    MI.classList.toggle("show-hint");
    SOL.classList.toggle("show-hint");

    var c_audio = new Audio("assets/sounds/c.mp4");
    c_audio.play();

    setInterval(() => {
        DO.classList.remove("show-hint");
        MI.classList.remove("show-hint");
        SOL.classList.remove("show-hint");
    }, 500);
});

d.addEventListener("click", () => {
    RE.classList.toggle("show-hint");
    FA.classList.toggle("show-hint");
    LA.classList.toggle("show-hint");

    var d_audio = new Audio("assets/sounds/d.mp4");
    d_audio.play();

    setInterval(() => {
        RE.classList.remove("show-hint");
        FA.classList.remove("show-hint");
        LA.classList.remove("show-hint");
    }, 500);
});

e.addEventListener("click", () => {
    MI.classList.toggle("show-hint");
    SOL.classList.toggle("show-hint");
    SI.classList.toggle("show-hint");

    var e_audio = new Audio("assets/sounds/e.mp4");
    e_audio.play();

    setInterval(() => {
        MI.classList.remove("show-hint");
        SOL.classList.remove("show-hint");
        SI.classList.remove("show-hint");
    }, 500);
});

f.addEventListener("click", () => {
    FA.classList.toggle("show-hint");
    LA.classList.toggle("show-hint");
    DOHI.classList.toggle("show-hint");

    var f_audio = new Audio("assets/sounds/f.mp4");
    f_audio.play();

    setInterval(() => {
        FA.classList.remove("show-hint");
        LA.classList.remove("show-hint");
        DOHI.classList.remove("show-hint");
    }, 500);
});

g.addEventListener("click", () => {
    RE.classList.toggle("show-hint");
    SOL.classList.toggle("show-hint");
    SI.classList.toggle("show-hint");

    var g_audio = new Audio("assets/sounds/g.mp4");
    g_audio.play();

    setInterval(() => {
        RE.classList.remove("show-hint");
        SOL.classList.remove("show-hint");
        SI.classList.remove("show-hint");
    }, 500);
});

a.addEventListener("click", () => {
    LA.classList.toggle("show-hint");
    MI.classList.toggle("show-hint");
    DOHI.classList.toggle("show-hint");

    var a_audio = new Audio("assets/sounds/a.mp4");
    a_audio.play();

    setInterval(() => {
        LA.classList.remove("show-hint");
        MI.classList.remove("show-hint");
        DOHI.classList.remove("show-hint");
    }, 500);
});

