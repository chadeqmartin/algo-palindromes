exports.palindrome = function(strOrNum) {
    return typeof strOrNum === 'string' ? 
        stringPalindromeChecker(strOrNum) : numPalindromeChecker(strOrNum)
};

const numPalindromeChecker = (num) => {
    //let copyNum = +num.toString().split('').reverse().join('')
    
    let reversedNum = 0;
    let copyNum = num;

    while (num > 0) {
        reversedNum *= 10
        let temp = num % 10
        reversedNum += temp
        num = Math.floor(num/10)
    }
    return reversedNum === copyNum;
};

const stringPalindromeChecker = (str) => {
    str = str.toLowerCase();

    let regex = /[a-z]/g;
    let strCopy = str.slice(0);
  
    strCopy = strCopy.match(regex).reverse().join('');
    console.log(strCopy)

    return str.match(regex).join('') === strCopy
}
