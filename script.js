function threeSum() {
    const S = document.getElementById("inputArray").value.split(",").map(Number);
    const target = Number(document.getElementById("target").value);

    let closestSum = Infinity;

    for (let i = 0; i < S.length - 2; i++) {
        for (let j = i + 1; j < S.length - 1; j++) {
            for (let k = j + 1; k < S.length; k++) {
                const sum = S[i] + S[j] + S[k];
                if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                    closestSum = sum;
                }
            }
        }
    }

    document.getElementById("result").innerHTML = `The sum closest to ${target} is ${closestSum}.`;
}
