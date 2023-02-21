// https://www.hackerrank.com/challenges/game-of-thrones/problem

const gameOfThrones = (input)=> {
    let lettersOfInput = {};
    for (let count = 0; count < input.length; count++) {
        const letter = input.charAt(count);
        if (lettersOfInput.hasOwnProperty(letter)) lettersOfInput[letter] += 1; 
        else lettersOfInput[letter] = 1;
    }
    let notEven = 0;
    for (let key in lettersOfInput) if (!(lettersOfInput[key] % 2 === 0)) notEven += 1;
    if (notEven < 2) return "YES";
    return "NO";
}