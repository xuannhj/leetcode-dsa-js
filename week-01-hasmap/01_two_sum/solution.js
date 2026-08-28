/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const map = new Map ();
     for (let i = 0; i < nums.length; i++){
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (map.has(complement)){
            return [map.get(complement), i];
        }

        map.set(currentNum, i);
     }
     return [];
};