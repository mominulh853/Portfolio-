
let display = document.getElementById('display')

// console.log(display.innerHTML.length)

function appendTodisplay(value) {
    display.innerHTML += value

    let displayText = display.innerHTML.trim()

    if (displayText.length > 13) {
        display.style.fontSize = '2rem';
       
    }
    else if (displayText.length > 10) {
        display.style.fontSize = '3rem';
    } else {
        display.style.fontSize = '4rem'; // Corrected this line
    }
}

function calc() {
    try {
        display.innerHTML = eval(display.innerHTML)
    } catch (error) {
        display.innerHTML = 'Error'
    }
}

function allclear() {
    display.innerHTML = ""
    display.style.fontSize = '4rem'; // Corrected this line
}


function signchange(){

    let number  = parseFloat(display.innerHTML)
    if(number>0){
       display.innerHTML = -number
    }else if(number<0){
       display.innerHTML = Math.abs(number)
    }
}

