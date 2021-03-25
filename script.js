const number = 17
let guess = 0

document.getElementById('start').addEventListener('click', guesser)

function guesser () {
  while (guess !== number) {
    guess = prompt('Guess a number between 1 and 25')
    if (guess > number) {
      alert('To Big! Try Again!')
    } else if (guess < number) {
      alert('To Small! Try Again!')
    } else {
      alert('Congratulations! You guessed the right number')
    }
  }
}
