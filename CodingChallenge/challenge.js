let longest= 0;

let arr = ["bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];

function longestString(arr){
    longest = arr.reduce((a, b) => a.length > b.length ? a : b, '');
    console.log(longest)

}
 longestString(arr);