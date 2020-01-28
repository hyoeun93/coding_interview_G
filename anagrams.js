//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

function validAnagram(str1, str2) {
    //if both strings are empty return true
    if(str1.length === 0 && str2.length === 0) return true;
    //create two empty objects
    let obj1 = {};
    let obj2 = {};
    //loop through each of the strings and put them in the objects
    for(let char of str1) {
        if(obj1[char] > 0) {
            obj1[char]++
        } else {
            obj1[char] = 1;
        }
    }
    for(let char of str2) {
        if(obj2[char] > 0) {
            obj2[char]++
        } else {
            obj2[char] = 1;
        }
    }
    //check if each key in strings match to each other 
    for(let key in obj1) {
        if(!key in obj2) return false;
        //chack if the frequencies match
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log(validAnagram('anagram', 'nakaram'));