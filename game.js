const userinput = document.querySelector(".guessfield")
const submit = document.querySelector(".submitfield")
const guesses = document.querySelector(".guesses")
const remaining =document.querySelector(".remaining")
const loworhigh = document.querySelector(".loworhigh")
const results  = document.querySelector(".results")
const messageElement = document.querySelector(".Message")

let randomnumber = parseInt(Math.random() *100 + 1);

const p = document.createElement("p");

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = (userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if( guess < 1){
        alert("Please enter a number between 1-100")
    }
    else if( guess > 100){
        alert("Please enter a number between 1-100")
    }
    else{
        prevGuess.push(guess)
        if( numGuess === 7){
            checkGuess(guess)
            displayMessage(`Game Over: The Random number is ${randomnumber}`)
            checkGuess()
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess == randomnumber){
        endGame()
        displayMessage(`<h2>You Won, already guessed the correct number</h2> 
            (${randomnumber})`)
    }else if( guess < randomnumber){
        displayMessage("You guessed low")
    }
    else if( guess > randomnumber){
        displayMessage("You guessed high")
    }
}

function displayGuess(guess){
    userinput.value =""
    guesses.innerHTML += `${guess}, `
    numGuess++ ;
    remaining.innerHTML = `${Math.max(0,7 - numGuess)}`
}

function displayMessage(Message){
    
    messageElement.innerHTML = `<h2>${Message}</h2>`
}

function endGame(){
    userinput.value = ""
    userinput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 class = "newGame">New Game</h2>`
    results.appendChild(p)
    playGame = false;
    newGame()
}
function newGame(){
    const newbutton = document.querySelector(".newGame")
    newbutton.addEventListener("click", function(e){
        randomnumber = parseInt(Math.random() *100 + 1);
        prevGuess = []
        numGuess = 1
        guesses.innerHTML = ""
         remaining.innerHTML = `${Math.max(0,7 - numGuess)}`
        userinput.removeAttribute("disabled")
        results.removeChild(p)
        messageElement.innerHTML = ""
        playGame = true;
    })
}
