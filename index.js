function bruteForceTwoSum(arr, tgt) {
    const rez = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === tgt) {
                rez.push([arr[i], arr[j]]);
            }
        }
    }
    return rez;
}

function binarySearchTwoSum(arr, tgt) {
    const rez = [];
    arr = arr.sort((a, b) => a > b? 1 : -1);
    for (let i = 0; i < arr.length-1; i++) {
        if (binaryMatch(arr.slice(i+1, arr.length), tgt - arr[i])) {
            rez.push([arr[i], tgt - arr[i]]);
        }
    }
    return rez;
}

function binaryMatch(arr, tgt) {
    let mid = arr.length >> 1;
    for (let i = 0; i < Math.log2(arr.length + 1); i++) {
        if (arr[mid] === tgt) {
            return true
        }
        else if (arr[mid] > tgt) {
            mid = mid >> 1;3 
        }
        else if (arr[mid] < tgt) {
            mid = (mid + arr.length) >> 1;
        }
    }
    return false;
}

function hashTwoSum(arr, tgt) {
    const rez = [];
    const hash = {};
    for (const num of arr) {
        hash[num] = (hash[num] || true)
    }
    for (const num of arr) {
        if (hash[tgt-num]) {
            rez.push([num, tgt-num]);
            delete hash[num];
            delete hash[tgt-num];
        }
    }
    return rez;
}
