function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return closestSum;
        // If sum is equal to target, no need to continue
      }
    }
  }
  return closestSum;
}

function handleSubmit() {
  const numsInput = document.getElementById('nums');
  const targetInput = document.getElementById('target');
  const numsArr = numsInput.value.split(',').map(num => parseInt(num));
  const target = parseInt(targetInput.value);
  const closestSum = threeSumClosest(numsArr, target);
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `The sum closest to ${target} is ${closestSum}.`;
}
