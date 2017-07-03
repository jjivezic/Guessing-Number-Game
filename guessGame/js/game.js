(function() {
    console.log('=========================Random number to guess==================================');
    var getRandomNumber = function() {
        var randomArr = []
        for (var i = 1; i < 5; i++) {
            var random = (Math.floor(Math.random() * 4) + 1);
            if (randomArr.indexOf(random) < 0) {
                randomArr.push(random);
            } else {
                i = i - 1;
            }
        }
        return randomArr.join('');
    }

    var numberToGuess = getRandomNumber();
    console.log('Random number to guess', numberToGuess);
    console.log('===========================================================');

    //Clicking on buttons
    $('button[class*="btnNum"]').on('click', function() {

        //buttons are disabled after first click
        $(this).prop({
            disabled: true
        });


    });
    //check button disabled
    $('#checkValue').prop("disabled", true);
    $('.tryAgain').hide();
    var i = 0;
    var guessingNumbers;
    var myFuncCalls = 0;
    //return numbers which user has clicked
    var checkAgain = function() {

        var clicks = 0; //click counter

        $('button[class*="btnNum"]').on('click', function() {
            guessingNumbers = '';
            var btnValue = $(this).text();
            console.log('btnValue', btnValue);

            var btnValue1 = $('.btnValue1');
            var btnValue2 = $('.btnValue2');
            var btnValue3 = $('.btnValue3');
            var btnValue4 = $('.btnValue4');

            //this happens when user click first,second...n  button
            if (clicks == 0) {
                var btnOne;
                btnOne = btnValue1.text(btnValue);
                clicks++;
                console.log("first click");
            } else if (clicks == 1) {
                var btnTwo;
                btnTwo = btnValue2.text(btnValue);
                clicks++;
                console.log("second click");
            } else if (clicks == 2) {
                var btnThree;
                btnThree = btnValue3.text(btnValue);
                clicks++;
                console.log("third click");
            } else if (clicks == 3) {
                var btnFour;
                btnFour = btnValue4.text(btnValue);
                clicks++;
                console.log("fourth click");
                $('#checkValue').prop("disabled", false);
            }


            guessingNumbers = $('.btnTextValue span').text();
            console.log('Your guess number', guessingNumbers);

            return guessingNumbers;
        });

    };

    checkAgain();

    //Actions done when button for checking right number is pressed
    $('#checkValue').on('click', function() {
        $('button[class*="btnNum"]').prop({
            disabled: false
        });
        $('.guessLabel').css('display', 'block');
        console.log('===>>>>>>', guessingNumbers);

        //Check whether your number is the same as the logic random number
        if (numberToGuess === guessingNumbers) {
            console.log('Congratulation you guess the number !! You hit the number  on the ' + (myFuncCalls + 1) + ' ' + 'try!!!');
            $('#newGame').css('display', 'block');
            $('#checkValue').css('display', 'block');
            $('.btn-primary').css('display', 'none');
            //adding style to guesed number
            for (var i = 0; i <= 4; i++) {
                $('.btnValue' + (i + 1)).addClass("guessedNum");
            }
            $('#myModal').modal('show'); //Triger modal popup

            $('.close span').click(function() {
                console.log('clicked');
                $('button[class*="btnNum"]').prop({
                    disabled: true
                });
                $('.tryAgain').hide();
            });

        } else {
            console.log('Do this if number is different')
            $('#checkValue').prop("disabled", true);
            clicks = 0;
            //Repeating function for right number
            checkAgain();
            //append numbers bellow
            var repeatingGuesses = $('.repeatingGuesses');
            repeatingGuesses.append("<span>" + guessingNumbers + "</span></br>");
            console.log('Yours and random Number', guessingNumbers, numberToGuess);

            //comparison of the numbers
            for (var i = 0; i <= 3; i++) {
                console.log('guessingNumbers,numberToGuess', guessingNumbers[i], numberToGuess[i]);
                if (numberToGuess[i] == guessingNumbers[i]) {
                    console.log('Is the same');
                    $('.btnValue' + (i + 1)).text('O').addClass("rightNum");
                } else {
                    console.log('Is the different');
                    $('.btnValue' + (i + 1)).text('O').removeClass("rightNum");
                    $('.btnValue' + (i + 1)).text('X').css('color', '#009688');
                    $('.tryAgain').show();
                };
            }
        }

        //How many times the function is called
        // how many attempts were before number is guessed
        myFuncCalls++;
        $('.guessLabel span').html((myFuncCalls));
        $('#attempts').html((myFuncCalls));
        console.log("I have been called " + myFuncCalls + " times");
    });

    //New game -reset
    $('#newGame').on('click', function() {
        window.location.reload(true);
    });

}());