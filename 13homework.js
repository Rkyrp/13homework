//1задание
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return [n - 1, n - 2].map(fibonacci).reduce((a, b) => a + b);
}
const n = 5;
console.log(`${n}-e число Фибоначчи: ${fibonacci(n)}`);
//2задание 
function findPalindrome(num) {
    let steps = 0;
    function isPalindrome(n) {
        const str = n.toString();
        return str === str.split('').reverse().join('');
    }
    function reverseNumber(n) {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    }
    let current = num;
    while (!isPalindrome(current)) {
        const reversed = reverseNumber(current);
        current += reversed;
        steps++;
        if (steps > 1000) {
            return {
                result: null,
                steps: "Превышен лимит чисел"
            };
        }
    }

    return {
        result: current,
        steps
    };
}
const input = 196;
console.log(findPalindrome(input));
const normalInput = 96;
console.log(findPalindrome(normalInput));
