export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.
  promises.forEach((e) => {
    if (Object.prototype.toString.call(e) !== '[object Promise]') {
      throw new Error('Not all elements are promises.');
    }
  });

  // Promise.all(promises).then((p) => {

  // }).catch(() => {
  //   throw new Error('Not all elements are promises.');
  // });

  let yes = null;
  let no = null;
  let re = null;

  promises.forEach((promise) => {
    promise.then((yesVal) => {
      yes = yesVal;
    }, (noVal) => {
      no = noVal;
    });
  });

  if (yes == null && no != null) {
    re = no;
  }


  return new Promise((resolve, reject) => {
    resolve(re);
    reject(re);
  });
}
