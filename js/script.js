'use strict'

function calculator(){

    const num = this.innerText
    const screen = document.querySelector('input')

    if(num === 'C'){
        screen.value = ""
    }else if(num === '='){
        screen.value = eval(screen.value)
    }else{
        screen.value += num
    }
}

const btns = document.querySelectorAll('button')

btns.forEach(element => {
    element.addEventListener('click', calculator);
});