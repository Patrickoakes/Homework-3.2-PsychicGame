//var userGuess = e.key// NO USE
        //var letters = ["a", "b", "c"]; Solution version
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ' k', 'l', 'm', ' n', ' o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        // This array will hold what we guess
        // var guessedLetters = []; Solution version
        var guessesArr = ['', '', '', '', '', '', '', '', ''];
        // This variable will be randomly assigned one of the three letters
        //var letterToGuess = null; Solution Version
        var letIndex = 0; //Function 2
        // var comChoice = Math.floor(Math.random() * 25 + 1); NOT USED
        // This is what we'll use to count down///nothing
        var guessesLeft = 9;

        // This is the counter for wins/losses// Same as Solution
        var wins = 0;
        var losses = 0;


        ////////////////////////////////////// Turn var anything function () {}
        //these turned into functions////
        // var winContainer = document.querySelector("winCount");
        // var lossContainer = document.querySelector("#lossCount");
        // var guessContainer = document.querySelector("#guessLeft");// Function 1
        // var log = document.getElementById('guessCount'); // FUnction 2
        //////////////////////////////////////
        // Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
        // var updateGuessesLeft = function () {//SOLUTION
        var guessContainer = function () {
            // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
            // (i.e. guessesLeft will get displayed in HTML)
            document.querySelector("#guessLeft").innerHTML = guessesLeft;
        };
        /////////var updateLetterToGuess = function () { ///////////////////////////////////////////////
        //var log = function () {

        var updateLetIndex = function () { //function psychicFunction(comChoice, letters) {
            //var comChoice = Math.floor(Math.random() * 25 + 1);
            letIndex = letters[Math.floor(Math.random() * letters.length)];
        };

        // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
        /// //letterToGuess = letters[Math.floor(Math.random() * letters.length)];

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        var updateLogKey = function () {
            // Here we take the guesses the user has tried -- then display it as letters separated by commas.
            document.querySelector("#guessCount").innerHTML = guessesArr.join(", ");
        };

        // document.addEventListener('keyup', logKey);
        // function logKey(e) {
        // log.textContent += `${e.key}`;
        // }


        // Function will be called when we reset everything/// NOT IN MINE AT ALL
        var reset = function () {
            guessesLeft = 9;
            guessesArr = [];
            updateLetIndex();
            guessContainer();
            updateLogKey();
        };

        ///MAIN PROCESS
        updateLetIndex(); ///updateWin();
        guessContainer(); //updateLoss()

        // This function will capture the keyboard clicks.
        document.onkeydown = function (event) {
            // It's going to reduce the guesses by one
            guessesLeft--;

            // Lowercase the letter
            var letter = event.key.toLowerCase();

            // Then add the guess to the guessedLetters array
            guessesArr.push(letter);

            //Update Function
            guessContainer();
            updateLogKey();

            /////////////////////////////////////////////////////////////////////////////////////////////
            // We'll check if there's a match.
            if (letter === letIndex) {

                // If there is then we win and we'll update the HTML to display the win.
                wins++;
                document.querySelector("#winCount").innerHTML = wins;

                // Then we'll reset the game
                reset();
            }

            // If we are out of guesses...
            if (guessesLeft === 0) {

                // Then we will loss and we'll update the HTML to display the loss.
                losses++;
                document.querySelector("#lossCount").innerHTML = losses;

                // Then we'll call the reset.
                reset();
            }
        };


  /*   for (guessesIndex = 0; guessesIndex < guessesArr.length; guessesIndex++) {
           //     if (userGuess === letters[letIndex]) {
           //         log.textContent += `${e.key}`;
           //     } else (guessesIndex === guessesArr); {
           //         function updateLoss() {
           //             lossContainer.innerHTML = losses; losses++; updateLoss();
           //         }

           //     }
           // };

       ///////////////////////////////////////////////////////////////////
           //  function updateWin() {
           //   if (userGuess === comChoice)
           //         winContainer.innerHTML = wins; wins++; updateWin();
           //   }
          // function updateWin() {
           //     if (userGuess === comChoice)
           //         winContainer.innerHTML = wins; wins++; updateWin();
           // }   */
