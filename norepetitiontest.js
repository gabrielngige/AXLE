//figure our how to output sdft17 without repeating the code multiple times using indexing.

let sdft17 = ["gabriel", "john", "michael" ]
console.log(sdft17[0]); // Output: "gabriel"
console.log(sdft17[1]); // Output: "john"
console.log(sdft17[2]); // Output: "michael"

//or we can use a loop to output all the elements in the array without repeating the code multiple times.

for (let i = 0; i < sdft17.length; i++) {
  console.log(sdft17[i]);
}