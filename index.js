function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate throughthe array
  for (let i=0; i<array.length; i++) {
    // identify a complement that adds to the target (compliment=target-num)
    const compliment = target-array[i]
// iterate through the 
for(let j=i+1;j<array.length;j++)
   if( array[j]=== compliment)
   {
    return true
   }
  }
return false
}

/* 
  Write the Big O time complexity of your function here
  runtime 0(n*2)
  space 0(n)
*/
/* 
  Add your pseudocode here
  a function called hasTargetSum that receives two arguments:an array of integers a target integer
The function should return true if any pair of numbers in the array adds up to the target number.
iterate through each of the numbers in the array 
*/
/*
  Add written explanation of your solution here
  I need to make a hasTargetSum function that checks if two numbers in an array
   add up to some target number. For example, if the array is [1,2,3,4] and the target number is 6, 
   I know that 2 and 4 add up to 6, so I should return true.
    If I have the same array and the target is 10, no two numbers in the array add up to 10, 
    so I should return false.
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
