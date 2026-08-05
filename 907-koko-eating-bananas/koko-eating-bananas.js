/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles = [], h = 5) {
    let max = piles[0];
    
    for (let i = 0; i < piles.length; i++) {
        const val = piles[i];

        if (val > max) {
            max = val;
        }
    }

    let left = 1; 
    let right = max;
    let perHour = 0;

    while(left <= right) {
        
        const mid = left + Math.floor((right - left) / 2);
        let hourTaken = 0;

        for (let i = 0; i < piles.length; i++) {
            const val = piles[i];
            if (val <= mid) {
                hourTaken++;
            }
            else {
                let pTaken = Math.ceil(val / mid)
                hourTaken += pTaken;
            }
        }

        if (hourTaken > h) {
            left = mid + 1;
        }
        else {
            perHour = mid;
            right = mid - 1;
        }
    }

    return perHour;
    
};