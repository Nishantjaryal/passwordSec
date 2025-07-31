const evnt = document.getElementById("Genpass")
const evntBack = document.getElementById("copypass")
const loader = document.getElementById("loader")
const pass = document.getElementById("pass")

const char = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&.?ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let str = ""

evnt.addEventListener("click",()=>{
    loader.style.top = 0
    for (let index = 0; index < 20; index++) {
        str += char[Math.floor(Math.random()*(char.length-1))];
    }

    pass.textContent = str

})
evntBack.addEventListener("click",()=>{

    navigator.clipboard.writeText(str)
    loader.style.top = "-100vh"
    str = ""

})
