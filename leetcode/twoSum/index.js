// bad solution, complexity O(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(`i: ${i}, j: ${j}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`);
            if (nums[i] + nums[j] === target) return [i, j]      
        }
    }
    return []
}
const arr = [2,5,5,11]
console.log(twoSum(arr, 10))

