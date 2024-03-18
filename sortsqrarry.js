// const array = [40, 44, 12, 3, 99, 4, 24, 15]

// function sortedSquaredArray(array) {
// let arr = []
//     // code to sort array
// for (let i = 0; i < array.length; i++){
//     arr.push(array[i] * array[i])
// }
// // code to square array
// // return the array 

//   return [];
// }

const array = [40, 44, 12, 3, 99, 4, 24, ]

function sortedSquaredArray(array) {
  let squaredArray = array.map((num) => num * num)

  squaredArray.sort((a,b) => a - b)

  // Write your code here.
  return [];
}