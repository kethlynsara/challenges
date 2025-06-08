/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
 */

const codesMap = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
}

function isThereAVowelInThere(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in codesMap) arr[i] = codesMap[arr[i]]
    }
    return arr
}
const arr = [100, 100, 116, 105, 117, 121]
console.log(isThereAVowelInThere(arr))

function isThereAVowelInThere2(arr) { 
    return arr.map(num => codesMap[num] || num)
}
const arr2 = [100, 100, 116, 105, 117, 121]
console.log(isThereAVowelInThere(arr2))

function isThereAVowelInThere3(arr) { 
    return arr.map(num => String.fromCharCode(num) || num)
}
const arr3 = [100, 100, 116, 105, 117, 121]
console.log(isThereAVowelInThere(arr3))
