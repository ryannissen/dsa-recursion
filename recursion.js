/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  if (words[0].length > longest(words.slice(1))) {
    return words[0].length;
  } else {
    return longest(words.slice(1));
  }

  // if (words.length === 0) return 0;
  // if (words.length === 1) return words[0].length;

  // if (words[0].length > longest(words.slice(1))) {
  //   return words[0].length;
  // }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 1) return str[0];
  if (str.length === 2) return str[0];

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// T A C O C A T

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2 && str[0] === str[1]) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// ["duck", "cat", "pony", "cat"]

function findIndex(arr, val) {
  if (arr[0] === val) return 0;
  if (arr.length === 0) return -1;

  const findIdx = findIndex(arr.slice(1), val);

  if (findIdx === -1) {
    return -1;
  } else return 1 + findIdx;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 1) return str[0];

  //let letter = str[0] + revString(str.slice(1))
  return revString(str.slice(1)) + str[0]
 }

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (Object.keys(obj).length === 0) return [];

  for (let key in obj) {
    if (typeof(obj[key]) === "string") {
      const stringValue = obj[key]
      delete obj[key]
      return [stringValue, ...gatherStrings(obj)]
    } else if (typeof(obj[key]) === "object") {
      return gatherStrings(obj[key]);
    } else {
      delete obj[key]
      return gatherStrings(obj);
    }
  }
 }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) { }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
