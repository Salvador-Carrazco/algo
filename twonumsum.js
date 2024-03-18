const array = [-1, 2, 4, -5, 3, 11, -4]
const targetSum = -6

function twoNumberSum(array, targetSum) {
let nums ={}
  for (let num of array) {
     let compliment = targetSum - num 
    if (compliment in nums) {
    return [num, compliment]
    }else{
    nums[num]= true  
    }
  }

  return []
}