// Question 1
function currentDate() {
    var today = new Date();
    var date = (parseInt(today.getMonth()) + 1) + "-" + today.getDate() + "-" + today.getFullYear();
    return date;
}

// Question 2
function isLeapYear(givenYear) {
    if (parseInt(givenYear) % 400 == 0) {
        return true;
    }
    else if (parseInt(givenYear) % 4 == 0 && parseInt(givenYear) % 100 != 0) {
        return true;
    }
    return false;
}

// Question 3
function areConsecutive(arr) {
    consecutiveForwards = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1] + 1) {
            consecutiveForwards = false;
        }
    }

    consecutiveBackwards = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1] - 1) {
            consecutiveBackwards = false;
        }
    }

    return consecutiveBackwards || consecutiveForwards;
}

// Question 4
function multipleOccurences(arr) {
    var valuesSeen = [];
    for (let i = 0; i < arr.length; i++) {
        if (valuesSeen.includes(arr[i])) {
            return true;
        }
        valuesSeen = valuesSeen.concat([arr[i]]);
    }
    return false;
}

//Question 5
function returnFirstN(arr, n = 1) {
    return arr.slice(0, n);
}

// Question 6
function arrToString(arr) {
    return arr.join(" ");
}

// Question 7
function mostCommon(arr) {
    var frequency = new Map();

    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] + 1) || 1;
    }

    var max = null;
    for (var key in frequency) {
        if (max == null) {
            max = [key, frequency[key]];
        }
        else if (frequency[key] > max[1]) {
            max = [key, frequency[key]];
        }
    }
    return max[0] + ": " + max[1] + " times";
}

// Question 8
function choicesOutput(colors, postfixs) {
    for (let i = 0; i < colors.length; i++) {
        if (i < postfixs.length - 1) {
            console.log((i + 1) + postfixs[i] + " choice is " + colors[i]);
        }
        else {
            console.log((i + 1) + postfixs[postfixs.length - 1] + " choice is " + colors[i]);
        }
    }
}

// Question 9
function findDuplicates(arr) {
    var frequency = new Map();

    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] + 1) || 1;
    }

    let duplicates = []
    for (var key in frequency) {
        if (frequency[key] > 1) {
            duplicates = duplicates.concat(key);
        }
    }
    return duplicates;
}

// Question 10
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Question 11
function validPalindrome(str) {
    str = str.toLowerCase()
    var new_forward = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            new_forward += str[i];
        }
    }
    return (new_forward == new_forward.split("").reverse().join(""));
}

// Question 12
function allCombinations(str) {
    var combinations = []
    for (let i = 0; i < str.length; i++) {
        word = "";
        for (let j = i; j < str.length; j++) {
            word += str[j];
            combinations = combinations.concat(word);
        }
    }
    return combinations;
}

// Question 13
function organizeWord(str) {
    return str.split("").sort().join("");
}

// Question 14
function secondLowest(arr) {
    arr = arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}

// Question 15
function removeDuplicates(str) {
    outputStr = [];
    for (let i = 0; i < str.length; i++) {
        if (!outputStr.includes(str[i])) {
            outputStr = outputStr.concat(str[i]);
        }
    }
    return outputStr.join("");
}