function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = str.toLowerCase();
    
    for (let char of alphabet) {
        if (!lowerStr.includes(char)) {
            return false;
        }
    }
    return true;
}

function findLongestWord(str) {
    const words = str.split(/\s+/);
    let longestWord = '';
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

function processString(input) {
    if (isPangram(input)) {
        const longestWord = findLongestWord(input);
        return longestWord;
    } else {
        return "Not a Pangram";
    }
}

//ใส่ค่าที่ต้องการ
const input1 = "The quick brown fox jumps over the lazy dog";
console.log(processString(input1));

const input2 = "Hello world";
console.log(processString(input2));
