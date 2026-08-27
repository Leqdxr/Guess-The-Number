let randomNumber = Math.floor(Math.random() * (100-1+1) + 1) // random number from 1 to 100

const attempts = document.querySelector('.attempts')
const form = document.querySelector('form')
const lowOrHigh = document.querySelector('#lowOrHigh')
const lastResult = document.querySelector('.lastResult')
const guesses = document.querySelector('.guesses')
const button = form.querySelector('button')
const image = document.querySelector('.images')

let remainingGuesses = 10

const remImage = () => {
    image.innerHTML = ""
    const rem = document.createElement('img')
    rem.width = 300
    rem.height = 300
    rem.alt = "rem"
    rem.src = "./images/rem_thumbsUp.png"
    image.appendChild(rem)
}

const subaruImage = () => {
    image.innerHTML = ""
    const subaru = document.createElement('img')
    subaru.width = 300
    subaru.height = 300
    subaru.alt = "subaru"
    subaru.src = "./images/subaruHiguruma.jpg"
    image.appendChild(subaru)
}

const displayMessage = (userNumber) => {
    if(userNumber > randomNumber) {
        lowOrHigh.innerHTML = "Try Lower"
        lowOrHigh.style.color = "#fe8019"
    }
    else {
        lowOrHigh.innerHTML = "Try Higher"
        lowOrHigh.style.color = "#fe8019"
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userNumber = parseInt(document.querySelector('#guess-field').value)
    
    if(userNumber > 100 || userNumber < 0 || isNaN(userNumber)) {
        lowOrHigh.innerHTML = "Please enter a valid number"
        lowOrHigh.style.color = "#cc241d"
        return
    }
    if(userNumber === randomNumber) {
        lowOrHigh.innerHTML = "You got it! Refresh the page to play again"
        lowOrHigh.style.color = "#b8bb26"
        guesses.innerHTML = guesses.innerHTML + userNumber + " "
        button.disabled = true
        remImage();
        return
    }

    remainingGuesses--
    lastResult.innerHTML = remainingGuesses
    guesses.innerHTML = guesses.innerHTML + userNumber + " "
    displayMessage(userNumber)

    if(remainingGuesses <= 0) {
        lowOrHigh.innerHTML = `Game OVER! The number was ${randomNumber}. Refresh the page to try again later`
        lowOrHigh.style.color = "#cc241d"
        subaruImage();
        button.disabled = true
    }
})