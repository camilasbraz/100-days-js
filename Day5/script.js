const BTN = document.querySelector('.btn');
const RESULT = document.querySelector('.result');



BTN.addEventListener("click", palindrome)


function palindrome() {
    const WORD = document.querySelector('.input-text').value.toLowerCase();
    if(WORD == WORD.split("").reverse().join("")){
        RESULT.innerHTML = `${WORD.toUpperCase()} is a palindrome!`;
    }
    else {
        RESULT.innerHTML = `${WORD.toUpperCase()} is NOT a palindrome!`;
    }
}
