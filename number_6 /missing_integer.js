function missingInteger(arr) {
  // Calculate the sum of the first 45 numbers
  const sumOfFirst45 = (45 * (45 + 1)) / 2;

  // Calculate the sum of the elements in the array
  const sumOfArray = arr.reduce((acc, num) => acc + num, 0);

  // Find the missing integer by
  // subtracting the sum of the array from the sum of the first 45 numbers
  const missingInteger = sumOfFirst45 - sumOfArray;

  return missingInteger;
}

// enter the array before running
missingInteger();
