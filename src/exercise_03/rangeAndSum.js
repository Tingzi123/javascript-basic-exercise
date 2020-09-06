export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (start === end) {
    return [];
  }

  const array = [];
  if (start < end) {
    for (let i = start; i < end; i += 1) {
      array.push(i);
    }
  } else {
    for (let i = start; i > end; i -= 1) {
      array.push(i);
    }
  }

  return array;
}


export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!numbers || numbers === 0) {
    return 0;
  }

  if (numbers === 1) {
    return 1;
  }

  let re = 0;
  numbers.forEach((i) => {
    re += i;
  });

  return re;
}
