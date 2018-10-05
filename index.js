function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var guess = elements.guess.value;
    console.log('guess', guess);
    var result = document.getElementById('result')
    result.textContent = 'You made a guess of ' + guess;
    var answer = 10;
    if (guess == answer) {result.textContent = 'Correct!';}
    else if (guess > answer) {result.textContent = 'Too high!';}
    else if (guess < answer) {result.textContent = 'Too low!';}

    // if equal -> correct
    // else if less than -> too low
    // else -> too high
}