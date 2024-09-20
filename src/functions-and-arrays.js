// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    return Math.max(number1, number2)
}

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null
    } else {
        let longestWord
        let max = 0
        words.forEach(word => {
            // console.log("word: ", word);
            // console.log("word.length: ", word.length);
            // console.log("word.length: ", word.length, " > max: ", max);
            if (word.length > max) {
                max = word.length
                longestWord = word
                // console.log("longestWord: ", longestWord);
            }
        });
        return longestWord
    }
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() { }




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() { }




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() { }
