/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
function daysNeededToShipInCap(weights = [], cap) {
    let days = 1;
    let currentWeigth = 0;

    for (let i = 0; i < weights.length; i++) {
        if (currentWeigth + weights[i] > cap) {
            days++;
            currentWeigth = weights[i];
        }
        else {
            currentWeigth += weights[i];
        }
    }

    return days
}


var shipWithinDays = function(weights = [], days) {
    let min = Math.max(...weights);
    let max = weights.reduce((a, c) => a + c, 0);
    let cap = max;

    while(min <= max) {
        const mid = min + Math.floor((max - min) / 2 );

        const daysNeeded = daysNeededToShipInCap(weights, mid);
        
        if (daysNeeded > days) {
            min = mid + 1
        } 
        else {
            max = mid - 1;
            cap = mid;
        }
    }

    return cap;
}