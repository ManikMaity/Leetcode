/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells = [], potions = [], success) {
   if (spells.length < 1) {
        return [];
    }

    const result = new Array(spells.length).fill(0);

    if (potions.length < 1) {
        return result;
    }

    const sortedPortions = potions.sort((a, b) => a - b);


    for (let i = 0; i < spells.length; i ++) {
        let left = 0;
        let right = sortedPortions.length - 1;
        
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2 );
            
            if (sortedPortions[mid] * spells[i] >= success){
                right = mid - 1;
            }
            else {
                left = mid +  1;
            }
        }

        
        result[i] = sortedPortions.length - left;
    }

    return result
}

