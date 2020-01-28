//Given a 32-bit signed integer, reverse digits of an integer

var reverse = function(x) {
    var reverseNum = parseInt(x.toString().split("").reverse().join(""));
    
    if(reverseNum>(Math.pow(2,31)-1)) return 0;
    
    return x >= 0 ? reverseNum : 0 - reverseNum;
}