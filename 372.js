function balanced(str){
    if (!str){
        return false;
    }

    const counts = countMap(str);
    const first = counts.get(str[0]);

    for (let [key, value] of counts){
        if (value !== first){
            return false;
        }
    }
    return true;
}

function countMap(str){
    let counts = new Map();
    for (let i = 0; i < str.length; i++){
        let s = str[i];
        let count = counts.get(s);
        if (count){
            counts.set(s, count += 1);
        } else {
            counts.set(s, 1);
        }
    }
    return counts;
}

console.log(balanced("x"));