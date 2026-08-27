let randomNumber = Math.floor(Math.random() * (100-1+1) + 1) // random number from 1 to 100

const attempts = document.querySelector('.attempts')
const form = document.querySelector('form')
const lowOrHigh = document.querySelector('#lowOrHigh')
const lastResult = document.querySelector('.lastResult')
const guesses = document.querySelector('.guesses')
const button = form.querySelector('button')
const image = document.querySelector('.images')
const newGame = document.querySelector('.resetParas')

const p = document.createElement('p')

let remainingGuesses = 10


const endGame = () => {
    p.classList = 'button'
    p.innerHTML = `<h2 id="restart"> Start Over </h2>`
    newGame.appendChild(p)
    p.addEventListener('click',startOver)
}

const startOver = () => {
    randomNumber = Math.floor(Math.random() * (100-1+1) + 1)
    document.querySelector('#guess-field').value = ''
    remainingGuesses = 10
    guesses.innerHTML = ''
    button.removeAttribute('disabled')
    newGame.removeChild(p)
    lowOrHigh.innerHTML = ''
    image.innerHTML = ''
    lastResult.innerHTML = remainingGuesses
}

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
        lowOrHigh.innerHTML = "You got it!"
        lowOrHigh.style.color = "#b8bb26"
        guesses.innerHTML = guesses.innerHTML + userNumber + " "
        button.setAttribute('disabled','')
        remImage();
        endGame();
        return
    }

    remainingGuesses--
    lastResult.innerHTML = remainingGuesses
    guesses.innerHTML = guesses.innerHTML + userNumber + " "
    displayMessage(userNumber)

    if(remainingGuesses <= 0) {
        lowOrHigh.innerHTML = `Game OVER! The number was ${randomNumber}.`
        lowOrHigh.style.color = "#cc241d"
        subaruImage();
        button.setAttribute('disabled','')
        endGame();
    }
})