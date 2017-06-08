/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // if (n < 0) { return null; }
  // if (n === 0) { return 1; }
  // return n * factorial(n-1);
  if (n === 0) { return 1; }
  return n > 0 ? n * factorial(n - 1) : null;
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  return array.length ? array[0] + sum(array.slice(1)) : 0;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  let res = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (Array.isArray(array[i])) {
  //     res = res.concat(arraySum(array[i]));
  //   } else {
  //     res.push(array[i]);
  //   }
  // }
  for (let [index, element] of array.entries()) {
    if (Array.isArray(element)) {
      res = res.concat(arraySum(element));
    } else {
      res.push(element);
    }
  }
  return res.length ? res.reduce((a,b)=> {
    return a + b;
  }) : 0;
};

// let arr = [[1],[2,3],[[4]],5];
// console.log(arraySum(arr));
// console.log(arr);

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  return isEven(n - 2);
};
// console.log(isEven(-14));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n > 0) {
    return n === 0 ? n : n - 1 + sumBelow(n - 1);
  } else {
    return n === 0 ? n : n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (y >= x) {
    if (y - x <= 1) { return []; }
    if (y - x === 2) {
      return [x + 1];
    } else {
      let res = range(x, y - 1);
      res.push(y - 1);
      return res;
    }
  }
  if (x >= y) {
    if (x - y <= 1) { return []; }
    if (x - y === 2) {
      return [y + 1];
    } else {
      let res = range(x, y + 1);
      res.push(y + 1);
      return res;
    }
  }
};

// console.log(range(-3,-2));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp > 0) {
    return exp === 1 ? base : exponent(base, exp - 1) * base;
  } else {
    return exp === 1 ? base : exponent(base, exp + 1) * 1/base;
  }
};

// console.log(exponent(7, 0));
// console.log(Math.pow(7, 0));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 2 || n === 1) return true;
  let res = n / 2;
  if (res < 2) {
    return false;
  } else if (res === 2) {
    return true;
  } else {
    return powerOfTwo(res);
  }
};

// console.log(powerOfTwo(1));

// 9. Write a function that reverses a string.
let str = 'steven';
var reverse = function(string) {
  if (string === '') {
    return '';
  } else {
    return reverse(string.substr(1)) + string.charAt(0);
  }
};
// console.log(reverse('asshole'));

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();
  if (string.length < 2) { return true };
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length -1));
  }
  return false;
};

// console.log(palindrome('Madam'))

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x === 0 && y === 0) return NaN;
  if (x < y) return x;
  if (x > y) {
    return modulo(x-y, y);
  };
};

// console.log(modulo(-275, -502));
// console.log(-275 % -502);

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 1) return y;
  if (x === 0) return x;
  if (y === 1) return x;
  if (y === 0) return y;
  let res;
  if (x > 0 && y > 0) {
    res = multiply(x, y - 1) + x;
  }
  if (x < 0 && y > 0) {
    res = multiply(x, y - 1) + x;
  }
  if (x > 0 && y < 0) {
    res = multiply(x, y + 1) - x;
  }
  if (x < 0 && y < 0) {
    res = multiply(x, y + 1) - x;
  }
  return res;
};
// console.log(multiply(12, 3));

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
  if (x === 1) return y;
  if (y === 1) return x;
  if (x === 0) return 0;
  if (y === 0) return NaN;
  let res;
  if (x > 0 && y > 0) {
    res = divide(x - y, y - 1);
  }
  return res;
};
// console.log(divide(17, 5));
// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x <= 0 || y <= 0) return null;
  if (x >= 0 && y >= 0) {
    if(x === y){
      return x;
    }
    if(y > x){
      return gcd(x, y-x);
    }
    if(x > y){
      return gcd(x-y, y);
    }
  }
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  } else if (str1[0] === str2[0]) {
    return compareStr(str1.substr(1), str2.substr(1));
  }
  return false;
};

// console.log(compareStr('tomato', 'tomato'))
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str[0]];
  }
  let res = createArray(str.substr(0, str.length-1));
  res.push(str[str.length-1]);
  return res;
};

// console.log(createArray('steven'));

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return [array[0]];
  }
  let res = reverseArr(array.slice(1));
  res.push(array[0]);
  return res;
};
// console.log(reverseArr(['s','t','e','v','e','n']));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 1) {
    return [value];
  }
  let res = buildList(value, length - 1);
  res.push(value);
  return res;
};
// console.log(buildList(0, 5));

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 1) {
    return ['1'];
  }
  let res = fizzBuzz(n - 1);
  res.push(n.toString().replace(/[0-9]+/gi, function(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return num = 'FizzBuzz';
    } else if (num % 3 === 0) {
      return num = 'Fizz';
    } else if (num % 5 === 0) {
      return num = 'Buzz';
    } else {
      return num = num;
    }
  }));
  return res;
};

// console.log(fizzBuzz(15));

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  let count = 0;
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value) {
    count++;
  }
  let res = countOccurrence(array.slice(1), value);
  count = count + res;
  return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  let res = rMap(array.slice(0, array.length - 1), callback);
  res.push(callback(array[array.length - 1]));
  return res;
};
// let arr = [1,2,3];
// console.log(arr.slice(1));
// console.log(arr);

// 22. Write a function that counts the number of times a key occurs in an object.
var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
var countKeysInObj = function(obj, key) {
  let count = 0;
  for (let keys in obj) {
    if (typeof obj[keys] === 'object') {
      let res = countKeysInObj(obj[keys], key);
      count = count + res;
    }
    if (keys === key) {
      count++;
    }
  }
  return count;
};
// console.log(countKeysInObj(obj, 'r')) // 1
// console.log(countKeysInObj(obj, 'e')) // 2
// console.log(Object.keys(obj).indexOf('r') > -1);

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      let res = countValuesInObj(obj[key], value);
      count = count + res;
    }
    if (obj[key] === value) {
      count++;
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) return null;
  if (n === 1) {
    return [0, 1];
  }
  let res = fibonacci(n-1);

  res.push(res[res.length - 2] + res[res.length - 1]);
  return res;
};

// console.log(fibonacci(5));

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) {
    return [0, 1];
  }
  let res = nthFibo(n-1);
  res.push(res[res.length-2] + res[res.length-1]);
  res = [res[res.length-2], res[res.length-1]];
  return res;
};

// console.log(nthFibo(5));

// 27. Given an array of words, return a new array containing each word capitalized.
var words = ['i', 'am', 'learning', 'recursion'];
var capitalizeWords = function(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
};
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// 28. Given an array of strings, capitalize the first letter of each index.
var capitalizeFirst = function(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  let string = array.slice(array.length-1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
};
// console.log(capitalizeFirst(["ceci","n'est","pas","une","pipe"])); // ['Car','Poop','Banana']


// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

};

// 30. Flatten an array containing nested arrays.
var flatten = function(array) {
  let res = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (Array.isArray(array[i])) {
  //     res = res.concat(flatten(array[i]));
  //   } else {
  //     res = res.concat(array[i]);
  //   }
  // }
  for (let [index, element] of array.entries()) {
    if (Array.isArray(element)) {
      res = res.concat(flatten(element));
    } else {
      res = res.concat(element);
    }
  }
  return res;
};
// console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]

// 31. Given a string, return an object containing tallies of each letter.
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  }
  let res = letterTally(str.substr(1), obj);
  if (obj[str.substr(0,1)] === undefined) {
    obj[str.substr(0,1)] = 1;
  } else {
    obj[str.substr(0,1)]++;
  }
  return res;
};
// console.log(letterTally('potato')); // {p:1, o:2, t:2, a:1}

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
var compress = function(list) {
  if (list.length === 0) {
    return [];
  }
  let res = compress(list.slice(0, -1));
  if (list[list.length - 1] !== list[list.length - 2]) {
    res.push(list[list.length - 1]);
  }
  return res;
};

// console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4])); // [1,2,3,4,2,5,4]


// 33. Augument every element in a list with a new value where each element is an array
// itself.
var augmentElements = function(array, aug) {
  if (array.length === 1) {
    return [array[0].concat([aug])];
  }
  let res = augmentElements(array.slice(0,-1), aug);
  res.push(array[array.length -1].concat(aug));
  return res;
};
// console.log(augmentElements([[],[3],[7]], 5)); // [[5],[3,5],[7,5]]


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 1) {
    return [array[0]];
  }
  let res = minimizeZeroes(array.slice(0, -1));
  if (res[res.length - 1] !== 0 || array[array.length - 1] !== 0) {
    res.push(array[array.length - 1]);
  }
  return res;
};

// console.log(minimizeZeroes([2,0,0,0,1,0,0,4])); // [2,0,1,4]

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 1) {
    return [Math.abs(array[0])];
  }
  let res = alternateSign(array.slice(0,-1));
  if (array.length % 2 === 0) {
    res.push(Math.abs(array[array.length - 1]) * -1);
  } else {
    res.push(Math.abs(array[array.length - 1]));
  }
  return res;
};
console.log(alternateSign([-2,-7,8,3,-1,4])); // [2,-7,8,-3,1,-4]

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};


var arr = [10,9,8,5,4,21,6,4,5,0];
var insertionSort = function(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--; 
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(arr));





