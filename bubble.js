const Que = document.getElementById("expandQuestion")
const Ans = document.getElementById("expandAnswer")


setTimeout(() => {
    Que.style.scale = 1;
    setTimeout(() => {
        Ans.style.scale = 1;
    }, 500)
}, 500)