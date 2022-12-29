const BTN = document.querySelector('.btn');
const RESULT = document.querySelector('.result');



BTN.addEventListener("click", vowels)


function vowels() {
    const WORD = document.querySelector('.input-text').value.toLowerCase();
    const countVowels = WORD.match(/[aeiou]/gi).length;
    RESULT.innerHTML = `${WORD} has ${countVowels} vowels!`;

}
