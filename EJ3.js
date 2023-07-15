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


function sum(array) {
  let counter = 0;
  for (let nums of array) {
    counter += nums
  }
  return counter
}

//Reversing an Array
//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace.
//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
//Neither may use the standard reverse method.
//Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

function reverseArray(array) {
  let reversed_array = []
  for (let i = (array.length - 1); i >= 0; i--) {
    reversed_array.push(array[i])
  }
  return reversed_array
}

