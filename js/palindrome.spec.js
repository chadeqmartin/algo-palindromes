// Can you translate this driver code to unit tests?

var pal = require("./palindrome");

describe("test for palindrome strings", () => {
    test("palindrome('racecar') === true", () => {
        expect(pal.palindrome('racecar')).toBe(true);
    });
    test("palindrome('Noon') === true", () => {
        expect(pal.palindrome('Noon')).toBe(true);
    });
    test("palindrome('ciVic') === true", () => {
        expect(pal.palindrome('ciVic')).toBe(true);
    });
    test("palindrome('nice') === false", () => {
        expect(pal.palindrome('nice')).toBe(false);
    });
    test("palindrome('Sore was I ere I saw Eros') === true", () => {
        expect(pal.palindrome('Sore was I ere I saw Eros')).toBe(true);
    });
    test("palindrome('A man, a plan, a canal -- Panama') === true", () => {
        expect(pal.palindrome('A man, a plan, a canal -- Panama')).toBe(true);
    });
});

describe("test for palindrom numbers", () => {
    test("palindrome(434) === true", () => {
        expect(pal.palindrome(434)).toBe(true);
    });
    test("palindrome('ciVic') === true", () => {
        expect(pal.palindrome(123)).toBe(false);
    });

})


//console.log(pal.palindrome('racecar') === true);
//console.log(pal.palindrome('Noon') === true);
//console.log(pal.palindrome('ciVic') === true);
//console.log(pal.palindrome('nice') === false);
// console.log(pal.palindrome(434) === true);
// console.log(pal.palindrome(123) === false);

//console.log("The following should be true if you're trying to do the extra portion of this challenge");
//console.log(pal.palindrome("Sore was I ere I saw Eros.") === true);
//console.log(pal.palindrome("A man, a plan, a canal -- Panama") === true);
