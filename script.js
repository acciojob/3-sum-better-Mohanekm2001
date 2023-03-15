function threeSum(arr, target) {
      arr.sort((a, b) => a - b);
      let closestSum = Infinity;

      for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
          const sum = arr[i] + arr[left] + arr[right];

          if (sum === target) {
            return sum;
          }

          if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
            closestSum = sum;
          }

          if (sum < target) {
            left++;
          } else {
            right--;
          }
        }
      }

      return closestSum;
    }

    function findSum() {
      const arr = document.getElementById("arr").value.split(" ").map(Number);
      const target = Number(document.getElementById("target").value);
      const result = threeSum(arr, target);

      document.getElementById("result").innerHTML = `Closest Sum: ${result}`;
    }