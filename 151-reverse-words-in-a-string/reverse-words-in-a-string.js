/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // reduce the spaces and into the array
    let string = [];
    let i = 0;
    while(i < s.length){
        if (s[i] == " ") {
            i++;
            continue
            };
        let word = "";
        let j = i;
        while(s[j] != " " && j < s.length){
            word+=s[j];
            j++;
        }
        string.push(word);
        i = j;
    }

    // reverse and join
    let sentence = "";
    for (let j = string.length - 1; j >= 0; j--){
        if (j == 0){
            sentence += string[j];
        }
        else {
            sentence += `${string[j]} `;
        }

    }


    return sentence;
};