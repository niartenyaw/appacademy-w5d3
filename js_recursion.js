const range = (start, end) => {
  if (start > end) { return [ ]; }

  return [start].concat(range(start + 1, end));
};

// console.log( range(1, 5) );

const arraySum = (arr) => {
  if (arr.length === 1) { return arr[0]; }

  return arraySum(arr.slice(1, arr.length)) + arr[0];
};

// console.log( arraySum([1, 2, 3, 4, 5]));

const exp1 = (b, n) =>{
  if (n === 0) { return 1; }

  return b * exp1(b, n - 1);
};

// console.log(exp1(2,5));

const exp2 = (b, n) => {
  if (n === 0) { return 1; }
  if (n === 1) { return b; }

  if (n % 2 === 0) {
    const temp = exp2(b, n / 2);
    return  temp * temp;
  } else {
    const temp = exp2(b, (n-1) / 2);
    return b * temp * temp;
  }
};
// console.log(exp2(2,5));

const fibonacci = (n) => {
  if (n === 1) { return [0]; }
  if (n === 2) { return [0, 1]; }

  const lastFib = [].concat(fibonacci(n - 1));

  const next = lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2];
  lastFib.push(next);
  return lastFib;
};

// console.log(fibonacci(6));

const bsearch = (arr, target) => {

  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) { return mid; }
  if ( arr.length <= 1 ) { return null; }

  if (target < arr[mid]) {
    return bsearch(arr.slice(0, mid), target);
  }
  else {
    const idx = bsearch(arr.slice(mid + 1, arr.length), target);
    if (idx === null) {
        return null;
    }
    else {
      return 1 + mid + idx;
    }
  }
};

// console.log(bsearch([1, 2, 3], 1)); // => 0
// console.log(bsearch([2, 3, 4, 5], 3)); // => 1
// console.log(bsearch([2, 4, 6, 8, 10], 6)); // => 2
// console.log(bsearch([1, 3, 4, 5, 9], 5)); // => 3
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6)); // => 5
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0)); // => nil
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6)); // => nil

const makeChange = (amount, coins) => {
  if (coins.length === 0) { return []; }
  if (amount === coins[0]) { return [coins[0]]; }

  // Find all change with the largest coin available
  const leftOver = amount - coins[0];
  let largeCoinOption = null;
  if (leftOver >= 0) {
    largeCoinOption = [coins[0]].concat(makeChange(leftOver, coins));
  }
  // Find all change with the next largest coin available
  const smallCoinOption = makeChange(amount, coins.slice(1, coins.length));

  if (largeCoinOption && largeCoinOption.length <= smallCoinOption.length) {
    return largeCoinOption;
  }
  return smallCoinOption;
};

console.log(makeChange(14, [10, 7, 1]));

const mergeSort = (arr) => {
  if (arr.length === 1) { return arr; }

  const mid = arr.length / 2;

  const leftSide = mergeSort(arr.slice(0, mid));
  const rightSide = mergeSort(arr.slice(mid, arr.length));

  return merge(leftSide, rightSide);
};

const merge = (left, right) => {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      merged.push(left.shift());
    }
    else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left).concat(right);
};

// console.log(mergeSort([7,5,3,7,9,4,2,1]));

const subSets = (arr) => {
  console.log(arr.length);
  if (arr.length === 0) { return [[]]; }

  const prev = subSets(arr.slice(0, arr.length - 1));
  const last = arr[arr.length - 1];
  const len = prev.length;

  for (let i = 0; i < len; i++) {
    prev.push(prev[i].concat([last]));
  }

  return prev;
};

// console.log(subSets([1,2,3]));
