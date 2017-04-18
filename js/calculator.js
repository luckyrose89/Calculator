window.onload = function() {
    //Initialize variables for number buttons, display panel 
    var answer = document.getElementById('answer');
    var clear = document.querySelector('.clear');
    var deleteButton = document.querySelector('.delete');
    var digits = document.querySelectorAll('.digit');
    var enter = document.querySelector('.enter');
    var digitsArray = []; //Used to store and edit user input


    //Use clear to empty the answer field
    clear.addEventListener('click', function() {
        digitsArray = [];
        answer.innerHTML = '';
    });

    //Since the numbers are in a nodeList, access each of them individually with forEach
    digits.forEach(function(elem) {
        elem.addEventListener('click', function() {
            digitsArray.push(elem.innerHTML);
            answer.innerHTML = '';
            for (var i = 0; i < digitsArray.length; i++) {
                answer.innerHTML += digitsArray[i];
            }
        });
    });

    //The event listener for equal sign button to evaluate input
    enter.addEventListener('click', function() {
        try {
            var result = eval(answer.innerHTML);
            answer.innerHTML = result;
            digitsArray = [];
            digitsArray.push(result);
        } catch (error) {
            answer.innerHTML = error;
        }
    });

    //The event listener for delete button to eliminate the last entered item in input
    deleteButton.addEventListener('click', function() {
        if (digitsArray.length > 0) {
            digitsArray.splice(-1, 1);
            answer.innerHTML = '';
            for (var i = 0; i < digitsArray.length; i++) {
                answer.innerHTML += digitsArray[i];
            }
        }
    });
}




