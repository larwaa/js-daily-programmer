function additivePersistence(number){
    let counter = 0;
    while (number > 9){
        counter++;
        number = sumOfDigits(number);
    }
    return counter;
}

function sumOfDigits(number){
    let multiplier = Math.floor(number / 10);
    let remainder = number % 10;
    if (multiplier > 0){
        return remainder += sumOfDigits(multiplier);
    }
    return remainder;
}


console.log(additivePersistence(13));
console.log(additivePersistence(1234));
console.log(additivePersistence(9876));
console.log(additivePersistence(199));