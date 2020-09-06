export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let re = 0;
  if (!prediction || prediction() === undefined || prediction() == null || prediction() === '') {
    re = 0;
  } else {
    re = 1;
  }

  if (string === undefined || string == null || string === '') {
    return 0 + re;
  }

  if (!prediction) {
    return string.length;
  }

  return 1 + re;
}
