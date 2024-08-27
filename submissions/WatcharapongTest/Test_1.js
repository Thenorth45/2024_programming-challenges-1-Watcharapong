function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function findCombinations(arr, targetSum) {
    const result = [];

    function findCombo(currentCombo, start, currentSum) {
        if (currentSum > targetSum) return;

        if (currentSum === targetSum) {
            result.push([...currentCombo]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            currentCombo.push(arr[i]);
            findCombo(currentCombo, i, currentSum + arr[i]);
            currentCombo.pop();
        }
    }

    findCombo([], 0, 0);

    const primeResults = result.map(combo => combo.filter(num => isPrime(num)));

    return primeResults.filter(combo => combo.length > 0);
}

//ใส่ค่าที่ต้องการ
const arr = [2, 3, 5, 7, 11];
const targetSum = 10;
const primeCombinations = findCombinations(arr, targetSum);
console.log(primeCombinations);
