/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const targetMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in targetMap) {
      return [targetMap[nums[i]], i];
    }

    let result = target - nums[i];
    targetMap[result] = i;
  }
};
