export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Flatten undefined or null array');
  }

  if (array.length === 0) {
    return [];
  }

  function isArr(arr, r) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
      arr.forEach((i) => {
        r.push(i);
      });
    } else {
      r.push(arr);
    }
    return r;
  }

  let re = [];
  for (let i = 0; i < array.length; i += 1) {
    re = isArr(array[i], re);
  }

  return re;
}
