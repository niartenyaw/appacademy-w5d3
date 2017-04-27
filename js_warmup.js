const uniq = (arr) => {
  const uniqs = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqs.includes(arr[i])) {
      uniqs.push(arr[i]);
    }
  }

  return uniqs;
};

// console.log(uniq([1, 2, 1, 3, 3]));


const twoSum = (arr, target) => {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([i,j]);
      }
    }
  }

  return pairs;
};

// console.log(twoSum([-1, 0, 2, -2, 1], 0));


const transpose = (arr) => {
  const transposed = [];

  for (let i = 0; i < arr.length; i++) {
    const row = [];

    for (let j = 0; j < arr.length; j++) {
      row.push(arr[j][i]);
    }
    transposed.push(row);
  }

  return transposed;
};

// console.log(
//   transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ])
// );

const timesTwoPrint = (num) => {
  console.log(num * 2);
};
const timesTwo = (num) => {
  return num * 2;
};

// Array.prototype.myEach = function(func) {
//   for (let i = 0; i < this.length; i++) {
//     func(this[i]);
//   }
// };

const myEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }

  return arr;
};

// console.log(myEach([1, 2, 3, 4], timesTwoPrint));

const myMap = (arr, func) => {
  const mapped = [];

  const map = (el) => {
    mapped.push(func(el));
  };

  myEach(arr, map);

  return mapped;
};

// console.log(myMap([1, 2, 3, 4], timesTwo));

const myInject = (arr, func) => {
  let accumlator = arr[0];

  const inject = (el) => {
    accumlator = func(accumlator, el);
  };

  myEach(arr.slice(1, arr.length), inject);

  return accumlator;
};

// console.log(myInject([1, 2, 3, 4, 5], (acc, el) => { return acc + el; } ));

const bubbleSort = (arr) => {
  let swapped = true;
  while (swapped){
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      const j = i + 1;
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
  }

  return arr;
};

// console.log(bubbleSort([5,2,3,4,1,4]));

const substrings = (string) => {
  const subs = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      subs.push(string.slice(i, j));
    }
  }

  return uniq(subs);
};

// console.log( substrings('dogog') );
