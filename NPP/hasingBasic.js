const test = [5, 5, 4, 6, 4, 1, 5, 8, 4];
const nums = [5, 1, 12, 4]



// brute forse to find how many time occur // O(n) for each num to find // Q*O(n)
/*function getNumberCount(num, arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == num){
            count++;
        }
    }
    return count;
}*/

// using hasing and js object 
function getNumberCount (numArr = [], arr = []){

    // hash map
    const map = {};
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]] != undefined){
            map[arr[i]]++;
        }
        else {
            map[arr[i]] = 1;
        }
    }
    for (let j = 0; j < numArr.length; j++){
        if(map[numArr[j]] == undefined){
            console.log(0);
        }else{
            console.log(map[numArr[j]]);
        }
    }
}


// using hashing and array
function getNumberCountArr(nums = [], arr = []){
    
    // making hash array
    let maxArrNum = Math.max(...nums);
    let hash = new Array(maxArrNum + 1).fill(0);
    console.log(hash)

    // seting counts in hash arr
    for (let i = 0; i < arr.length;  i++){
        hash[arr[i]]++;
    }

    // getting the result 
    for (let j = 0; j < nums.length; j++){
        console.log(hash[nums[j]]);
    }

}

// getNumberCountArr(nums, test);



