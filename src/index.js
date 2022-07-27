const result = fizzBuzz(1, 100, 10, 10, [{ value: 3, result: 'bl' }, { value: 5, result: 'ar' }, { value: 10, result: 'zz' }]);
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
 * @param {*} padding the amount of padding
 * @param {*} entriesPerLine the frequency of new lines
 */
function fizzBuzz(
    min, 
    max, 
    padding = 10, 
    entriesPerLine = 10, 
    tests = [{ value: 5, result: 'fizz' }, { value: 8, result: 'buzz' }]
) {
    let result = "";
    for (let i = min; i <= max; i++) {
        let entry = "";
        entry = fizzBuzzAt(i, tests);
        result = result.concat(`${entry}`.padStart(padding, ' '));

        // every tenth line print a new line 
        if (i % entriesPerLine === 0) {
            result = result.concat('\n');
        }

    }
    return result;
}

function fizzBuzzAt(num, tests) {
    let result = "";
    tests.forEach(t => {
        if (num % t.value === 0) {
            result = result.concat(t.result);
        }
    });
    if (result === "") {
        result = num;
    }
    return result;
}