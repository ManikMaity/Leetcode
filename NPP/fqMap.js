function sortByFreq(arr) {
        
    // making fq map
    let fObj = {};

    // n
    for (let i = 0; i < arr.length; i++){
        if (fObj.hasOwnProperty(arr[i])){
            fObj[arr[i]] = fObj[arr[i]] + 1;
        }
        else{
            fObj[arr[i]] = 1;
        }
    }

    // //sorting 
    // const resultArr = [];
    // const keys = Object.keys(fObj);
    // for (let i = 0; i < keys.length -1; i++){
    //     let maxCount = fObj[keys[i]];

    //     for (let j = i; i < keys.length; i++){

    //     }
    // }
    
    console.log(fObj)
}


const test = [5, 5, 4, 6, 4];
sortByFreq(test);
