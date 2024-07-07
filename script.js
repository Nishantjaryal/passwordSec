const input = document.getElementById("password")
const result = document.getElementById("result")
const time = document.getElementById("time")
const resultBox = document.getElementById("resultBox")
const body = document.getElementById("passBox-container")



const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const digits = '0123456789'.split('');
const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?'.split('');






function command(score,length) {


    if (score === -1) {
        resultBox.style.scale = 0
        result.textContent = ""
        body.style.background = "#49843c"
    }
    if(score !== -1){
        resultBox.style.scale = 1
    }
    if (score <= 4 && score >= 0) {
        result.textContent = "🔴 Very Poor Password"
        body.style.background = "#cc5d3e"
    }
    if (score <= 8 && score > 4) {
        result.textContent = "⚠️ Poor Password"
        body.style.background = "#ffa200"
    }
    if (score <= 11 && score > 9) {
        result.textContent = "👍 Good Password"
        body.style.background = "#ffd500"
    }
    if (score <= 16 && score > 11) {
        result.textContent = "✨ Strong Password"
        body.style.background = "#50c646"
    }
    if (score > 16) {
        result.textContent = "🌟 Very Strong Password"
        body.style.background = "#3083ff"
    }
  

    let timeTaken = (Math.pow(94,length)/Math.pow(10,14))

    if (timeTaken<=60){
        time.textContent = timeTaken.toExponential(1) + " Seconds to Bruteforce"
    }
    else if (timeTaken<=60){
        time.textContent = (timeTaken/60).toExponential(1) + " Minutes to Bruteforce"
    }
    else if (timeTaken<=3600){
        time.textContent = (timeTaken/60*60).toExponential(1) + " Hours to Bruteforce"
    }
    else if (timeTaken<=86400){
        time.textContent = (timeTaken/60*60*24).toExponential(1) + " Days to Bruteforce"
    }
    else if (timeTaken<=2592000){
        time.textContent = (timeTaken/60*60*24*30).toExponential(1) + " Months to Bruteforce"
    }
    else if (timeTaken<=31104000){
        time.textContent = (timeTaken/60*60*24*30*12).toExponential(1) + " Years to Bruteforce"
    }
    else if (timeTaken<=31104000000000000){
        time.textContent = (timeTaken/60*60*24*30*12*1000000000).toExponential(1) + " Billion Years to Bruteforce"
    }
    else if (timeTaken<=311040000000000000000000000000){
        time.textContent = (timeTaken/60*60*24*30*12*100000000000000000000000).toExponential(1) + " Quintillion Years to Bruteforce"
    }


    if (score === -2) {
        result.textContent = "⛔ Spaces not allowed"
        time.textContent = "Not Counted"
        body.style.background = "red"
    }
}


let score = -1

function check(text) {

    if (text === "") {
        score = -1
    }
    if (text.length <= 4 && text.length > 0) {
        score = 1
    }
    if (text.length <= 6 && text.length > 4) {
        score = 6
    }
    if (text.length <= 11 && text.length > 6) {
        score = 8
    }
    if (text.length <= 16 && text.length > 11) {
        score = 10
    }
    if (text.length > 16) {
        score = 12
    }


    text = text.split("")
    let islowercase = false;
    if (!islowercase) {
        text.forEach((char) => {
            lowercase.forEach((ele) => {
                if (char === ele && !islowercase) {
                    islowercase = true
                    score+=2

                }
            })
        });
    }



    let isUppercase = false;
    if (!isUppercase) {
        text.forEach((char) => {
            uppercase.forEach((ele) => {
                if (char === ele && !isUppercase) {
                    isUppercase = true
                    score+=2

                }
            })
        });
    }


    let isDigit = false;
    if (!isDigit) {
        text.forEach((char) => {
            digits.forEach((ele) => {
                if (char === ele && !isDigit) {
                    isDigit = true
                    score+=2

                }
            })
        });
    }

    let isSpecial = false;
    if (!isSpecial) {
        text.forEach((char) => {
            specialCharacters.forEach((ele) => {
                if (char === ele && !isSpecial)  {
                    isSpecial = true
                    score+=2
                }
            })
        });
    }

    text.forEach((ele)=>{
          if(ele ===" "){
            score = -2
          }
    })


    console.log(score)
    command(score,text.length)
}
setInterval(() => {
    check(input.value)
}, 100);

