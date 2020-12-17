function memoizedAddTo256() {
  var cache = {};
  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num];
    } else {
      cache[num] = num + 256;
      return cache[num];
    }
  };
}
var memoizedFunc = memoizedAddTo256();
console.log(memoizedFunc(20)); // Normal return
console.log(memoizedFunc(20)); // Cached return
