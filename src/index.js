const result = fizzBuzz2(1, 100);
console.log(result);


/**
 * Writes out the FizzBuzz for a range of numbers.
 * 
 * FizzBuzz is defined by the following rules:
 *  - if a number is divisible by 5, print fizz
 *  - if a number is divisible by 8, print buzz
 *  - if divisible by both 5 and 8, print fizzbuzz
 *  - otherwise just print the number
 * 
 * @param {*} min the lower end of the range
 * @param {*} max the upper end of the range
 */
function fizzBuzz(min, max) {
    for (let i = min; i <= max; i++) {
        if (i % 5 === 0 && i % 8 === 0) {
            console.log('fizzbuzz');
        } else if (i % 8 === 0) {
            console.log('buzz');
        } else if (i % 5 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
        
    }
}

/**
 * Writes out the FizzBuzz for a range of numbers.
 * 
 * FizzBuzz is defined by the following rules:
 *  - if a number is divisible by 5, print fizz
 *  - if a number is divisible by 8, print buzz
 *  - if divisible by both 5 and 8, print fizzbuzz
 *  - otherwise just print the number
 * 
 * @param {*} min the lower end of the range
 * @param {*} max the upper end of the range
 */
 function fizzBuzz2(min, max) {
    let result = "";
    for (let i = min; i <= max; i++) {
        let entry = "";
        entry = fizzBuzzAt(i);
        result = result.concat(`${entry}`.padStart(9, ' '));

        // every tenth line print a new line 
        if (i % 10 === 0) {
            result = result.concat('\n');
        }
        
    }
    return result;
}

function fizzBuzzAt(num) {
    if (num % 5 === 0 && num % 8 === 0) {
        return 'fizzbuzz';
    }
    if (num % 5 === 0) {
        return 'fizz';
    }
    if (num % 8 === 0) {
        return 'buzz';
    }
    return num;
}