// set value of global variables
var guessCount = 0;
var min = 1;
var max = 999;
var gameOver = false;

//create a function that uses binary search to guess user input number
function submitGuess() {
    //userInput is user input value
    var userInput = document.getElementById("userinput").value;
    //guess is midpoint between min and max numbers
    var guess = Math.floor((min + max)/2);
    //output is indication of guess results
    var output = document.getElementById("output");
    //check if user has entered a whole number from 1 to 999
    if (userInput % 1 != 0 || userInput < 1 || userInput > 999) {
        alert("The user's input is invalid. Don't make any guess attempts.");
    }
    //start game
    else {
        //convert string to integer
        userInput = parseInt(userInput);
        //while game is not done
        while (gameOver == false) { 
            //count number of guesses made
            guessCount++;
            //check if guess is less than user number
            if (guess < userInput) {
                //set min number
                min = guess + 1;
                //display guess count, guessed number and guess is less than user number
                output.innerHTML += "<p>" + guessCount + ". The number guessed is " + guess + 
                    ".</p><p class='guess'>It is less than the user's number.</p>";
            }
            //check if guess is greater than user number
            else if (guess > userInput) {
                //set max number
                max = guess - 1;
                //display guess count, guessed number and guess is greater than user number
                output.innerHTML += "<p>" + guessCount + ". The number guessed is " + guess + 
                    ".</p><p class='guess'>It is greater than the user's number.</p>";
            }
            //check if guess is equal to user number
            else {
                //display guess count, guessed number and guess is equal to user number
                output.innerHTML += "<p>" + guessCount + ". The number guessed is " + guess + 
                    ".</p><p class='guess'>It is equal to the user's number.</p>";
                //let user know that you won
                setTimeout(function() {
                    alert("Congratulations, you won!");
                }, 100);
                //game is done
                gameOver = true;
                //stop execution of rest of method code
                return; 
            }
            //if number is not guessed correctly in 10 guesses, let user know they won
            if (guessCount == 10) {
                setTimeout(function() {
                    alert("You lost. They won!");
                }, 100);
                //game is done
                gameOver = true;
            }
            //exit while loop
            break;
        }
    }
}
 
