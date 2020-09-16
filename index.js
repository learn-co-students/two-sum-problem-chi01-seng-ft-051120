function bruteForceTwoSum(array, sum) {
    let answerArray = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                let pair = [] 
                pair.push(array[i])
                pair.push(array[j])
                answerArray.push(pair)
            }
        }
    }
    return answerArray
}

function binarySearchTwoSum(array, sum) {
    let answerArray = []
    let sortedArray = array.sort()
    for (let i = 0; i < array.length; i++) {
        let missingNum = sum - array[i]
        if ((missingNum === array[i]) && (array[i] === array[i + 1])) {
          let double = [missingNum, array[i]]
          answerArray.push(double)
          array.shift()
          array.shift()
          i = i - 1
        } else {
        let verdict = binaryMatch(sortedArray, missingNum)
        if (verdict === true) {
            let pair = [array[i], missingNum]
            answerArray.push(pair)
            array.shift()
            i = i - 1
        }
    }
    }
    return answerArray
}

function binaryMatch(sortedArray, missingNum) {
    let startIndex = 0 
    let endIndex = sortedArray.length - 1 
    while (startIndex <= endIndex) {
        let middleIndex = parseInt(((startIndex + endIndex) / 2))
        if (missingNum === sortedArray[middleIndex]) {
            return true
        } else if (missingNum > sortedArray[middleIndex]) {
            startIndex = middleIndex + 1 
        } else if (missingNum < sortedArray[middleIndex]) {
            endIndex = middleIndex - 1
        }
    }
    return false  
}

function hashTwoSum(array, sum) {
    let answerArray = []
    let hashArray = []
    array.forEach(num => {
        let match = sum - num
        if (hashArray[`${num}`]) {
            let pair = [match, num]
            answerArray.push(pair)
        } else {
            hashArray[`${match}`] = num
        }
    })
    return answerArray 
}