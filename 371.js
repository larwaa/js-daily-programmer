function queenCheck(arr){
    const queensBelow = [];
    const queensAbove = [];
    for (let i = 0; i < arr.length; i++){
        queensBelow.push(arr[i] + i);
        queensAbove.push(arr[i] - i);
    }
    return distinct(queensAbove) && distinct(queensBelow) && distinct(arr);
}

function distinct(arr){
    return new Set(arr).size === arr.length;
}

console.log(queenCheck([4, 2, 7, 3, 6, 8, 5, 1]));
console.log(queenCheck([2, 5, 7, 4, 1, 8, 6, 3]));
console.log(queenCheck([5, 3, 1, 4, 2, 8, 6, 3]));
console.log(queenCheck([5, 8, 2, 4, 7, 1, 3, 6]));
console.log(queenCheck([4, 3, 1, 8, 1, 3, 5, 2]));