// Extend the javascript Array object 
// with a function that creates a two 
// dimensional array with an initial value

Array.matrix = (numrows, numcols, initvalue) => {
    let arr = [];
        for(let i=0; i<numrows; i++){
            let column = [];
            for (let j=0; j<numcols; j++){
                column[j]=Math.round(Math.random() * (initvalue + 7)) //randomize the init value
            }
            arr[i] = column
        }
    return arr;
}

const grades = Array.matrix(3,3,0);
console.log(grades)

// compute the average of each row in this two dimensional array
const arr = [
    [89, 77, 78],
    [76, 82, 81],
    [91, 94, 98]
];

// This function is meant to compute the value of each row in the array
let total = 0;
for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        total += arr[i][j]
    }
     console.log(total)
}

// What was your major during college: Computer Science
