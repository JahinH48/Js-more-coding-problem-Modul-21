const jisan = 'Hello! world ';




function reverseString(text) {
    let reverse = '';

    /* for (const letter of text) {

        // console.log(letter);

        reverse = letter + reverse;

    } */
    for (let i = 0; i <= text.length; i++) {
        let letter = text[i];
        // console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(jisan);
console.log(reversed);




/* const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed); */