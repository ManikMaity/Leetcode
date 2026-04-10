function suffleArray(nums: number[]) {
	return nums.sort(() => Math.random() - 0.5);
}

function suffleArray2(nums: number[]) {
	for (let i = nums.length - 1; i > 0; i--) {
		const random = Math.floor(Math.random() * (i + 1));
		[nums[i], nums[random]] = [nums[random], nums[i]];
	}

	return nums;
}



console.log(suffleArray2([5, 6, 3, 8]))
