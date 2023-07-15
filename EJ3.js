//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
//As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array.

function range(start, end, step) {
  let range_array = [];
  for(start; start <= end; start += step) {
    range_array.push(start);
  }
  return range_array
}

// console.log(range(1, 10, 2));

function sum(array) {
  let counter = 0;
  for (let nums of array) {
    counter += nums
  }
  return counter
}

// console.log(sum(range(1, 10, 1)));