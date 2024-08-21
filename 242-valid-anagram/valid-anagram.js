/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    /*
    // brute forse approch -> 
    return s.split("").sort().join() == t.split("").sort().join();
    */
    
    // using frequiency map => 
    if (s.length !== t.length) return false;

    let map = {};
    for(let i = 0; i < s.length; i++){
        if (map[s[i]]){
            map[s[i]] += 1;
        }
        else {
            map[s[i]] = 1;
        }
    }

    for(let j = 0; j < t.length; j++){
        if (map[t[j]]){
            map[t[j]] -= 1;
            if (map[t[j]] == 0){
                delete map[t[j]];
            }
        }
        else {
            return false;
        }
    }

    if(Object.keys(map).length == 0){
        return true;
    }
    else {
        return false;
    }

};