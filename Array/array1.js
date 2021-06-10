// Add up all the numbers in an array using a for loop

let arr = [];
// filling array with numbers
for(let i=0; i < 100; i++){
    arr[i] = i + 1;
}

// computing all the values
let total = 0;
for(var i = 0; i < arr.length; i++){
    total += i
}

console.log(total)